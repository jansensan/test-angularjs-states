angular.module('statesWithParentsAsStringPage', ['stateManager'])

.controller('pageController', function ($scope, stateModel) {
  $scope.stateModel = stateModel;
});