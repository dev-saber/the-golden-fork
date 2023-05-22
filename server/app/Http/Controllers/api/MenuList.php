<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuList extends Controller
{
    public function menu()
    {
        return response()->json(['data' => Menu::with('meals')->get()], 200);
    }
}
