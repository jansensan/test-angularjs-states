angular.module('stateManager', ['ui.router'])

.factory('stateModel', function ($state) {
  // vars
  var currentState = '';

  // api
  var Manager = function () {};
  
  Manager.setState = function (newState) {
    console.log('--- Manager.setState ---');
    console.log('newState: ' + (newState));
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