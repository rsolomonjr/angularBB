'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.todoListApp = function() {
    console.log("This is the data service's method!");
  };
  this.getTodos = function(callback){
    $http.get('todos.json').then(callback) 
  };
  this.deleteTodo = function(todo) {
    console.log("The" + todo.name + " has been deleted!")
    //simulate deletion 
  };
  this.saveTodos = function(todo) {
    console.log(todos.length + " todos have been saved!")
  };
});