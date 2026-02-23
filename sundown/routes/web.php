<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\MenuItemController;
use App\Http\Controllers\Admin\SettingsController;
use Illuminate\Support\Facades\Route;

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/menu', [MenuController::class, 'index'])->name('menu');
Route::post('/selection/add', [MenuController::class, 'addToSelection'])->name('selection.add');
Route::post('/selection/remove', [MenuController::class, 'removeFromSelection'])->name('selection.remove');
Route::post('/selection/clear', [MenuController::class, 'clearSelection'])->name('selection.clear');
Route::get('/selection', [MenuController::class, 'viewSelection'])->name('selection.view');

// Sitemap
Route::get('/sitemap.xml', function () {
    return response()->view('sitemap')->header('Content-Type', 'application/xml');
})->name('sitemap');

// Admin routes
Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('categories', CategoryController::class);
    Route::resource('menu-items', MenuItemController::class);
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::post('/settings', [SettingsController::class, 'update'])->name('settings.update');
});

// Auth routes
require __DIR__.'/auth.php';
