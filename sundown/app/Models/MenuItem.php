<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    protected $fillable = ['category_id', 'name', 'description', 'image_path', 'available', 'sort_order'];

    protected $casts = ['available' => 'boolean'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getImageUrlAttribute()
    {
        if ($this->image_path) {
            return asset('storage/' . $this->image_path);
        }
        return asset('images/placeholder.png');
    }
}
