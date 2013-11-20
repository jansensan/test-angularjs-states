angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild01', {
      parent: 'child01',
      templateUrl: 'templates/grandchildren/grandchild-01.html'
    });
})

.controller('grandchild01Controller', function ($scope, stateModel) {
  console.log('--- grandchild01Controller ---');
  $scope.stateModel = stateModel;
});