'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// 'CatController' - Routes
Route.get('/api/cats', 'CatController.getAll')
Route.get('/api/cat/:id', 'CatController.get')
Route.get('/api/cat/random/:count', 'CatController.getRandom')

// 'RoomController' - Routes
Route.get('/api/rooms', 'RoomController.getAll')
Route.get('/api/room/:id', 'RoomController.get')

// 'PersonController' - Routes
Route.get('/api/people', 'PersonController.getAll')
Route.get('/api/person/:id', 'PersonController.get')
Route.get('/api/people/random', 'PersonController.getRandom')

// 'CrimeController' - Routes
Route.get('/api/crimes', 'CrimeController.getAll')
Route.get('/api/crime/:id', 'CrimeController.get')
Route.get('/api/crime/random', 'CrimeController.getRandom')

//Route.any('/api/cats', 'TestController.getCats')
Route.any('/api', 'TestController.test')

Route.any('*', 'NuxtController.render')
