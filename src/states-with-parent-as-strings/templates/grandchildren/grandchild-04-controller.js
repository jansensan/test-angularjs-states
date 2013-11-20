angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild04', {
      parent: 'child02',
      templateUrl: 'templates/grandchildren/grandchild-04.html'
    });
})

.controller('grandchild04Controller', function ($scope, stateModel) {
  console.log('--- grandchild04Controller ---');
  $scope.stateModel = stateModel;
});