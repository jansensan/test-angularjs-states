angular.module('app', ['stateManager'])

.config(function ($stateProvider) {
  $stateProvider
    .state('page', {
      abstract: true,
      views: {
        '': {
          templateUrl: "views/page-01.html",
        },
        'modal': {
          templateUrl: "views/modal.html"
        }
      }
    });
})


.controller('page01Controller', function ($scope, stateManager) {
  console.log('--- page01Controller ---');

  $scope.openModal = function () {
    stateManager.setState('modal');
  };
})


.controller('page02Controller', function () {
  console.log('--- page02Controller ---');
});