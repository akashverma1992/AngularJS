angular.module('Mfullname2', ['MFullNameService'])
  .controller('CFullNameController', ['SFullNameService', function CFullNameController(SFullNameService) {
    this.fname = '';
    this.sname = '';
    this.inPrefix = 'Mr.';
    this.prefix = '';
    this.prefixes = SFullNameService.prefixes;

    this.fullName = function fullName(pf) {
      if (pf != '' && this.fname != '' && this.sname != '') {
        var name = SFullNameService.FullName(pf, this.fname, this.sname);
        console.log(name);
        // alert(name);
        // return (name).toString();
      }
    };
  }]);
