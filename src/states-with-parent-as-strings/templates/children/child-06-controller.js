angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('child06', {
      parent: 'parent03',
      templateUrl: 'templates/children/child-06.html'
    });
})

.controller('child06Controller', function ($scope, stateModel) {
  console.log('--- child06Controller ---');
  $scope.stateModel = stateModel;
});