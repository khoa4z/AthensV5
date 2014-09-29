KenApp.controller('SignupCtrl', ['$scope', RegisterController]);
<<<<<<< HEAD
  
=======
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff

function RegisterController($scope, Auth){
   //alert("Start RegisterController");
   $scope.signup= function(){
      alert("Submit Press");
<<<<<<< HEAD
      // alert($scope.fullname);
      // alert($scope.email);
      // alert($scope.username);
      // alert($scope.password);
      $http.post('/signup',{
         
      });
=======
>>>>>>> a5a767a3005b008263eba550db54c1d775a20fff
   }
   /*$scope.signup = function() {
      Auth.signup({
        email: $scope.email,
        password: $scope.password
      });
    };*/
   //alert("End RegisterController");
}