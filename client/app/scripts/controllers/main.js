'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('MainCtrl', function ($scope, Config, $http) {

    $scope.toDoLists = [ {todo: 'Note1'}, {todo:'Note2'}, {todo:'Note3'}];

    $scope.addTodo = function(){
        $http.get(Config.serverUrl).then(function(data){
            console.log(data);
        })
    	var newtodo = { todo: $scope.newtodo}
    	$scope.toDoLists.push(newtodo);
    	$scope.newtodo = "";
    };

    $scope.removeTodo = function(index){
    	$scope.toDoLists.splice(index, 1);
    }

  });
