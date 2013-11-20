angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild08', {
      parent: 'child04',
      templateUrl: 'templates/grandchildren/grandchild-08.html'
    });
})

.controller('grandchild08Controller', function ($scope, stateModel) {
  console.log('--- grandchild08Controller ---');
  $scope.stateModel = stateModel;
});