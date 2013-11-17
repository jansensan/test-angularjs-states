angular.module('parentPage', ['ui.router'])

.config(function ($stateProvider) {
  $stateProvider
    .state('child-01', {templateUrl: '/static/templates/child-01.html'})
    .state('child-02', {templateUrl: '/static/templates/child-02.html'})
    .state('child-03', {templateUrl: '/static/templates/child-03.html'});
})

.controller('parentPageController', function ($scope) {

  $scope.state = '';

  $scope.setState = function (newState) {
    console.log('--- setState ---');
    console.log('newState: ' + (newState));

    if (newState !== $scope.state) {
      $scope.state = newState;
    }
  };
});