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

// 'RoomController' - Routes
Route.get('/api/rooms', 'RoomController.getAll')
Route.get('/api/room/random', 'RoomController.getRandom')
Route.get('/api/room/:id', 'RoomController.get')

// 'PersonController' - Routes
Route.get('/api/people', 'PersonController.getAll')
Route.get('/api/person/random', 'PersonController.getRandom')
Route.get('/api/person/:id', 'PersonController.get')

// 'CrimeController' - Routes
Route.get('/api/crimes', 'CrimeController.getAll')
Route.get('/api/crime/random', 'CrimeController.getRandom')
Route.get('/api/crime/:id', 'CrimeController.get')

// 'ActivityController' - Routes
Route.get('/api/activities', 'ActivityController.getAll')
Route.get('/api/activity/random', 'ActivityController.getRandom')
Route.get('/api/activity/:id', 'ActivityController.get')

// 'ScenarioController' - Routes
Route.get('/api/scenarios', 'ScenarioController.getAll')
Route.get('/api/scenario/:id', 'ScenarioController.get')
Route.put('/api/scenario/:id/updateRooms', 'ScenarioController.updateRooms')
Route.put('/api/scenario/:id/guessGuiltyCat', 'ScenarioController.guessGuiltyCat')
Route.post('/api/scenario/create', 'ScenarioController.createScenario')

// 'ContactController' - Routes
Route.post('/api/contact/sendMail', 'ContactController.sendMail')

// 'Webhook' - Routes
Route
    .post('/webhook', 'WebhookController.default_call')
    .middleware('webhook')

// 'Nuxt' - Routes
Route.any('*', 'NuxtController.render')
