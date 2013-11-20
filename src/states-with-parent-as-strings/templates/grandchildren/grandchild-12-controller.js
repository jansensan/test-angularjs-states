angular.module('statesWithParentsAsStringPage')

.config(function ($stateProvider) {
  $stateProvider
    .state('grandchild12', {
      parent: 'child06',
      templateUrl: 'templates/grandchildren/grandchild-12.html'
    });
})

.controller('grandchild12Controller', function ($scope, stateModel) {
  console.log('--- grandchild12Controller ---');
  $scope.stateModel = stateModel;
});