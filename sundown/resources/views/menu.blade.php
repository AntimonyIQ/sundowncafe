@extends('layouts.app')

@section('title', 'Menu — ' . $settings['cafe_name'])
@section('meta_description', 'Explore the full menu at Sundown Cafe — Wholesome plates, grills, coffee, desserts and more.')

@section('styles')
<style>
    body { background: #1a1a1a; min-height: 100vh; }
    .tab-btn.active { background: #d97706; color: #fff; }
    .tab-btn { transition: all 0.2s; }
    .menu-item-card { cursor: pointer; transition: transform 0.15s; }
    .menu-item-card:hover { transform: scale(1.02); }
    .modal-backdrop { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 50; align-items: center; justify-content: center; }
    .modal-backdrop.open { display: flex; }
    .hidden-item { display: none; }
</style>
@endsection

@section('content')
<div class="min-h-screen" style="background: #1a1a1a;">
    {{-- Header --}}
    <div class="text-center py-8 px-4">
        <a href="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
        </a>
        <h1 class="text-4xl font-bold text-white tracking-[0.3em] uppercase">Sundown Menu</h1>
        @if($seatParam)
            <p class="mt-2 text-amber-400 text-sm tracking-wider">Table / Seat: {{ $seatParam }}</p>
        @endif
    </div>

    {{-- Search --}}
    <div class="max-w-2xl mx-auto px-4 mb-6">
        <input id="searchInput" type="text" placeholder="Search menu items..."
               class="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 placeholder-gray-500"
               oninput="filterMenu(this.value)">
    </div>

    {{-- Tabs --}}
    <div class="flex justify-center gap-3 px-4 mb-8">
        @foreach($sections as $sectionName => $categories)
            <button onclick="switchTab('{{ Str::slug($sectionName) }}')"
                    id="tab-{{ Str::slug($sectionName) }}"
                    class="tab-btn px-6 py-2 rounded-full border border-amber-600 text-amber-400 font-semibold tracking-wider text-sm uppercase {{ $loop->first ? 'active' : '' }}">
                {{ $sectionName }}
            </button>
        @endforeach
    </div>

    {{-- Menu Sections --}}
    @foreach($sections as $sectionName => $categories)
        <div id="section-{{ Str::slug($sectionName) }}" class="section-panel max-w-5xl mx-auto px-4 pb-12 {{ !$loop->first ? 'hidden' : '' }}">
            @foreach($categories as $category)
                <div class="mb-8">
                    <h2 class="text-amber-400 text-lg font-semibold tracking-widest uppercase mb-4 border-b border-gray-700 pb-2">
                        {{ $category->name }}
                    </h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        @foreach($category->menuItems as $item)
                            <div class="menu-item-card bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                                 onclick="openModal({{ $item->id }}, '{{ addslashes($item->name) }}', '{{ addslashes($item->description ?? '') }}', '{{ $item->image_url }}')"
                                 data-name="{{ strtolower($item->name) }} {{ strtolower($item->description ?? '') }}">
                                <div class="aspect-square bg-gray-700 relative">
                                    <img src="{{ $item->image_url }}" alt="{{ $item->name }}"
                                         class="w-full h-full object-cover"
                                         onerror="this.src='{{ asset('images/placeholder.png') }}'">
                                </div>
                                <div class="p-3">
                                    <p class="text-white text-sm font-medium leading-tight">{{ $item->name }}</p>
                                    @if($item->description)
                                        <p class="text-gray-400 text-xs mt-1 leading-snug">{{ $item->description }}</p>
                                    @endif
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    @endforeach

    {{-- Floating selection button --}}
    <div id="selectionBtn" class="fixed bottom-6 right-6 z-40 {{ count($selection) > 0 ? '' : 'hidden' }}">
        <a href="/selection"
           class="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-full shadow-2xl font-semibold transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            View Selection (<span id="selectionCount">{{ count($selection) }}</span>)
        </a>
    </div>
</div>

{{-- Modal --}}
<div id="itemModal" class="modal-backdrop" onclick="closeModalOnBackdrop(event)">
    <div class="bg-gray-900 rounded-2xl max-w-sm w-full mx-4 overflow-hidden shadow-2xl relative">
        <button onclick="closeModal()" class="absolute top-3 right-3 text-gray-400 hover:text-white z-10 bg-gray-800 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="aspect-video bg-gray-700">
            <img id="modalImage" src="" alt="" class="w-full h-full object-cover"
                 onerror="this.src='{{ asset('images/placeholder.png') }}'">
        </div>
        <div class="p-5">
            <h3 id="modalName" class="text-white text-xl font-bold mb-2"></h3>
            <p id="modalDesc" class="text-gray-400 text-sm mb-5"></p>
            <button id="addToSelBtn" onclick="addToSelection()"
                    class="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition">
                Add to Selection
            </button>
            <p id="alreadyAdded" class="text-green-400 text-center text-sm mt-3 hidden">✓ Already in your selection</p>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    let currentItemId = null;
    let selection = @json($selection);

    function switchTab(sectionSlug) {
        document.querySelectorAll('.section-panel').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('section-' + sectionSlug).classList.remove('hidden');
        document.getElementById('tab-' + sectionSlug).classList.add('active');
    }

    function filterMenu(query) {
        const q = query.toLowerCase().trim();
        document.querySelectorAll('.menu-item-card').forEach(card => {
            const name = card.dataset.name || '';
            card.style.display = (!q || name.includes(q)) ? '' : 'none';
        });
        if (q) {
            // Show all sections when searching
            document.querySelectorAll('.section-panel').forEach(p => p.classList.remove('hidden'));
        }
    }

    function openModal(id, name, desc, imgUrl) {
        currentItemId = id;
        document.getElementById('modalImage').src = imgUrl;
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalDesc').textContent = desc;
        const inSelection = selection.includes(id) || selection.includes(String(id));
        document.getElementById('addToSelBtn').classList.toggle('hidden', inSelection);
        document.getElementById('alreadyAdded').classList.toggle('hidden', !inSelection);
        document.getElementById('itemModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('itemModal').classList.remove('open');
        document.body.style.overflow = '';
        currentItemId = null;
    }

    function closeModalOnBackdrop(e) {
        if (e.target === document.getElementById('itemModal')) closeModal();
    }

    function addToSelection() {
        if (!currentItemId) return;
        fetch('/selection/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify({ item_id: currentItemId })
        })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                if (!selection.includes(currentItemId) && !selection.includes(String(currentItemId))) {
                    selection.push(currentItemId);
                }
                updateSelectionUI(data.count);
                document.getElementById('addToSelBtn').classList.add('hidden');
                document.getElementById('alreadyAdded').classList.remove('hidden');
            }
        });
    }

    function updateSelectionUI(count) {
        document.getElementById('selectionCount').textContent = count;
        const btn = document.getElementById('selectionBtn');
        btn.classList.toggle('hidden', count === 0);
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
</script>
@endsection
