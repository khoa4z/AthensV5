<<<<<<< HEAD
var KenApp = angular.module('KenApp', [ 'ngMessages', 'ngRoute', 'ngResource'])
=======
var KenApp = angular.module('KenApp', [ 'ngMessages', 'ngRoute'])
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
.config(function($routeProvider) {
   $routeProvider
   .when('/', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl'
   })
   .when('/login',{
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl'
   })
<<<<<<< HEAD
=======
      // .when('/signup',{
     // templateUrl: 'views/signup.html'
   // })
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
   .when('/register',{
     templateUrl: 'views/register.html',
     controller: 'SignupCtrl'
   })
   .when('/template',{
     templateUrl: 'views/home.html',
     controller: 'MainCtrl'
   })
<<<<<<< HEAD
   .when('/timeline',{
     templateUrl: 'views/timeline.html',
     controller: 'NewPostCtrl'
   })
   .when('/archive',{
     templateUrl: 'views/archive.html',
     controller: 'ArchiveCtrl'
   })
   .when('/NewPost',{     //New Post
     templateUrl: 'views/newpost.html',
     controller: 'NewPostCtrl'
   })
   .when('/newpost',{   
      redirectTo: '/NewPost'
=======
   .when('/home',{
     redirectTo:'/template'
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
   })
   .otherwise({
     redirectTo: '/login'
   });
});



/*KenApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $routeProvider
   .when('/', {
     templateUrl: 'views/login.html',
     controller: ''
   })
   .when('/login',{
     templateUrl: 'views/login.html',
     controller: ''
   })
   .when('/register',{
     templateUrl: 'views/register.html',
     controller: ''
   })
   .when('/template',{
     templateUrl: 'views/home.html',
     controller: ''
   })
   .otherwise({
     redirectTo: '/login'
   });
}]);
*/