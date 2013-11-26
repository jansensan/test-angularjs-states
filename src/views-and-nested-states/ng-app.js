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
    })

    .state('page01', {
      views: {
        '': {
          templateUrl: "views/page-01.html",
        }
      }
    })

    .state('modal', {
      views: {
        'modal': {
          templateUrl: "views/modal.html",
        }
      }
    });
})


.controller('modalController', function ($scope, stateManager) {
  $scope.closeModal = function () {
    stateManager.setState('page01');
  };
})


.controller('page01Controller', function ($scope, stateManager) {
  console.log('--- page01Controller ---');

  stateManager.setState('page01');

  $scope.openModal = function () {
    stateManager.setState('modal');
  };
})


.controller('page02Controller', function () {
  console.log('--- page02Controller ---');
});