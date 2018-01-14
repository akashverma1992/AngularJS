angular.module('MRates', ['MGetRates'])
.controller('CRates', ['SGetRates', function CRates(SGetRates) {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = SGetRates.currencies;

  this.total = function total(outCurr) {
    return SGetRates.convert(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.pay = function pay() {
    window.alert('Thanks!');
  };
}]);
