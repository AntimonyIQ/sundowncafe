@extends('admin.layouts.admin')
@section('title', 'Settings')
@section('page_title', 'Café Settings')

@section('content')
<div class="max-w-2xl bg-white rounded-xl shadow-sm p-6">
    <form method="POST" action="{{ route('admin.settings.update') }}">
        @csrf
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Café Name</label>
            <input type="text" name="cafe_name" value="{{ old('cafe_name', $settings['cafe_name'] ?? '') }}" required
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
            @error('cafe_name')<p class="text-red-500 text-xs mt-1">{{ $message }}</p>@enderror
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" name="cafe_address" value="{{ old('cafe_address', $settings['cafe_address'] ?? '') }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="text" name="cafe_phone" value="{{ old('cafe_phone', $settings['cafe_phone'] ?? '') }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
            <input type="url" name="cafe_instagram" value="{{ old('cafe_instagram', $settings['cafe_instagram'] ?? '') }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Background Video URL</label>
            <input type="text" name="cafe_video_url" value="{{ old('cafe_video_url', $settings['cafe_video_url'] ?? '') }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
            <p class="text-gray-400 text-xs mt-1">e.g. /videos/bg1.mp4</p>
        </div>
        <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Year Established</label>
            <input type="text" name="cafe_established" value="{{ old('cafe_established', $settings['cafe_established'] ?? '') }}"
                   class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
        </div>
        <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
            Save Settings
        </button>
    </form>
</div>
@endsection
