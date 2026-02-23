<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Admin') — Sundown Cafe</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100 font-sans">
<div class="flex h-screen overflow-hidden">
    {{-- Sidebar --}}
    <aside class="w-64 bg-gray-900 text-white flex flex-col flex-shrink-0">
        <div class="px-6 py-5 border-b border-gray-700">
            <a href="/" class="text-amber-400 font-bold text-lg tracking-widest uppercase">Sundown Cafe</a>
            <p class="text-gray-500 text-xs mt-1">Admin Panel</p>
        </div>
        <nav class="flex-1 px-4 py-6 space-y-1">
            <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm {{ request()->routeIs('admin.dashboard') ? 'bg-amber-600 text-white' : 'text-gray-300 hover:bg-gray-800' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
                Dashboard
            </a>
            <a href="{{ route('admin.categories.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm {{ request()->routeIs('admin.categories*') ? 'bg-amber-600 text-white' : 'text-gray-300 hover:bg-gray-800' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                Categories
            </a>
            <a href="{{ route('admin.menu-items.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm {{ request()->routeIs('admin.menu-items*') ? 'bg-amber-600 text-white' : 'text-gray-300 hover:bg-gray-800' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" /></svg>
                Menu Items
            </a>
            <a href="{{ route('admin.settings.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm {{ request()->routeIs('admin.settings*') ? 'bg-amber-600 text-white' : 'text-gray-300 hover:bg-gray-800' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Settings
            </a>
        </nav>
        <div class="px-4 pb-6 border-t border-gray-700 pt-4">
            <a href="/" class="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                View Site
            </a>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit" class="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Logout
                </button>
            </form>
        </div>
    </aside>

    {{-- Main content --}}
    <div class="flex-1 flex flex-col overflow-hidden">
        <header class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 class="text-gray-800 font-semibold text-lg">@yield('page_title', 'Dashboard')</h2>
            <span class="text-gray-500 text-sm">{{ auth()->user()->name ?? 'Admin' }}</span>
        </header>
        <main class="flex-1 overflow-y-auto p-6">
            @if(session('success'))
                <div class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm">
                    {{ session('success') }}
                </div>
            @endif
            @yield('content')
        </main>
    </div>
</div>
</body>
</html>
