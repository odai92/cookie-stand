'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var allStores = [];


function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [];



  allStores.push(this);
}

store.prototype.calcCustomersPerHour = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  };

Store.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < storeHours.length - 1; i++) {
    this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer));
  }
};

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);





