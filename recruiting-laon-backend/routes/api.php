<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\UserController;

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

// public routes
Route::post('/login', [AuthController::class, 'login']);

Route::post('/users', [UserController::class, 'store']);

Route::get('/media', [MediaController::class, 'all']);
Route::get('/media/{slug}', [MediaController::class, 'show']);
Route::get('/find-media/{title}', [MediaController::class, 'getByTitle']);

// authenticated routes 
Route::middleware('auth:sanctum')->prefix('v1')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
