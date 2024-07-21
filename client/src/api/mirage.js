import { createServer } from "miragejs";

// mirage server is used to mock the backend server (fake server for testing purposes)
let server = createServer();

server.get("/api/menu", () => {
  return [
    {
      id: 1,
      title: "Appetizers",
      meals: [
        {
          id: 1,
          meal_name: "Golden Fried Calamari with Spicy Aioli",
          image_path: "Golden Fried Calamari with Spicy Aioli-img.png",
          meal_price: 28,
          menu_id: 1,
        },
        {
          id: 2,
          meal_name: "Roasted Red Pepper Hummus with Pita Chips",
          image_path: "Roasted Red Pepper Hummus with Pita Chips-img.png",
          meal_price: 18,
          menu_id: 1,
        },
        {
          id: 3,
          meal_name: "Crab Cakes with Lemon-Caper Aioli",
          image_path: "Crab Cakes with Lemon-Caper Aioli-img.png",
          meal_price: 35,
          menu_id: 1,
        },
        {
          id: 4,
          meal_name: "Spinach and Artichoke Dip with Toasted Baguette",
          image_path: "Spinach and Artichoke Dip with Toasted Baguette-img.png",
          meal_price: 22,
          menu_id: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Salads",
      meals: [
        {
          id: 5,
          meal_name: "Classic Caesar Salad with Grilled Chicken or Shrimp",
          image_path:
            "Classic Caesar Salad with Grilled Chicken or Shrimp-img.png",
          meal_price: 30,
          menu_id: 2,
        },
        {
          id: 6,
          meal_name: "Caprese Salad with Fresh Mozzarella and Tomatoes",
          image_path:
            "Caprese Salad with Fresh Mozzarella and Tomatoes-img.png",
          meal_price: 26,
          menu_id: 2,
        },
        {
          id: 7,
          meal_name: "Arugula and Pear Salad with Candied Walnuts and Cheese",
          image_path:
            "Arugula and Pear Salad with Candied Walnuts and Cheese-img.png",
          meal_price: 28,
          menu_id: 2,
        },
        {
          id: 8,
          meal_name: "Asian Chicken Salad with Sesame Ginger Dressing",
          image_path: "Asian Chicken Salad with Sesame Ginger Dressing-img.png",
          meal_price: 30,
          menu_id: 2,
        },
      ],
    },
    {
      id: 3,
      title: "Pasta",
      meals: [
        {
          id: 9,
          meal_name: "Linguine with Clams and White Sauce",
          image_path: "Linguine with Clams and White Sauce-img.png",
          meal_price: 40,
          menu_id: 3,
        },
        {
          id: 10,
          meal_name: "Fettuccine Alfredo with Grilled Chicken or Shrimp",
          image_path:
            "Fettuccine Alfredo with Grilled Chicken or Shrimp-img.png",
          meal_price: 35,
          menu_id: 3,
        },
        {
          id: 11,
          meal_name: "Spaghetti Carbonara with Pancetta and Peas",
          image_path: "Spaghetti Carbonara with Pancetta and Peas-img.png",
          meal_price: 35,
          menu_id: 3,
        },
        {
          id: 12,
          meal_name: "Penne with Spicy Sausage and Tomato Sauce",
          image_path: "Penne with Spicy Sausage and Tomato Sauce-img.png",
          meal_price: 30,
          menu_id: 3,
        },
      ],
    },
    {
      id: 4,
      title: "Desserts",
      meals: [
        {
          id: 13,
          meal_name: "Chocolate Lava Cake with Vanilla Ice Cream",
          image_path: "Chocolate Lava Cake with Vanilla Ice Cream-img.png",
          meal_price: 20,
          menu_id: 4,
        },
        {
          id: 14,
          meal_name: "Tiramisu with Espresso and Whipped Cream",
          image_path: "Tiramisu with Espresso and Whipped Cream-img.png",
          meal_price: 22,
          menu_id: 4,
        },
        {
          id: 15,
          meal_name: "Fruit Tart with Whipped Cream",
          image_path: "Fruit Tart with Whipped Cream-img.png",
          meal_price: 25,
          menu_id: 4,
        },
        {
          id: 16,
          meal_name: "Apple Tart with Cinnamon Ice Cream",
          image_path: "Apple Tart with Cinnamon Ice Cream-img.png",
          meal_price: 20,
          menu_id: 4,
        },
      ],
    },
  ];
});

export default server;
