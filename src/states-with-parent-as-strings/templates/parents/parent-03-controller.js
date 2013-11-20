angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('parent03', {templateUrl: 'templates/parents/parent-03.html'});
})

.controller('parent03Controller', function ($scope, stateModel) {
  console.log('--- parent03Controller ---');
  $scope.stateModel = stateModel;
});