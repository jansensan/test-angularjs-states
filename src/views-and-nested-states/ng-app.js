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
  var Model = function () {};
  
  Model.closeModal = function () {
    stateManager.setState(pageModel.getLastPage());
  };
  
  Model.openModal = function () {
    stateManager.setState('modal');
  };

  return Model;
})


.controller('navController', function ($scope, pageModel) {
  $scope.pageModel = pageModel;
  $scope.pageModel.gotoPage01();
})


.controller('modalController', function ($scope, modalModel) {
  $scope.modalModel = modalModel;
})


.controller('page01Controller', function ($scope, pageModel, modalModel) {
  $scope.pageModel = pageModel;
  $scope.modalModel = modalModel;
})


.controller('page02Controller', function ($scope, pageModel, modalModel) {
  $scope.pageModel = pageModel;
  $scope.modalModel = modalModel;
});