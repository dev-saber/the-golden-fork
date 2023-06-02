<?php

use App\Http\Controllers\api\CreateReservation;
use App\Http\Controllers\api\MenuList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/menu', [MenuList::class, 'menu']);
Route::post('/confirm', [CreateReservation::class, 'confirm']);
Route::post('/reserve', [CreateReservation::class, 'reserve'])
    // the middleware is used to prevent post request consumption from any api software
    ->middleware('confirmation')
    ->name('reserve');
