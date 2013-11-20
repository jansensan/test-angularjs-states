angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild02', {
      parent: 'child01',
      templateUrl: 'templates/grandchildren/grandchild-02.html'
    });
})

.controller('grandchild02Controller', function ($scope, stateModel) {
  console.log('--- grandchild02Controller ---');
  $scope.stateModel = stateModel;
});