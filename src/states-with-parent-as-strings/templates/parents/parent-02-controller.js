angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child03', {
      parent: 'parent02',
      templateUrl: '../children/child-03.html'
    })
    .state('child04', {
      parent: 'parent02',
      templateUrl: '../children/child-04.html'
    });
})

.controller('parent02Controller', function ($scope, stateModel) {
  console.log('--- parent02Controller ---');
  $scope.stateModel = stateModel;
});