<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Meal;
use App\Models\Menu;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $categories = ['Appetizers', 'Salads', 'Pasta', 'Desserts'];

        foreach ($categories as $category) {
            $menu = Menu::create([
                'title' => $category
            ]);

            switch ($category) {
                case 'Appetizers':
                    Meal::create([
                        'meal_name' => 'Golden Fried Calamari with Spicy Aioli',
                        'meal_price' => 28,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Roasted Red Pepper Hummus with Pita Chips',
                        'meal_price' => 18,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Crab Cakes with Lemon-Caper Aioli',
                        'meal_price' => 35,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Spinach and Artichoke Dip with Toasted Baguette',
                        'meal_price' => 22,
                        'menu_id' => $menu->id
                    ]);
                    break;

                case 'Salads':
                    Meal::create([
                        'meal_name' => 'Classic Caesar Salad with Grilled Chicken or Shrimp',
                        'meal_price' => 30,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Caprese Salad with Fresh Mozzarella and Tomatoes',
                        'meal_price' => 26,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Arugula and Pear Salad with Candied Walnuts and  Cheese',
                        'meal_price' => 28,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Asian Chicken Salad with Sesame Ginger Dressing',
                        'meal_price' => 30,
                        'menu_id' => $menu->id
                    ]);
                    break;

                case 'Pasta':
                    Meal::create([
                        'meal_name' => 'Linguine with Clams and White Sauce',
                        'meal_price' => 40,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Fettuccine Alfredo with Grilled Chicken or Shrimp',
                        'meal_price' => 35,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Spaghetti Carbonara with Pancetta and Peas',
                        'meal_price' => 35,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Penne with Spicy Sausage and Tomato Sauce',
                        'meal_price' => 30,
                        'menu_id' => $menu->id
                    ]);
                    break;

                case 'Desserts':
                    Meal::create([
                        'meal_name' => 'Chocolate Lava Cake with Vanilla Ice Cream',
                        'meal_price' => 20,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Tiramisu with Espresso and Whipped Cream',
                        'meal_price' => 22,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Fruit Tart with Whipped Cream',
                        'meal_price' => 25,
                        'menu_id' => $menu->id
                    ]);
                    Meal::create([
                        'meal_name' => 'Apple Tart with Cinnamon Ice Cream',
                        'meal_price' => 20,
                        'menu_id' => $menu->id
                    ]);
                    break;

                default:
                    # code...
                    break;
            }
        }
    }
}
