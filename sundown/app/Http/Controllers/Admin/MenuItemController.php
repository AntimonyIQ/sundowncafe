<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MenuItemController extends Controller
{
    public function index()
    {
        $menuItems = MenuItem::with('category')->orderBy('sort_order')->paginate(50);

        return view('admin.menu-items.index', compact('menuItems'));
    }

    public function create()
    {
        $categories = Category::orderBy('section')->orderBy('sort_order')->get();

        return view('admin.menu-items.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'image'       => 'nullable|image|max:2048',
            'available'   => 'nullable|boolean',
            'sort_order'  => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('menu-images', 'public');
        }

        unset($validated['image']);
        $validated['available'] = $request->boolean('available', true);

        MenuItem::create($validated);

        return redirect()->route('admin.menu-items.index')->with('success', 'Menu item created successfully.');
    }

    public function edit(MenuItem $menuItem)
    {
        $categories = Category::orderBy('section')->orderBy('sort_order')->get();

        return view('admin.menu-items.edit', compact('menuItem', 'categories'));
    }

    public function update(Request $request, MenuItem $menuItem)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'image'       => 'nullable|image|max:2048',
            'available'   => 'nullable|boolean',
            'sort_order'  => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($menuItem->image_path) {
                Storage::disk('public')->delete($menuItem->image_path);
            }
            $validated['image_path'] = $request->file('image')->store('menu-images', 'public');
        }

        unset($validated['image']);
        $validated['available'] = $request->boolean('available', true);

        $menuItem->update($validated);

        return redirect()->route('admin.menu-items.index')->with('success', 'Menu item updated successfully.');
    }

    public function destroy(MenuItem $menuItem)
    {
        if ($menuItem->image_path) {
            Storage::disk('public')->delete($menuItem->image_path);
        }

        $menuItem->delete();

        return redirect()->route('admin.menu-items.index')->with('success', 'Menu item deleted successfully.');
    }
}
