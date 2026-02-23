<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        $menu = [
            'Sundown Healthy' => [
                'Wholesome Plates' => [
                    ['name' => 'Grilled Tilapia', 'description' => 'Served with steamed rice and creamy mushroom sauce'],
                    ['name' => 'Steak Mashed Potatoes', 'description' => 'Sautéed veggies and gravy'],
                    ['name' => 'Jollof Power Bowl', 'description' => 'Served with smoked salmon salad and protein of choice'],
                    ['name' => 'Seared Salmon & Citrus Greens', 'description' => 'Served with Parsley lime rice'],
                    ['name' => 'Grilled Chicken Teriyaki Bowl'],
                    ['name' => 'Grilled Chicken BBQ'],
                ],
                'Salad' => [
                    ['name' => 'Classic Caesar Salad'],
                    ['name' => 'Kale & Quinoa Crunch'],
                    ['name' => 'Hooked on Greens'],
                    ['name' => 'Mediterranean Salad'],
                    ['name' => 'Chicken Vegetable'],
                    ['name' => 'Coleslaw'],
                    ['name' => 'Chef Salad'],
                    ['name' => 'Smoked Salmon Salad'],
                    ['name' => 'Classic Waldorf Salad'],
                ],
                'Wraps & Sandwiches' => [
                    ['name' => 'Grilled Fish Tacos'],
                    ['name' => 'Avocado Delight Wrap'],
                    ['name' => 'Fresh Salad Wrap'],
                    ['name' => 'Whole Grain Chicken Wrap'],
                    ['name' => 'Whole Grain Bagel Sandwich'],
                    ['name' => 'Whole Grain Club Sandwich'],
                ],
                'Pasta' => [
                    ['name' => 'Pesto Pasta'],
                    ['name' => 'Vegetable Aglio-olio'],
                    ['name' => 'Seafood Spaghetti Marinara'],
                ],
                'Detox/Smoothie Options' => [
                    ['name' => 'Berry Bliss'],
                    ['name' => 'Green Boost Smoothie'],
                    ['name' => 'Avocado Green Smoothie'],
                    ['name' => 'Mango-Spinach Smoothie', 'description' => 'Seasoner'],
                    ['name' => 'Tropical Smoothie'],
                ],
            ],
            'Crazy Corner' => [
                'Breakfast' => [
                    ['name' => 'Classic French Toast'],
                    ['name' => 'Sardine French Toast'],
                    ['name' => 'Hearty Oatmeal Porridge'],
                    ['name' => 'Morning Mashup'],
                    ['name' => 'Classic American Breakfast'],
                    ['name' => 'English Breakfast'],
                ],
                'Starters' => [
                    ['name' => 'Spring Roll'],
                    ['name' => 'Samosa'],
                    ['name' => 'Gizdodo'],
                    ['name' => 'Buffalo Chicken Bites'],
                    ['name' => 'Calamari Rings'],
                    ['name' => 'Asun Tostadas'],
                    ['name' => 'Chicken BBQ Wings'],
                ],
                'Rice' => [
                    ['name' => 'Spicy Asun Rice'],
                    ['name' => 'Dirty Rice Bowl'],
                    ['name' => 'Coconut Rice Special'],
                    ['name' => 'Jambalaya Fried Rice'],
                    ['name' => 'Chinese Fried Rice'],
                    ['name' => 'Jollof Power Bowl'],
                ],
                'Noodles' => [
                    ['name' => 'Fried Noodles'],
                    ['name' => 'Pepper Soup Noodles'],
                    ['name' => 'Singapore Noodles'],
                ],
                'Pasta' => [
                    ['name' => 'Marry Me Pasta'],
                    ['name' => 'Pasta alla Vodka'],
                    ['name' => 'Creamy Fettuccine Alfredo'],
                    ['name' => 'Linguine Carbonara'],
                    ['name' => 'Seafood Pasta'],
                    ['name' => 'Pasta Bolognese'],
                    ['name' => 'Asun Fiery Pasta'],
                ],
                'Grills' => [
                    ['name' => 'Turkey'],
                    ['name' => 'Lemon Butter Salmon'],
                    ['name' => 'Grilled Steak'],
                    ['name' => 'Butterfly Prawns'],
                    ['name' => 'Braised Lamb Chops'],
                    ['name' => 'Beef Kebab'],
                    ['name' => 'Chicken Kebab'],
                    ['name' => 'Peppered Snail'],
                    ['name' => 'Chicken', 'description' => 'Peppered Chicken'],
                    ['name' => 'Seafood Boil'],
                    ['name' => 'Sushi'],
                    ['name' => 'Prawn Provençal'],
                    ['name' => 'Steak and Mashed Potatoes'],
                    ['name' => 'Grilled Fish'],
                    ['name' => 'Grilled Chicken Breasts'],
                ],
                'Desserts' => [
                    ['name' => 'Brownies'],
                    ['name' => 'Red Velvet Cake'],
                    ['name' => 'Fruit Bowls'],
                    ['name' => 'Waffles and Ice Cream'],
                    ['name' => 'Ice Cream Sundae'],
                    ['name' => 'Yogurt Parfait'],
                    ['name' => 'Chocolate Dream', 'description' => 'Rich Chocolate, Whipped Cream, Chocolate Chips'],
                    ['name' => 'Cookies and Cream Ice Cream', 'description' => 'Crushed Oreo, Chocolate Sauce'],
                    ['name' => 'Strawberry Bliss', 'description' => 'Fresh Strawberries, Vanilla Ice Cream'],
                    ['name' => 'Smooth Vanilla Caramel Drizzle'],
                ],
                'Smoothies' => [
                    ['name' => 'Peanut Butter Berry Smoothie'],
                    ['name' => 'Tropical Fruit Smoothie'],
                    ['name' => 'Banana Almond Cado'],
                    ['name' => 'Double Berry Blast'],
                    ['name' => 'Peanut Butter Banana Smoothie'],
                    ['name' => 'Chocolate Berry Smoothie'],
                ],
                'Coffee' => [
                    ['name' => 'Caffé Latte'],
                    ['name' => 'Iced Americano'],
                    ['name' => 'Espresso'],
                    ['name' => 'Americano'],
                    ['name' => 'Iced Cappuccino'],
                    ['name' => 'Hot Chocolate'],
                    ['name' => 'Chai Latte'],
                ],
                'Healthy Drinks' => [
                    ['name' => 'Brain Boost'],
                    ['name' => 'Citrus Glo'],
                    ['name' => 'Vitamin See'],
                    ['name' => 'All The Greens'],
                    ['name' => 'Gem'],
                    ['name' => 'Peanut Butter Bliss'],
                    ['name' => 'Berry Dairy'],
                    ['name' => 'Peanut Butter Berry'],
                    ['name' => 'C Breeze'],
                    ['name' => 'Strawberry Stinger'],
                    ['name' => 'Lemon Ginger Zinger'],
                    ['name' => 'Turmeric Tango'],
                    ['name' => 'Floo Fighter'],
                    ['name' => 'Floo Shot'],
                    ['name' => 'Ginger Shot'],
                ],
                'Sauces' => [
                    ['name' => 'Buffalo Sauce'],
                    ['name' => 'Aioli Sauce'],
                    ['name' => 'Guacamole'],
                    ['name' => 'Salsa'],
                    ['name' => 'Pepper Sauce'],
                    ['name' => 'Jamaica Goat Sauce'],
                    ['name' => 'Prawn Sauce'],
                ],
                'Sides' => [
                    ['name' => 'Fried Plantains'],
                    ['name' => 'French Fries'],
                ],
                'Wraps & Sandwiches' => [
                    ['name' => 'Special Taco Beeffold'],
                    ['name' => 'Croissant Chicken Sandwich'],
                    ['name' => 'Chessy Beef Burrito'],
                    ['name' => 'Bagel Delight'],
                    ['name' => 'Grilled Chicken Club Sandwich'],
                    ['name' => 'Cheeseburger'],
                ],
                'Curries' => [
                    ['name' => 'Butter Chicken and Garlic Naan Bread'],
                    ['name' => 'Sweet Sour Chicken'],
                    ['name' => 'Chicken Curry Sauce'],
                    ['name' => 'Shredded Beef Sauce'],
                ],
            ],
        ];

        $sectionOrder = 0;
        foreach ($menu as $section => $categories) {
            $catOrder = 0;
            foreach ($categories as $categoryName => $items) {
                $category = Category::create([
                    'name'       => $categoryName,
                    'section'    => $section,
                    'sort_order' => $catOrder++,
                ]);

                $itemOrder = 0;
                foreach ($items as $item) {
                    MenuItem::create([
                        'category_id' => $category->id,
                        'name'        => $item['name'],
                        'description' => $item['description'] ?? null,
                        'available'   => true,
                        'sort_order'  => $itemOrder++,
                    ]);
                }
            }
            $sectionOrder++;
        }
    }
}
