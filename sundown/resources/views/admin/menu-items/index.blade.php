@extends('admin.layouts.admin')
@section('title', 'Menu Items')
@section('page_title', 'Menu Items')

@section('content')
<div class="flex justify-between items-center mb-6">
    <p class="text-gray-500 text-sm">{{ $menuItems->total() }} items total</p>
    <a href="{{ route('admin.menu-items.create') }}" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
        + Add Item
    </a>
</div>
<div class="bg-white rounded-xl shadow-sm overflow-hidden">
    <table class="w-full text-sm">
        <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
                <th class="px-4 py-3 text-left">Image</th>
                <th class="px-4 py-3 text-left">Name</th>
                <th class="px-4 py-3 text-left">Category</th>
                <th class="px-4 py-3 text-left">Available</th>
                <th class="px-4 py-3 text-right">Actions</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            @foreach($menuItems as $item)
            <tr class="hover:bg-gray-50">
                <td class="px-4 py-3">
                    <img src="{{ $item->image_url }}" alt="{{ $item->name }}" class="w-12 h-12 object-cover rounded-lg bg-gray-100"
                         onerror="this.src='{{ asset('images/placeholder.png') }}'">
                </td>
                <td class="px-4 py-3 font-medium text-gray-800">
                    {{ $item->name }}
                    @if($item->description)
                        <p class="text-gray-400 text-xs font-normal">{{ Str::limit($item->description, 60) }}</p>
                    @endif
                </td>
                <td class="px-4 py-3 text-gray-500">
                    {{ $item->category->name }}<br>
                    <span class="text-xs text-gray-400">{{ $item->category->section }}</span>
                </td>
                <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded-full text-xs {{ $item->available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600' }}">
                        {{ $item->available ? 'Yes' : 'No' }}
                    </span>
                </td>
                <td class="px-4 py-3 text-right">
                    <div class="flex gap-2 justify-end">
                        <a href="{{ route('admin.menu-items.edit', $item) }}" class="text-amber-600 hover:underline">Edit</a>
                        <form method="POST" action="{{ route('admin.menu-items.destroy', $item) }}" onsubmit="return confirm('Delete this item?')">
                            @csrf @method('DELETE')
                            <button type="submit" class="text-red-500 hover:underline">Delete</button>
                        </form>
                    </div>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
<div class="mt-4">{{ $menuItems->links() }}</div>
@endsection
