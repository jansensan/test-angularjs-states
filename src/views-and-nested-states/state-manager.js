angular.module('stateManager', ['ui.router'])

.factory('stateManager', function ($state) {
  // vars
  var currentState = '';

  // api
  var Manager = function () {};
  
  Manager.setState = function (newState) {
    if (newState !== currentState) {
      currentState = newState;
      $state.go(currentState);
    }
  };

  Manager.getState = function () {
    return currentState;
  };

  return Manager;
});