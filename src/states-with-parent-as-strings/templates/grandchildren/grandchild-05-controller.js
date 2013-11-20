angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild05', {
      parent: 'child03',
      templateUrl: 'templates/grandchildren/grandchild-05.html'
    });
})

.controller('grandchild05Controller', function ($scope, stateModel) {
  console.log('--- grandchild05Controller ---');
  $scope.stateModel = stateModel;
});