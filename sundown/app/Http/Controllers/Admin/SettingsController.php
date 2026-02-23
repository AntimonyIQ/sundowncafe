<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();

        return view('admin.settings.index', compact('settings'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'cafe_name'        => 'required|string|max:255',
            'cafe_address'     => 'nullable|string|max:500',
            'cafe_phone'       => 'nullable|string|max:50',
            'cafe_instagram'   => 'nullable|url|max:255',
            'cafe_video_url'   => 'nullable|string|max:255',
            'cafe_established' => 'nullable|string|max:10',
        ]);

        foreach ($validated as $key => $value) {
            Setting::set($key, $value);
        }

        return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully.');
    }
}
