angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('parent01', {templateUrl: 'templates/parents/parent-01.html'});
})

.controller('parent01Controller', function ($scope, stateModel) {
  console.log('--- parent01Controller ---');
  $scope.stateModel = stateModel;
});