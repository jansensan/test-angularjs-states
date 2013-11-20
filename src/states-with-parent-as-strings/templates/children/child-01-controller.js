angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child01', {
      parent: 'parent01',
      templateUrl: 'templates/children/child-01.html'
    });
})

.controller('child01Controller', function ($scope, stateModel) {
  console.log('--- child01Controller ---');
  $scope.stateModel = stateModel;
});