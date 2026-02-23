@extends('admin.layouts.admin')
@section('title', 'Create Category')
@section('page_title', 'Create Category')

@section('content')
<div class="max-w-xl bg-white rounded-xl shadow-sm p-6">
    <form method="POST" action="{{ route('admin.categories.store') }}">
        @csrf
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="name" value="{{ old('name') }}" required
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
            @error('name')<p class="text-red-500 text-xs mt-1">{{ $message }}</p>@enderror
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Section</label>
            <select name="section" required class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
                <option value="">Select section</option>
                <option value="Sundown Healthy" {{ old('section') == 'Sundown Healthy' ? 'selected' : '' }}>Sundown Healthy</option>
                <option value="Crazy Corner" {{ old('section') == 'Crazy Corner' ? 'selected' : '' }}>Crazy Corner</option>
            </select>
            @error('section')<p class="text-red-500 text-xs mt-1">{{ $message }}</p>@enderror
        </div>
        <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
            <input type="number" name="sort_order" value="{{ old('sort_order', 0) }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
        </div>
        <div class="flex gap-3">
            <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">Create</button>
            <a href="{{ route('admin.categories.index') }}" class="text-gray-500 hover:text-gray-700 px-4 py-2 text-sm">Cancel</a>
        </div>
    </form>
</div>
@endsection
