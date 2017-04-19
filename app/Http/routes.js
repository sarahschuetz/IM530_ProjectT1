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
Route.get('/api/cats/random/:count', 'CatController.getRandom')
Route.post('/api/cat/talk', 'CatController.talk')
Route.put('/api/cat/:id/setActualRoom/:room', 'CatController.setActualRoom')
Route.put('/api/cat/:id/setCrimeRoom/:room', 'CatController.setCrimeRoom')
Route.put('/api/cat/:id/setCrimeActivity/:activity', 'CatController.setCrimeActivity')

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

// 'ScenarioController' - Routes
Route.get('/api/scenarios', 'ScenarioController.getAll')
Route.get('/api/scenario/:id', 'ScenarioController.get')
Route.post('/api/scenario/create', 'ScenarioController.createScenario')

// 'StatisticController' - Routes
Route.get('/api/save/:id', 'StatisticController.saveGame')

// 'Webhook' - Routes
Route
    .post('/webhook', 'WebhookController.default_call')
    .middleware('webhook')


Route.any('*', 'NuxtController.render')
