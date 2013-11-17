angular.module('page', ['ui.router'])

.config(function ($stateProvider) {

  // states as objects

  // parents
  var parent01 = {
    name: 'parent01',
    templateUrl: 'static/templates/parent-01.html'
  };
  var parent02 = {
    name: 'parent02',
    templateUrl: 'static/templates/parent-02.html'
  };
  var parent03 = {
    name: 'parent03',
    templateUrl: 'static/templates/parent-03.html'
  };

  // children
  var child01 = {
    name: 'child01',
    parent: parent01,
    templateUrl: 'static/templates/child-01.html'
  };
  var child02 = {
    name: 'child02',
    parent: parent01,
    templateUrl: 'static/templates/child-02.html'
  };
  var child03 = {
    name: 'child03',
    parent: parent02,
    templateUrl: 'static/templates/child-03.html'
  };
  var child04 = {
    name: 'child04',
    parent: parent02,
    templateUrl: 'static/templates/child-04.html'
  };
  var child05 = {
    name: 'child05',
    parent: parent03,
    templateUrl: 'static/templates/child-05.html'
  };
  var child06 = {
    name: 'child06',
    parent: parent03,
    templateUrl: 'static/templates/child-06.html'
  };

  // set state provider
  $stateProvider
    .state(parent01)
      .state(child01)
      .state(child02)

    .state(parent02)
      .state(child03)
      .state(child04)

    .state(parent03)
      .state(child05)
      .state(child06);
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