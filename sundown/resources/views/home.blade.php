@extends('layouts.app')

@section('title', $settings['cafe_name'] . ' — Artisan Flavors')
@section('meta_description', 'Sundown Cafe — Coffee, Cuisine & Atmosphere. Located at ' . $settings['cafe_address'])

@section('meta')
<script type="application/ld+json">
{
    "@@context": "https://schema.org",
    "@@type": "CafeOrCoffeeShop",
    "name": "{{ $settings['cafe_name'] }}",
    "address": {
        "@@type": "PostalAddress",
        "streetAddress": "{{ $settings['cafe_address'] }}"
    },
    "telephone": "{{ $settings['cafe_phone'] }}",
    "sameAs": ["{{ $settings['cafe_instagram'] }}"],
    "foundingDate": "{{ $settings['cafe_established'] }}"
}
</script>
@endsection

@section('styles')
<style>
    body { margin: 0; overflow: hidden; }
    .home-video {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        object-fit: cover; z-index: -1;
    }
    .overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.55); z-index: 0;
    }
    .home-content { position: relative; z-index: 1; height: 100vh; display: flex; flex-direction: column; }
</style>
@endsection

@section('content')
<video class="home-video" autoplay muted loop playsinline>
    <source src="{{ $settings['cafe_video_url'] }}" type="video/mp4">
</video>
<div class="overlay"></div>

<div class="home-content text-white">
    {{-- Top bar --}}
    <div class="flex justify-between items-center px-6 pt-6">
        <a href="/" class="flex items-center">
            <img src="{{ asset('images/icon.png') }}" alt="{{ $settings['cafe_name'] }}" class="h-12 w-auto"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
            <span style="display:none" class="text-xl font-bold tracking-widest text-amber-400">SUNDOWN</span>
        </a>
        <a href="{{ $settings['cafe_instagram'] }}" target="_blank" rel="noopener noreferrer"
           class="text-white hover:text-amber-400 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        </a>
    </div>

    {{-- Center content --}}
    <div class="flex-1 flex flex-col items-center justify-center text-center px-4">
        <p class="text-amber-400 tracking-[0.4em] text-sm mb-3 uppercase">Est. {{ $settings['cafe_established'] }}</p>
        <h1 class="text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4" style="font-family: serif; letter-spacing: 0.15em;">
            ARTISAN FLAVORS
        </h1>
        <p class="text-lg md:text-xl text-gray-300 tracking-widest mb-10">Coffee &bull; Cuisine &bull; Atmosphere</p>
        <a href="/menu"
           class="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 px-10 py-3 tracking-widest uppercase text-sm font-semibold">
            Explore Menu
        </a>
    </div>

    {{-- Bottom bar --}}
    <div class="flex justify-between items-end px-6 pb-6 text-xs text-gray-300">
        <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{{ $settings['cafe_address'] }}</span>
        </div>
        <div class="text-right">
            <p class="text-gray-400 text-xs mb-1 tracking-wider">RESERVATIONS</p>
            <a href="tel:{{ $settings['cafe_phone'] }}" class="hover:text-amber-400 transition-colors">{{ $settings['cafe_phone'] }}</a>
        </div>
    </div>
</div>
@endsection
