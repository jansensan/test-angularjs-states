angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('parent02', {templateUrl: 'templates/parents/parent-02.html'});
})

.controller('parent02Controller', function ($scope, stateModel) {
  console.log('--- parent02Controller ---');
  $scope.stateModel = stateModel;
});