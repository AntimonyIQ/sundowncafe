<?php

namespace App\Http\Controllers;

use App\Models\Setting;

class HomeController extends Controller
{
    public function index()
    {
        $settings = [
            'cafe_name'        => Setting::get('cafe_name', 'Sundown Cafe'),
            'cafe_address'     => Setting::get('cafe_address', '149 Woji Road, GRA, Port Harcourt'),
            'cafe_phone'       => Setting::get('cafe_phone', '+234 812 345 6789'),
            'cafe_instagram'   => Setting::get('cafe_instagram', 'https://www.instagram.com/sundownbysky'),
            'cafe_video_url'   => Setting::get('cafe_video_url', '/videos/bg1.mp4'),
            'cafe_established' => Setting::get('cafe_established', '2024'),
        ];

        return view('home', compact('settings'));
    }
}
