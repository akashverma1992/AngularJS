angular.module('MFullNameService', [])
  // Service/factory
  .factory('SFullNameService', function() {
    var prefixes = ['Mr.', 'Mrs.'];
    var FullName = function (pf, fname, sname) {
        var name = (pf + fname + " " + sname);
        return name;
    };
    return {
      prefixes: prefixes,
      FullName: FullName
    };
  });
