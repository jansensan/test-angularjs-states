angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild03', {
      parent: 'child02',
      templateUrl: 'templates/grandchildren/grandchild-03.html'
    });
})

.controller('grandchild03Controller', function ($scope, stateModel) {
  console.log('--- grandchild03Controller ---');
  $scope.stateModel = stateModel;
});