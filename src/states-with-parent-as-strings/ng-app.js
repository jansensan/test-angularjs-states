angular.module('statesWithParentsAsStringPage', ['stateManager'])

.config(function ($stateProvider) {
  $stateProvider
    .state('parent01', {templateUrl: 'templates/parents/parent-01.html'})
    .state('parent02', {templateUrl: 'templates/parents/parent-02.html'})
    .state('parent03', {templateUrl: 'templates/parents/parent-03.html'});
})

.controller('pageController', function ($scope, stateModel) {
  $scope.stateModel = stateModel;
});