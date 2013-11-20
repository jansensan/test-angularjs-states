angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild06', {
      parent: 'child03',
      templateUrl: 'templates/grandchildren/grandchild-06.html'
    });
})

.controller('grandchild06Controller', function ($scope, stateModel) {
  console.log('--- grandchild06Controller ---');
  $scope.stateModel = stateModel;
});