angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child05', {
      parent: 'parent03',
      templateUrl: 'templates/children/child-05.html'
    });
})

.controller('child05Controller', function ($scope, stateModel) {
  console.log('--- child05Controller ---');
  $scope.stateModel = stateModel;
});