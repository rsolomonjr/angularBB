angular.module('todoListApp')
.directive('todos', function(){
  return{
  templateUrl: 'todos.html',
  controller: 'mainCtrl',
  replace: true
  }
})