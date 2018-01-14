angular.module('NotifyService', [])
  .factory('notify', ['$window', function(window){
    var msgs = [];
    return function(msg){
      msgs.push(msg);
      if (msgs.length === 3){
        window.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]);
  