angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child05', {
      parent: 'parent03',
      templateUrl: '../children/child-05.html'
    })
    .state('child06', {
      parent: 'parent03',
      templateUrl: '../children/child-06.html'
    });
})

.controller('parent03Controller', function ($scope, stateModel) {
  console.log('--- parent03Controller ---');
  $scope.stateModel = stateModel;
});