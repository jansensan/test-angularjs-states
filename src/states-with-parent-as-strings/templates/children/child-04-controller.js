angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child04', {
      parent: 'parent02',
      templateUrl: 'templates/children/child-04.html'
    });
})

.controller('child04Controller', function ($scope, stateModel) {
  console.log('--- child04Controller ---');
  $scope.stateModel = stateModel;
});