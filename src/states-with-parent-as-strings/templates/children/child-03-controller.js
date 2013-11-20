angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child03', {
      parent: 'parent02',
      templateUrl: 'templates/children/child-03.html'
    });
})

.controller('child03Controller', function ($scope, stateModel) {
  console.log('--- child03Controller ---');
  $scope.stateModel = stateModel;
});