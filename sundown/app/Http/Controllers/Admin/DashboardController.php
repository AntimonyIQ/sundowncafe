<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\MenuItem;

class DashboardController extends Controller
{
    public function index()
    {
        $categoriesCount = Category::count();
        $menuItemsCount = MenuItem::count();
        $availableCount = MenuItem::where('available', true)->count();

        return view('admin.dashboard', compact('categoriesCount', 'menuItemsCount', 'availableCount'));
    }
}
