@extends('layouts.app')

@section('title', 'Your Selection — ' . $settings['cafe_name'])

@section('styles')
<style>body { background: #1a1a1a; min-height: 100vh; }</style>
@endsection

@section('content')
<div class="min-h-screen" style="background: #1a1a1a;">
    <div class="max-w-3xl mx-auto px-4 py-10">
        <div class="flex items-center justify-between mb-8">
            <div>
                <a href="/menu" class="text-amber-400 hover:text-amber-300 text-sm tracking-wider flex items-center gap-1 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Menu
                </a>
                <h1 class="text-3xl font-bold text-white tracking-widest uppercase">Your Selection</h1>
            </div>
            @if(count($selectedItems) > 0)
                <button onclick="clearAll()" class="text-red-400 hover:text-red-300 text-sm border border-red-700 px-4 py-2 rounded-lg transition">
                    Clear All
                </button>
            @endif
        </div>

        @if(count($selectedItems) === 0)
            <div class="text-center py-20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p class="text-gray-400 text-lg mb-6">Your selection is empty.</p>
                <a href="/menu" class="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition">
                    Browse Menu
                </a>
            </div>
        @else
            <div id="itemsList" class="space-y-3">
                @foreach($selectedItems as $item)
                    <div id="item-{{ $item->id }}" class="flex items-center gap-4 bg-gray-800 rounded-xl p-4 shadow">
                        <div class="w-16 h-16 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                            <img src="{{ $item->image_url }}" alt="{{ $item->name }}"
                                 class="w-full h-full object-cover"
                                 onerror="this.src='{{ asset('images/placeholder.png') }}'">
                        </div>
                        <div class="flex-1">
                            <p class="text-white font-semibold">{{ $item->name }}</p>
                            @if($item->description)
                                <p class="text-gray-400 text-xs mt-1">{{ $item->description }}</p>
                            @endif
                            <p class="text-amber-400 text-xs mt-1">{{ $item->category->name }}</p>
                        </div>
                        <button onclick="removeItem({{ $item->id }})"
                                class="text-gray-500 hover:text-red-400 transition p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                @endforeach
            </div>
            <p id="emptyMsg" class="text-center text-gray-400 text-lg py-12 hidden">Your selection is empty. <a href="/menu" class="text-amber-400 hover:underline">Browse Menu</a></p>
        @endif
    </div>
</div>
@endsection

@section('scripts')
<script>
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    function removeItem(id) {
        fetch('/selection/remove', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify({ item_id: id })
        })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                const el = document.getElementById('item-' + id);
                if (el) el.remove();
                if (data.count === 0) {
                    document.getElementById('itemsList') && (document.getElementById('itemsList').classList.add('hidden'));
                    document.getElementById('emptyMsg') && document.getElementById('emptyMsg').classList.remove('hidden');
                }
            }
        });
    }

    function clearAll() {
        fetch('/selection/clear', {
            method: 'POST',
            headers: { 'X-CSRF-TOKEN': csrfToken }
        })
        .then(r => r.json())
        .then(() => {
            document.getElementById('itemsList') && (document.getElementById('itemsList').innerHTML = '');
            document.getElementById('emptyMsg') && document.getElementById('emptyMsg').classList.remove('hidden');
        });
    }
</script>
@endsection
