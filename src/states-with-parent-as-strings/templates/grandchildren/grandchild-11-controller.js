angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild11', {
      parent: 'child06',
      templateUrl: 'templates/grandchildren/grandchild-11.html'
    });
})

.controller('grandchild11Controller', function ($scope, stateModel) {
  console.log('--- grandchild11Controller ---');
  $scope.stateModel = stateModel;
});