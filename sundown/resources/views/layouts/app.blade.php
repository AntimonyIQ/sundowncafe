<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', config('app.name', 'Sundown Cafe'))</title>
    <meta name="description" content="@yield('meta_description', 'Sundown Cafe - Artisan Flavors. Coffee, Cuisine & Atmosphere in Port Harcourt.')">

    @yield('meta')

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @yield('styles')
</head>
<body class="font-sans antialiased">
    @yield('content')
    @yield('scripts')
</body>
</html>

