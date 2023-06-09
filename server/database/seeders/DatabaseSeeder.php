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
                        'menu_id' => $menu->id,
                        'image_path' => 'Golden Fried Calamari with Spicy Aioli-img.png',
                        'stripe_id' => 'prod_O2pmlfs6262Ef3'

                    ]);
                    Meal::create([
                        'meal_name' => 'Roasted Red Pepper Hummus with Pita Chips',
                        'meal_price' => 18,
                        'menu_id' => $menu->id,
                        'image_path' => 'Roasted Red Pepper Hummus with Pita Chips-img.png',
                        'stripe_id' => 'prod_O38bYVOGUqMReb'
                    ]);
                    Meal::create([
                        'meal_name' => 'Crab Cakes with Lemon-Caper Aioli',
                        'meal_price' => 35,
                        'menu_id' => $menu->id,
                        'image_path' => 'Crab Cakes with Lemon-Caper Aioli-img.png',
                        'stripe_id' => 'prod_O38slYEBsn2WVN'
                    ]);
                    Meal::create([
                        'meal_name' => 'Spinach and Artichoke Dip with Toasted Baguette',
                        'meal_price' => 22,
                        'menu_id' => $menu->id,
                        'image_path' => 'Spinach and Artichoke Dip with Toasted Baguette-img.png',
                        'stripe_id' => 'prod_O38vWKXuPDOkrT'
                    ]);
                    break;

                case 'Salads':
                    Meal::create([
                        'meal_name' => 'Classic Caesar Salad with Grilled Chicken or Shrimp',
                        'meal_price' => 30,
                        'menu_id' => $menu->id,
                        'image_path' => 'Classic Caesar Salad with Grilled Chicken or Shrimp-img.png',
                        'stripe_id' => 'prod_O38wDQzWLC05fa'
                    ]);
                    Meal::create([
                        'meal_name' => 'Caprese Salad with Fresh Mozzarella and Tomatoes',
                        'meal_price' => 26,
                        'menu_id' => $menu->id,
                        'image_path' => 'Caprese Salad with Fresh Mozzarella and Tomatoes-img.png',
                        'stripe_id' => 'prod_O38xfGf4e5lXA4'
                    ]);
                    Meal::create([
                        'meal_name' => 'Arugula and Pear Salad with Candied Walnuts and Cheese',
                        'meal_price' => 28,
                        'menu_id' => $menu->id,
                        'image_path' => 'Arugula and Pear Salad with Candied Walnuts and Cheese-img.png',
                        'stripe_id' => 'prod_O38yP3VMLf5mra'
                    ]);
                    Meal::create([
                        'meal_name' => 'Asian Chicken Salad with Sesame Ginger Dressing',
                        'meal_price' => 30,
                        'menu_id' => $menu->id,
                        'image_path' => 'Asian Chicken Salad with Sesame Ginger Dressing-img.png',
                        'stripe_id' => 'prod_O38zAQd8FR1sCC'
                    ]);
                    break;

                case 'Pasta':
                    Meal::create([
                        'meal_name' => 'Linguine with Clams and White Sauce',
                        'meal_price' => 40,
                        'menu_id' => $menu->id,
                        'image_path' => 'Linguine with Clams and White Sauce-img.png',
                        'stripe_id' => 'prod_O3901oJLog3LBA'
                    ]);
                    Meal::create([
                        'meal_name' => 'Fettuccine Alfredo with Grilled Chicken or Shrimp',
                        'meal_price' => 35,
                        'menu_id' => $menu->id,
                        'image_path' => 'Fettuccine Alfredo with Grilled Chicken or Shrimp-img.png',
                        'stripe_id' => 'prod_O390z1uMUYzbDx'
                    ]);
                    Meal::create([
                        'meal_name' => 'Spaghetti Carbonara with Pancetta and Peas',
                        'meal_price' => 35,
                        'menu_id' => $menu->id,
                        'image_path' => 'Spaghetti Carbonara with Pancetta and Peas-img.png',
                        'stripe_id' => 'prod_O392jzJh3WGbcb'
                    ]);
                    Meal::create([
                        'meal_name' => 'Penne with Spicy Sausage and Tomato Sauce',
                        'meal_price' => 30,
                        'menu_id' => $menu->id,
                        'image_path' => 'Penne with Spicy Sausage and Tomato Sauce-img.png',
                        'stripe_id' => 'prod_O394rfH9ce2jWj'
                    ]);
                    break;

                case 'Desserts':
                    Meal::create([
                        'meal_name' => 'Chocolate Lava Cake with Vanilla Ice Cream',
                        'meal_price' => 20,
                        'menu_id' => $menu->id,
                        'image_path' => 'Chocolate Lava Cake with Vanilla Ice Cream-img.png',
                        'stripe_id' => 'prod_O398oAK6bJ0PbU'
                    ]);
                    Meal::create([
                        'meal_name' => 'Tiramisu with Espresso and Whipped Cream',
                        'meal_price' => 22,
                        'menu_id' => $menu->id,
                        'image_path' => 'Tiramisu with Espresso and Whipped Cream-img.png',
                        'stripe_id' => 'prod_O39CGIGBuNKCbI'
                    ]);
                    Meal::create([
                        'meal_name' => 'Fruit Tart with Whipped Cream',
                        'meal_price' => 25,
                        'menu_id' => $menu->id,
                        'image_path' => 'Fruit Tart with Whipped Cream-img.png',
                        'stripe_id' => 'prod_O39E0eCLW67TSg'
                    ]);
                    Meal::create([
                        'meal_name' => 'Apple Tart with Cinnamon Ice Cream',
                        'meal_price' => 20,
                        'menu_id' => $menu->id,
                        'image_path' => 'Apple Tart with Cinnamon Ice Cream-img.png',
                        'stripe_id' => 'prod_O39FUDyxPhGL3K'
                    ]);
                    break;

                default:
                    # code...
                    break;
            }
        }
    }
}
