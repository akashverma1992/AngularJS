angular.module('Mfullname1', [])
  // controller
  .controller('CFullnameController', function CFullnameController() {
    this.fname = '';
    this.sname = '';
    this.inPrefix = 'Mr.';
    this.prefix = '';
    this.prefixes = ['Mr.', 'Mrs.'];

    this.fullName = function fullName(pf) {
      if (pf != '' && this.fname != '' && this.sname != '') {
        var name = (pf + this.fname + " " + this.sname);
        console.log(name);
        // alert(name);
        // return (name).toString();
      }
      // return '';
    };
  });
