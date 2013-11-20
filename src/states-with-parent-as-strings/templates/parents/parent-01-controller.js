angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child01', {
      parent: 'parent01',
      templateUrl: '../children/child-01.html'
    })
    .state('child02', {
      parent: 'parent01',
      templateUrl: '../children/child-02.html'
    });
})

.controller('parent01Controller', function ($scope, stateModel) {
  console.log('--- parent01Controller ---');
  $scope.stateModel = stateModel;
});