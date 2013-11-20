angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild09', {
      parent: 'child05',
      templateUrl: 'templates/grandchildren/grandchild-09.html'
    });
})

.controller('grandchild09Controller', function ($scope, stateModel) {
  console.log('--- grandchild09Controller ---');
  $scope.stateModel = stateModel;
});