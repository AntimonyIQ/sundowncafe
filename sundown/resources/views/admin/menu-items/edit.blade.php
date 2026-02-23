@extends('admin.layouts.admin')
@section('title', 'Edit Menu Item')
@section('page_title', 'Edit Menu Item')

@section('content')
<div class="max-w-2xl bg-white rounded-xl shadow-sm p-6">
    <form method="POST" action="{{ route('admin.menu-items.update', $menuItem) }}" enctype="multipart/form-data">
        @csrf @method('PUT')
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select name="category_id" required class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
                @foreach($categories->groupBy('section') as $section => $cats)
                    <optgroup label="{{ $section }}">
                        @foreach($cats as $cat)
                            <option value="{{ $cat->id }}" {{ old('category_id', $menuItem->category_id) == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                        @endforeach
                    </optgroup>
                @endforeach
            </select>
            @error('category_id')<p class="text-red-500 text-xs mt-1">{{ $message }}</p>@enderror
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="name" value="{{ old('name', $menuItem->name) }}" required
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
            @error('name')<p class="text-red-500 text-xs mt-1">{{ $message }}</p>@enderror
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea name="description" rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">{{ old('description', $menuItem->description) }}</textarea>
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Image</label>
            @if($menuItem->image_path)
                <img src="{{ $menuItem->image_url }}" alt="{{ $menuItem->name }}" class="w-24 h-24 object-cover rounded-lg mb-2 bg-gray-100">
            @endif
            <input type="file" name="image" accept="image/*" class="text-sm text-gray-500">
            <p class="text-gray-400 text-xs mt-1">Leave blank to keep existing image.</p>
            @error('image')<p class="text-red-500 text-xs mt-1">{{ $message }}</p>@enderror
        </div>
        <div class="mb-4 flex items-center gap-2">
            <input type="checkbox" name="available" id="available" value="1" {{ old('available', $menuItem->available) ? 'checked' : '' }} class="rounded border-gray-300">
            <label for="available" class="text-sm text-gray-700">Available</label>
        </div>
        <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
            <input type="number" name="sort_order" value="{{ old('sort_order', $menuItem->sort_order) }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
        </div>
        <div class="flex gap-3">
            <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">Update</button>
            <a href="{{ route('admin.menu-items.index') }}" class="text-gray-500 hover:text-gray-700 px-4 py-2 text-sm">Cancel</a>
        </div>
    </form>
</div>
@endsection
