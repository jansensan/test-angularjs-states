angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child02', {
      parent: 'parent01',
      templateUrl: 'templates/children/child-02.html'
    });
})

.controller('child02Controller', function ($scope, stateModel) {
  console.log('--- child02Controller ---');
  $scope.stateModel = stateModel;
});