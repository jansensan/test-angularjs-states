angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild10', {
      parent: 'child05',
      templateUrl: 'templates/grandchildren/grandchild-10.html'
    });
})

.controller('grandchild10Controller', function ($scope, stateModel) {
  console.log('--- grandchild10Controller ---');
  $scope.stateModel = stateModel;
});