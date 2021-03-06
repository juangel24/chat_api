'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
| Documentation: http://adonisjs.com/docs/4.1/routing
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('', () => "I'm a shitty practice :)")

Route.group(() => {
/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------*/
  // User login and register authentification
  Route.post('login', 'AuthController.login')
  // User registration
  Route.post('signup', 'AuthController.signup')
  // Logout
  Route.get('logout', 'AuthController.logout').middleware('auth')
/*
|--------------------------------------------------------------------------
| CRUDs
|--------------------------------------------------------------------------*/
  Route.get('messages/:cant?', 'MessageController.index')/*.middleware('auth')*/
}).prefix('api');
