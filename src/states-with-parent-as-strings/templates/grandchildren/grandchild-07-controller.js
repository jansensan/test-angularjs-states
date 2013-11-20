angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild07', {
      parent: 'child04',
      templateUrl: 'templates/grandchildren/grandchild-07.html'
    });
})

.controller('grandchild07Controller', function ($scope, stateModel) {
  console.log('--- grandchild07Controller ---');
  $scope.stateModel = stateModel;
});