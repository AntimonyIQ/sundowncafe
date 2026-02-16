export interface MenuItem {
  id: string
  name: string
  description?: string
  price?: number
  category: string
  section: string
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}

export interface MenuSection {
  name: string
  categories: MenuCategory[]
}

// Generate unique ID from name
const generateId = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// Sundown Healthy Section
const sundownHealthyCategories: MenuCategory[] = [
  {
    name: 'Wholesome Plates',
    items: [
      {
        id: generateId('Grilled Tilapia'),
        name: 'Grilled Tilapia',
        description: 'Served with steamed rice and creamy mushroom sauce',
        category: 'Wholesome Plates',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Steak Mashed Potatoes'),
        name: 'Steak, Mashed Potatoes',
        description: 'Sautéed veggies and gravy',
        category: 'Wholesome Plates',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Jollof Power Bowl'),
        name: 'Jollof Power Bowl',
        description: 'Served with smoked salmon salad and protein of choice',
        category: 'Wholesome Plates',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Seared Salmon Citrus Greens'),
        name: 'Seared Salmon & Citrus Greens',
        description: 'Served with Parsley lime rice',
        category: 'Wholesome Plates',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Grilled Chicken Teriyaki Bowl'),
        name: 'Grilled Chicken Teriyaki Bowl',
        category: 'Wholesome Plates',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Grilled Chicken BBQ'),
        name: 'Grilled Chicken BBQ',
        category: 'Wholesome Plates',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Salad',
    items: [
      {
        id: generateId('Classic Caesar Salad'),
        name: 'Classic Caesar Salad',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Kale Quinoa Crunch'),
        name: 'Kale & Quinoa Crunch',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Hooked on Greens'),
        name: 'Hooked on Greens',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Mediterranean Salad'),
        name: 'Mediterranean Salad',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Chicken Vegetable'),
        name: 'Chicken Vegetable',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Coleslaw'),
        name: 'Coleslaw',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Chef Salad'),
        name: 'Chef',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Smoked Salmon Salad'),
        name: 'Smoked Salmon Salad',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Classic Waldorf Salad'),
        name: 'Classic Waldorf Salad',
        category: 'Salad',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Wraps & Sandwiches',
    items: [
      {
        id: generateId('Grilled Fish Tacos'),
        name: 'Grilled Fish Tacos',
        category: 'Wraps & Sandwiches',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Avocado Delight Wrap'),
        name: 'Avocado Delight Wrap',
        category: 'Wraps & Sandwiches',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Fresh Salad Wrap'),
        name: 'Fresh Salad Wrap',
        category: 'Wraps & Sandwiches',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Whole Grain Chicken Wrap'),
        name: 'Whole Grain Chicken Wrap',
        category: 'Wraps & Sandwiches',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Whole Grain Bagel Sandwich'),
        name: 'Whole Grain Bagel Sandwich',
        category: 'Wraps & Sandwiches',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Whole Grain Club Sandwich'),
        name: 'Whole Grain Club Sandwich',
        category: 'Wraps & Sandwiches',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Pasta',
    items: [
      {
        id: generateId('Pesto Pasta'),
        name: 'Pesto Pasta',
        category: 'Pasta',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Vegetable Aglio-olio'),
        name: 'Vegetable Aglio-olio',
        category: 'Pasta',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Seafood Spaghetti Marinara'),
        name: 'Seafood Spaghetti Marinara',
        category: 'Pasta',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Detox/Smoothie Options',
    items: [
      {
        id: generateId('Berry Bliss'),
        name: 'Berry Bliss',
        category: 'Detox/Smoothie Options',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Green Boost Smoothie'),
        name: 'Green Boost Smoothie',
        category: 'Detox/Smoothie Options',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Avocado Green Smoothie'),
        name: 'Avocado Green Smoothie',
        category: 'Detox/Smoothie Options',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Mango-Spinach Smoothie'),
        name: 'Mango-Spinach Smoothie (Seasoner)',
        category: 'Detox/Smoothie Options',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Tropical Smoothie Detox'),
        name: 'Tropical Smoothie',
        category: 'Detox/Smoothie Options',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Protein',
    items: [
      {
        id: generateId('Grilled Chicken Breasts'),
        name: 'Grilled Chicken Breasts',
        category: 'Protein',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Grilled Fish Tilapia Salmon'),
        name: 'Grilled Fish (Tilapia/Salmon)',
        category: 'Protein',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Raw Juices & Shots',
    items: [
      {
        id: generateId('Helper Juice'),
        name: 'Helper',
        description: 'Carrot, apple, pineapple, turmeric',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Floo Juice'),
        name: 'Floo Juice',
        description: 'Orange, carrot, lemon, ginger, cayenne',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Spiced Root Tonic'),
        name: 'Spiced Root Tonic',
        description: 'Pineapple, apple, ginger, red pepper, turmeric, black pepper',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Lemon Cucumber Cooler'),
        name: 'Lemon Cucumber Cooler',
        description: 'Cucumber, lemon, pineapple, celery, apple, mint',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Daily Greens'),
        name: 'Daily Greens',
        description: 'Apple, spinach, cucumber, celery, chia seeds',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Ginger Shot'),
        name: 'Ginger Shot',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Floo Shot'),
        name: 'Floo Shot',
        description: 'Ginger, honey, lemon, cayenne',
        category: 'Raw Juices & Shots',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Tea',
    items: [
      {
        id: generateId('Floo Fighter Tea'),
        name: 'Floo Fighter',
        description: 'Mint tea, lemon juice, ginger, honey, cayenne pepper',
        category: 'Tea',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Turmeric Tango'),
        name: 'Turmeric Tango',
        description: 'Turmeric, ginger and lemon',
        category: 'Tea',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Lemon Ginger Zinger'),
        name: 'Lemon Ginger Zinger',
        category: 'Tea',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Chai Latte'),
        name: 'Chai Latte',
        category: 'Tea',
        section: 'Sundown Healthy',
      },
    ],
  },
  {
    name: 'Smoothies',
    items: [
      {
        id: generateId('Strawberry Stinger'),
        name: 'Strawberry Stinger',
        description: 'Strawberries, banana, frozen yoghurt, pressed apple juice',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('C-Breeze'),
        name: 'C-Breeze',
        description: 'Mango, strawberries, pineapple, pressed apple juice, dates',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Peanut Butter Berry'),
        name: 'Peanut Butter Berry',
        description: 'Peanut butter, blueberries, banana, dates, almond milk, water',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Berry Dairy'),
        name: 'Berry Dairy',
        description: 'Blueberries, strawberries, banana, frozen yoghurt, honey, milk',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Peanut Butter Bliss'),
        name: 'Peanut Butter Bliss',
        description: 'Peanut butter, banana, cacao, frozen yoghurt, milk',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Gem'),
        name: 'Gem',
        description: 'Banana, almonds, frozen yoghurt, milk, honey',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('All the Greens'),
        name: 'All the Greens',
        description: 'Mango, cucumber, pineapple, celery, spinach, pressed apple juice',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Vitamin See'),
        name: 'Vitamin See',
        description: 'Mango, pineapple, carrot, orange juice',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Citrus Glo'),
        name: 'Citrus Glo',
        description: 'Orange juice, mango, frozen yoghurt, chia seeds, citrus-spiced honey',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
      {
        id: generateId('Brain Boost'),
        name: 'Brain Boost',
        description: 'Blueberries, banana, yoghurt, granola, cacao, almond milk',
        category: 'Smoothies',
        section: 'Sundown Healthy',
      },
    ],
  },
]

// Crazy Corner Section
const crazyCornerCategories: MenuCategory[] = [
  {
    name: 'Breakfast',
    items: [
      {
        id: generateId('English Breakfast'),
        name: 'English Breakfast',
        category: 'Breakfast',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Classic American Breakfast'),
        name: 'Classic American Breakfast',
        category: 'Breakfast',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Morning Mash-up'),
        name: 'Morning Mash-up',
        category: 'Breakfast',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Hearty Oatmeal Porridge'),
        name: 'Hearty Oatmeal Porridge',
        category: 'Breakfast',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Classic French Toast'),
        name: 'Classic French Toast',
        category: 'Breakfast',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Sardine French Toast'),
        name: 'Sardine French Toast',
        category: 'Breakfast',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Light Bites',
    items: [
      {
        id: generateId('Chicken BBQ Wings'),
        name: 'Chicken BBQ Wings',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Asun Tostadas'),
        name: 'Asun Tostadas',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Calamari Rings'),
        name: 'Calamari Rings',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Buffalo Chicken Bites'),
        name: 'Buffalo Chicken Bites',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Gizdodo'),
        name: 'Gizdodo',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Samosa'),
        name: 'Samosa',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Spring Roll'),
        name: 'Spring Roll',
        category: 'Light Bites',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Rice Dishes',
    items: [
      {
        id: generateId('Chinese Fried Rice'),
        name: 'Chinese Fried Rice',
        category: 'Rice Dishes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Jambalaya Fried Rice'),
        name: 'Jambalaya Fried Rice',
        category: 'Rice Dishes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Coconut Rice Special'),
        name: 'Coconut Rice Special',
        category: 'Rice Dishes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Dirty Rice Bowl'),
        name: 'Dirty Rice Bowl',
        category: 'Rice Dishes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Spicy Asun Rice'),
        name: 'Spicy Asun Rice',
        category: 'Rice Dishes',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Pasta',
    items: [
      {
        id: generateId('Asun Fiery Pasta'),
        name: 'Asun Fiery Pasta',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Pasta Bolognese'),
        name: 'Pasta Bolognese',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Seafood Pasta'),
        name: 'Seafood Pasta',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Linguine Carbonara'),
        name: 'Linguine Carbonara',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Creamy Fettuccine Alfredo'),
        name: 'Creamy Fettuccine Alfredo',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Pasta Alla Vodka'),
        name: 'Pasta Alla Vodka',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Marry Me Pasta'),
        name: 'Marry Me Pasta',
        category: 'Pasta',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Menu Classics',
    items: [
      {
        id: generateId('Steak and Mashed Potatoes'),
        name: 'Steak and Mashed Potatoes',
        category: 'Menu Classics',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Prawn Provencal'),
        name: 'Prawn Provencal',
        category: 'Menu Classics',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Sushi'),
        name: 'Sushi',
        category: 'Menu Classics',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Seafood Boil'),
        name: 'Seafood Boil',
        category: 'Menu Classics',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Proteins',
    items: [
      {
        id: generateId('Peppered Chicken'),
        name: 'Peppered Chicken',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Peppered Snail'),
        name: 'Peppered Snail',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Chicken Kebab'),
        name: 'Chicken Kebab',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Beef Kebab'),
        name: 'Beef Kebab',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Braised Lamb Chops'),
        name: 'Braised Lamb Chops',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Butterfly Prawns'),
        name: 'Butterfly Prawns',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Grilled Steak'),
        name: 'Grilled Steak',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Lemon Butter Salmon'),
        name: 'Lemon Butter Salmon',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Turkey'),
        name: 'Turkey',
        category: 'Proteins',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Noodles Delight',
    items: [
      {
        id: generateId('Singapore Noodles'),
        name: 'Singapore Noodles',
        category: 'Noodles Delight',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Pepper Soup Noodles'),
        name: 'Pepper Soup Noodles',
        description: 'Noodles with a twist',
        category: 'Noodles Delight',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Fried Noodles'),
        name: 'Fried Noodles',
        category: 'Noodles Delight',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        id: generateId('Yogurt Parfait'),
        name: 'Yogurt Parfait',
        category: 'Desserts',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Ice-cream Sundae'),
        name: 'Ice-cream Sundae',
        category: 'Desserts',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Waffles & Ice-cream'),
        name: 'Waffles & Ice-cream',
        category: 'Desserts',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Fruit Bowls'),
        name: 'Fruit Bowls',
        category: 'Desserts',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Red Velvet Cake'),
        name: 'Red Velvet Cake',
        category: 'Desserts',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Brownies'),
        name: 'Brownies',
        category: 'Desserts',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Sauces',
    items: [
      {
        id: generateId('Shredded Beef Sauce'),
        name: 'Shredded Beef Sauce',
        category: 'Sauces',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Chicken Curry Sauce'),
        name: 'Chicken Curry Sauce',
        category: 'Sauces',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Sweet Sour Chicken'),
        name: 'Sweet Sour Chicken',
        category: 'Sauces',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Butter Chicken & Garlic Naan Bread'),
        name: 'Butter Chicken & Garlic Naan Bread',
        category: 'Sauces',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Prawn Sauce'),
        name: 'Prawn Sauce',
        category: 'Sauces',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Jamaica Goat Sauce'),
        name: 'Jamaica Goat Sauce',
        category: 'Sauces',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Dips & Cream',
    items: [
      {
        id: generateId('Pepper Sauce'),
        name: 'Pepper Sauce',
        category: 'Dips & Cream',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Salsa'),
        name: 'Salsa',
        category: 'Dips & Cream',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Guacamole'),
        name: 'Guacamole',
        category: 'Dips & Cream',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Aioli Sauce'),
        name: 'Aioli Sauce',
        category: 'Dips & Cream',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Buffalo Sauce'),
        name: 'Buffalo Sauce',
        category: 'Dips & Cream',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Sides',
    items: [
      {
        id: generateId('French Fries'),
        name: 'French Fries',
        category: 'Sides',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Fried Plantains'),
        name: 'Fried Plantains',
        category: 'Sides',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Smoothies',
    items: [
      {
        id: generateId('Chocolate Berry Smoothie'),
        name: 'Chocolate Berry Smoothie',
        category: 'Smoothies',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Peanut Butter Banana Smoothie'),
        name: 'Peanut Butter Banana Smoothie',
        category: 'Smoothies',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Double Berry Blast'),
        name: 'Double Berry Blast',
        category: 'Smoothies',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Banana Almond Cado'),
        name: 'Banana Almond Cado',
        category: 'Smoothies',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Tropical Smoothie Crazy'),
        name: 'Tropical Smoothie',
        category: 'Smoothies',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Peanut Butter Berry Smoothie Crazy'),
        name: 'Peanut Butter Berry Smoothie',
        category: 'Smoothies',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Milkshakes',
    items: [
      {
        id: generateId('Vanilla Vibes'),
        name: 'Vanilla Vibes',
        description: 'Smooth vanilla, caramel drizzle',
        category: 'Milkshakes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Strawberry Bliss Shake'),
        name: 'Strawberry Bliss',
        description: 'Fresh strawberries, vanilla ice cream',
        category: 'Milkshakes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Oreo Crush'),
        name: 'Oreo Crush',
        description: 'Cookies-and-cream ice cream, crushed oreo, chocolate sauce',
        category: 'Milkshakes',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Chocolate Dream'),
        name: 'Chocolate Dream',
        description: 'Rich chocolate, whipped cream, chocolate chips',
        category: 'Milkshakes',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Tea',
    items: [
      {
        id: generateId('Hot Chocolate'),
        name: 'Hot Chocolate',
        category: 'Tea',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Iced Cappuccino'),
        name: 'Iced Cappuccino',
        category: 'Tea',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Americano'),
        name: 'Americano',
        category: 'Tea',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Espresso'),
        name: 'Espresso',
        category: 'Tea',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Iced Americano'),
        name: 'Iced Americano',
        category: 'Tea',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Caffe Latte'),
        name: 'Caffé Latte',
        category: 'Tea',
        section: 'Crazy Corner',
      },
    ],
  },
  {
    name: 'Wraps & Sandwiches',
    items: [
      {
        id: generateId('Chessy Beef Burrito'),
        name: 'Chessy Beef Burrito',
        category: 'Wraps & Sandwiches',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Croissant Chicken Sandwich'),
        name: 'Croissant Chicken Sandwich',
        category: 'Wraps & Sandwiches',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Special Taco Beeffold'),
        name: 'Special Taco Beeffold',
        category: 'Wraps & Sandwiches',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Bagel Delight'),
        name: 'Bagel Delight',
        category: 'Wraps & Sandwiches',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Grilled Chicken Club Sandwich CC'),
        name: 'Grilled Chicken Club Sandwich',
        category: 'Wraps & Sandwiches',
        section: 'Crazy Corner',
      },
      {
        id: generateId('Cheeseburger'),
        name: 'Cheeseburger',
        category: 'Wraps & Sandwiches',
        section: 'Crazy Corner',
      },
    ],
  },
]

export const menuData: MenuSection[] = [
  {
    name: 'Sundown Healthy',
    categories: sundownHealthyCategories,
  },
  {
    name: 'Crazy Corner',
    categories: crazyCornerCategories,
  },
]

// Export flat list of all items for easier searching/filtering
export const allMenuItems: MenuItem[] = menuData.flatMap((section) =>
  section.categories.flatMap((category) => category.items)
)
