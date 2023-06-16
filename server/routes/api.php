<?php

use App\Http\Controllers\api\CreateReservation;
use App\Http\Controllers\api\MenuList;
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

Route::get('/menu', [MenuList::class, 'menu']);
Route::post('/store', [CreateReservation::class, 'store']);
Route::post('/confirm', [CreateReservation::class, 'confirm'])
    // the middleware is used to prevent post request consumption from any api software
    ->middleware('confirmation')
    ->name('reserve');
