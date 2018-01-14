angular.module('myServiceModule', ['NotifyService'])
  .controller('MyController', ['$scope', 'notify', function($scope, notify){
    $scope.callNotify = function(msg){
      notify(msg);
    };
  }]);
