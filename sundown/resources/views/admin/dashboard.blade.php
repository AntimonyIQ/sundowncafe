@extends('admin.layouts.admin')
@section('title', 'Dashboard')
@section('page_title', 'Dashboard')

@section('content')
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <p class="text-gray-500 text-sm">Categories</p>
        <p class="text-4xl font-bold text-gray-800 mt-2">{{ $categoriesCount }}</p>
        <a href="{{ route('admin.categories.index') }}" class="text-amber-500 text-sm mt-3 inline-block hover:underline">Manage →</a>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <p class="text-gray-500 text-sm">Total Menu Items</p>
        <p class="text-4xl font-bold text-gray-800 mt-2">{{ $menuItemsCount }}</p>
        <a href="{{ route('admin.menu-items.index') }}" class="text-amber-500 text-sm mt-3 inline-block hover:underline">Manage →</a>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <p class="text-gray-500 text-sm">Available Items</p>
        <p class="text-4xl font-bold text-green-600 mt-2">{{ $availableCount }}</p>
        <p class="text-gray-400 text-xs mt-3">{{ $menuItemsCount - $availableCount }} unavailable</p>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <a href="{{ route('admin.categories.create') }}" class="bg-amber-500 hover:bg-amber-600 text-white rounded-xl px-6 py-4 font-semibold text-center transition">
        + Add Category
    </a>
    <a href="{{ route('admin.menu-items.create') }}" class="bg-gray-800 hover:bg-gray-900 text-white rounded-xl px-6 py-4 font-semibold text-center transition">
        + Add Menu Item
    </a>
</div>
@endsection
