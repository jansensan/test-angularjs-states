angular.module('page', ['ui.router'])

.config(function ($stateProvider) {
  $stateProvider
    .state('parent-01', {templateUrl: 'static/templates/parent-01.html'})
    .state('parent-02', {templateUrl: 'static/templates/parent-02.html'})
    .state('parent-03', {templateUrl: 'static/templates/parent-03.html'});
})

.controller('pageController', function ($scope, $state) {

  var currentState = '';

  $scope.setState = function (newState) {
    if (newState !== currentState) {
      currentState = newState;
      $state.go(currentState);
    }
  };
});