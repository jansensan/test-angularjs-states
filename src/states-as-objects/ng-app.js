angular.module('statesAsObjectsPage', ['ui.router'])

.config(function ($stateProvider) {

  // states as objects

  // parents
  var parent01 = {
    name: 'parent01',
    templateUrl: 'templates/parent-01.html'
  };
  var parent02 = {
    name: 'parent02',
    templateUrl: 'templates/parent-02.html'
  };
  var parent03 = {
    name: 'parent03',
    templateUrl: 'templates/parent-03.html'
  };

  // children
  var child01 = {
    name: 'child01',
    parent: parent01,
    templateUrl: 'templates/child-01.html'
  };
  var child02 = {
    name: 'child02',
    parent: parent01,
    templateUrl: 'templates/child-02.html'
  };
  var child03 = {
    name: 'child03',
    parent: parent02,
    templateUrl: 'templates/child-03.html'
  };
  var child04 = {
    name: 'child04',
    parent: parent02,
    templateUrl: 'templates/child-04.html'
  };
  var child05 = {
    name: 'child05',
    parent: parent03,
    templateUrl: 'templates/child-05.html'
  };
  var child06 = {
    name: 'child06',
    parent: parent03,
    templateUrl: 'templates/child-06.html'
  };

  // grandchilden
  var grandchild01 = {
    name: 'grandchild01',
    parent: child01,
    templateUrl: 'templates/grandchild-01.html'
  };
  var grandchild02 = {
    name: 'grandchild02',
    parent: child01,
    templateUrl: 'templates/grandchild-02.html'
  };
  var grandchild03 = {
    name: 'grandchild03',
    parent: child02,
    templateUrl: 'templates/grandchild-03.html'
  };
  var grandchild04 = {
    name: 'grandchild04',
    parent: child02,
    templateUrl: 'templates/grandchild-04.html'
  };
  var grandchild05 = {
    name: 'grandchild05',
    parent: child03,
    templateUrl: 'templates/grandchild-05.html'
  };
  var grandchild06 = {
    name: 'grandchild06',
    parent: child03,
    templateUrl: 'templates/grandchild-06.html'
  };
  var grandchild07 = {
    name: 'grandchild07',
    parent: child04,
    templateUrl: 'templates/grandchild-07.html'
  };
  var grandchild08 = {
    name: 'grandchild08',
    parent: child04,
    templateUrl: 'templates/grandchild-08.html'
  };
  var grandchild09 = {
    name: 'grandchild09',
    parent: child05,
    templateUrl: 'templates/grandchild-09.html'
  };
  var grandchild10 = {
    name: 'grandchild10',
    parent: child05,
    templateUrl: 'templates/grandchild-10.html'
  };
  var grandchild11 = {
    name: 'grandchild11',
    parent: child06,
    templateUrl: 'templates/grandchild-11.html'
  };
  var grandchild12 = {
    name: 'grandchild12',
    parent: child06,
    templateUrl: 'templates/grandchild-12.html'
  };

  // set state provider
  $stateProvider
    .state(parent01)
      .state(child01)
        .state(grandchild01)
        .state(grandchild02)
      .state(child02)
        .state(grandchild03)
        .state(grandchild04)

    .state(parent02)
      .state(child03)
        .state(grandchild05)
        .state(grandchild06)
      .state(child04)
        .state(grandchild07)
        .state(grandchild08)

    .state(parent03)
      .state(child05)
        .state(grandchild09)
        .state(grandchild10)
      .state(child06)
        .state(grandchild11)
        .state(grandchild12);
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