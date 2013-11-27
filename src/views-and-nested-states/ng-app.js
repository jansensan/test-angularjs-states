angular.module('app', ['stateManager'])

.config(function ($stateProvider) {
  console.log('--- config ---');
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

    .state('page02', {
      views: {
        '': {
          templateUrl: "views/page-02.html",
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


.factory('pageModel', function (stateManager) {
  console.log('--- pageModel ---');
  var lastPageState = '';

  var Model = function () {};

  Model.gotoPage01 = function () {
    stateManager.setState('page01');
    lastPageState = 'page01';
  };

  Model.gotoPage02 = function () {
    stateManager.setState('page02');
    lastPageState = 'page02';
  };

  Model.getLastPage = function () {
    return lastPageState;
  };

  return Model;
})


.factory('modalModel', function (pageModel, stateManager) {
  console.log('--- modalModel ---');
  var Model = function () {};
  
  Model.closeModal = function () {
    stateManager.setState(pageModel.getLastPage());
  };
  
  Model.openModal = function () {
    stateManager.setState('modal');
  };

  return Model;
})


.controller('modalController', function ($scope, pageModel, modalModal) {
  console.log('--- modalController ---');
  $scope.pageModel = pageModel;
  $scope.modalModal = modalModal;
})


.controller('page01Controller', function ($scope, pageModel, modalModal) {
  console.log('--- page01Controller ---');
  $scope.pageModel = pageModel;
  $scope.modalModal = modalModal;
  $scope.pageModel.gotoPage01();
})


.controller('page02Controller', function ($scope, pageModel, modalModal) {
  console.log('--- page02Controller ---');
  $scope.pageModel = pageModel;
  $scope.modalModal = modalModal;
});