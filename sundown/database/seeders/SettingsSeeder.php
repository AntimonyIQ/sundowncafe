<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            'cafe_name'        => 'Sundown Cafe',
            'cafe_address'     => '149 Woji Road, GRA, Port Harcourt',
            'cafe_phone'       => '+234 812 345 6789',
            'cafe_instagram'   => 'https://www.instagram.com/sundownbysky',
            'cafe_video_url'   => '/videos/bg1.mp4',
            'cafe_established' => '2024',
        ];

        foreach ($settings as $key => $value) {
            Setting::set($key, $value);
        }
    }
}
