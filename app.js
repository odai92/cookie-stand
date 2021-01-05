'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var allStores = [];
var branchName= ['Seattle','Tokyo','Duabi','Paris','Lima'];


var store = {
  name: 'dubai',
  cookiesPurshased: 16,
  color: 'white',
  age: 28,
}
// console.log(storeHours.length);
// console.log(storeHours);
for(var i = 0; i<storeHours.length;i=i+2 ){
  console.log(storeHours[i]);
}
// console.log(store.name);



// function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
//   this.name = name;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//   this.cookiesPerHour = [];
//   this.dailySales = 0;
//   this.calcCustomersPerHour();
//   this.calcCookiesPerHour();

//   allStores.push(this);
// }

// Store.prototype.calcCustomersPerHour = function () {
//   var size = this.maxCustomers - this.minCustomers;
//   var calcCustomersPerHour =  Math.random() * size + this.minCustomers;
//   return Math.ceil(calcCustomersPerHour);
//   this.calcCustomersPerHour.push(cookiesPerHour);
//   };


// Store.prototype.calcCookiesPerHour = function () {
//   for (var i = 0; i < storeHours.length - 1; i++) {
//     var numCokkies = Math.ceil(this.calcCustomersPerHour() * this.avgCookiesPerCustomer);
//     this.cookiesPerHour.push(numCokkies);
//     this.dailySales += numCokkies;
//   }
// };



// new Store('Seattle', 23, 65, 6.3);
// new Store('Tokyo', 3, 24, 1.2);
// new Store('Dubai', 11, 38, 3.7);
// new Store('Paris', 20, 38, 2.3);
// new Store('Lima', 2, 16, 4.6);

// ================================================
// creating the table
// i will create the row and header


// var parentElement = document.getElementById('main-content');

// var div = document.createElement('div');
// parentElement.appendChild(div);


// var table = document.createElement('table');
//   table.textContent = allStores, [0,1,2,3,4]
//   div.appendChild(table);
//   var row = document.createElement('tr');
// table.appendChild(row);
// var th = document.createElement('th');
// table.appendChild(th);
// th.textContent = branchName, [0,1,2,3,4]
// for(var i = 0; i< storeHours.length; i++){
// var th = document.createElement('th');
// row.textContent = storeHours[i];
// }

// var td = document.createElement('td');
// table.appendChild(td);
// td.textContent = storeHours;

// console.log(table);
// console.log(row);
// console.log(branchName);

// Store.prototype.calcCustomersPerHour = function () {
//   return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };

// Store.prototype.calcCookiesPerHour = function () {
// for (var i = 0; i < storeHours.length - 1; i++) {
//   this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer));
// }
// };
// console.log(calcCustomersPerHour);



