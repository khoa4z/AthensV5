KenApp.controller('NewPostCtrl', ['$scope','$window', '$timeout', NewPostController]);
  

function NewPostController($scope, $window, $timeout, Auth){
   //alert("Let's start");
   $scope.date = Date.now(); // initialise the time variable
   $scope.tickInterval = 1000 //ms
   var tick = function() {
     $scope.date = Date.now() // get the current time
     $timeout(tick, $scope.tickInterval); // reset the timer
   }
   $timeout(tick, $scope.tickInterval);
   $scope.Questions = [
      {Title:'Memory Allocation', Message:"I am having a hard time understanding this concept. Please explain in simple terms"},
      {Title:'What is Node.js?', Message:"I don't fully get what Node.js is all about. Maybe it's because I am mainly a web based business application developer. What is it and what is the use of it? My understanding so far is that: The programming model is event driven, especially the way it handles I/O. It uses JavaScript and the parser is V8.It can be easily used to create concurrent server applications. Are my understandings correct? If yes, then what are the benefits of evented I/O, is it just more for the concurrency stuff? Also, is the direction of Node.js to become a framework like, JavaScript based (V8 based) programming model?"},
      {Title:'How to set a model for a single view in Angular JS?', Message:'I have got a controller in Angular JS. In this controller i have got a $scope.users property : it is an array of users. This controller is used by two views: /users and /users/:id. I have seen that the $scope.users models is init each time i come to an user view. My question is simple how to do to get the $scope.users applied only to the /users view and not to the /users/:id view ? I have done this with the $location.path method, but i dont know if it is the right way. PS : I have got a factory to retrieve the users so i know it is a singleton ... Thx for your answers.'},
      {Title:'Test Question', Message:'Testing'}         
   ];
   $scope.publishpost= function(){
      if($scope.title != " "  && $scope.message != " "){
         $scope.Questions.push({Title:$scope.title, Message:$scope.message});
         $scope.title = " ";
         $scope.message = " ";
      }
      $window.location.href = '/#/timeline';
   }
}