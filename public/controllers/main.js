<<<<<<< HEAD
  var mongoose = require('mongoose')
  , User = mongoose.model('User');
  
=======
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
  KenApp.controller('MainCtrl', ['$scope', function($scope) {
    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
  }]);
  
  //For Log OUT
  KenApp.controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  }]);

  KenApp.controller('LoginCtrl', ['$scope', LoginController]);

function LoginController($scope, Auth){
<<<<<<< HEAD
      //alert("LoginController");
   
   
   $scope.login = function(){
      alert("Submit Press");
      $http.post('/login', {
         username: $scope.user.username,
         password: $scope.user.password,
      })
      .success(function(user){
         // No error: authentication OK
         $rootScope.message = 'Authentication successful!';
         $location.url('/admin');
      })
      .error(function(){
         // Error: authentication failed
         $rootScope.message = 'Authentication failed.';
         $location.url('/login');
      });
   };
=======
      alert("LoginController");
   $scope.login= function(){
      alert("Submit Press");
   }
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
}

var controllers ={};
controllers.SimpleController = function($scope){
   $scope.customers = [
      {name:'Ken', city:'Toronto'},
      {name:'Harvey', city:'New York'},
      {name:'Nguyen', city:'London'}
   ]; 
};
 
KenApp.controller(controllers);
