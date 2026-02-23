@extends('admin.layouts.admin')
@section('title', 'Categories')
@section('page_title', 'Categories')

@section('content')
<div class="flex justify-between items-center mb-6">
    <p class="text-gray-500 text-sm">{{ $categories->count() }} categories total</p>
    <a href="{{ route('admin.categories.create') }}" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
        + Add Category
    </a>
</div>
<div class="bg-white rounded-xl shadow-sm overflow-hidden">
    <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
                <th class="px-6 py-3 text-left">Name</th>
                <th class="px-6 py-3 text-left">Section</th>
                <th class="px-6 py-3 text-left">Items</th>
                <th class="px-6 py-3 text-left">Order</th>
                <th class="px-6 py-3 text-right">Actions</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            @foreach($categories as $category)
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-medium text-gray-800">{{ $category->name }}</td>
                <td class="px-6 py-4 text-gray-500">{{ $category->section }}</td>
                <td class="px-6 py-4 text-gray-500">{{ $category->menu_items_count }}</td>
                <td class="px-6 py-4 text-gray-500">{{ $category->sort_order }}</td>
                <td class="px-6 py-4 text-right flex gap-2 justify-end">
                    <a href="{{ route('admin.categories.edit', $category) }}" class="text-amber-600 hover:underline">Edit</a>
                    <form method="POST" action="{{ route('admin.categories.destroy', $category) }}" onsubmit="return confirm('Delete this category and all its items?')">
                        @csrf @method('DELETE')
                        <button type="submit" class="text-red-500 hover:underline">Delete</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
