<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\MenuItem;
use App\Models\Setting;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        $sections = Category::with(['menuItems' => function ($q) {
            $q->where('available', true)->orderBy('sort_order');
        }])->orderBy('sort_order')->get()->groupBy('section');

        $seatParam = $request->query('seat');
        $settings = [
            'cafe_name' => Setting::get('cafe_name', 'Sundown Cafe'),
        ];
        $selection = session('selection', []);

        return view('menu', compact('sections', 'seatParam', 'settings', 'selection'));
    }

    public function addToSelection(Request $request)
    {
        $itemId = $request->input('item_id');
        $selection = session('selection', []);

        if (!in_array($itemId, $selection)) {
            $selection[] = $itemId;
            session(['selection' => $selection]);
        }

        return response()->json(['success' => true, 'count' => count($selection)]);
    }

    public function removeFromSelection(Request $request)
    {
        $itemId = $request->input('item_id');
        $selection = session('selection', []);
        $selection = array_values(array_filter($selection, fn($id) => $id != $itemId));
        session(['selection' => $selection]);

        return response()->json(['success' => true, 'count' => count($selection)]);
    }

    public function clearSelection()
    {
        session()->forget('selection');

        return response()->json(['success' => true, 'count' => 0]);
    }

    public function viewSelection()
    {
        $selection = session('selection', []);
        $selectedItems = MenuItem::with('category')->whereIn('id', $selection)->get();
        $settings = ['cafe_name' => Setting::get('cafe_name', 'Sundown Cafe')];

        return view('selection', compact('selectedItems', 'settings'));
    }
}
