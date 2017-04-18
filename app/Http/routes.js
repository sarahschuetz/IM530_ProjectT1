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
Route.get('/api/cat/:name', 'CatController.get')
Route.get('/api/cats/random/:count', 'CatController.getRandom')
Route.post('/api/cat/talk', 'CatController.talk')

// 'RoomController' - Routes
Route.get('/api/rooms', 'RoomController.getAll')
Route.get('/api/room/:name', 'RoomController.get')

// 'PersonController' - Routes
Route.get('/api/people', 'PersonController.getAll')
Route.get('/api/person/:name', 'PersonController.get')
Route.get('/api/people/random', 'PersonController.getRandom')

// 'CrimeController' - Routes
Route.get('/api/crimes', 'CrimeController.getAll')
Route.get('/api/crime/:name', 'CrimeController.get')
Route.get('/api/crime/random', 'CrimeController.getRandom')

// 'StatisticController' - Routes
Route.get('/api/save/:name', 'StatisticController.saveGame')

// 'Webhook' - Routes
Route
    .post('/webhook', 'WebhookController.webhook')
    .middleware('webhook')


Route.any('*', 'NuxtController.render')
