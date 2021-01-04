'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var allStores = [Seattle,Tokyo,Duabi,Paris,Lima];


var branchName= ['Seattle','Tokyo','Duabi','Paris','Lima'];







var arrOfList= [];
var arrOfItem = [];


var Store = function(branchName,minCustomers, maxCustomers, avgCookiesPerCustomer, cookiesPerHour){
  this.branchName = branchName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = cookiesPerHour;
arrOfList.push(branchName)


  // return Store;
}

var Seattle = new Store('Seattle', 23, 65, 6.3);
console.log(Seattle);
var Tokyo= new Store('Tokyo', 3, 24, 1.2);
var Duabi = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

var parentElement = document.getElementById('content');

var div = document.createElement('div');
parentElement.appendChild(div);


var h2 = document.createElement('h2');
  h2.textContent = branchName[0]
  div.appendChild(h2);
  var h2 = document.createElement('h2');
  h2.textContent = branchName[1]
  div.appendChild(h2);
  var h2 = document.createElement('h2');
  h2.textContent = branchName[2]
  div.appendChild(h2);
  var h2 = document.createElement('h2');
  h2.textContent = branchName[3]
  div.appendChild(h2);
  var h2 = document.createElement('h2');
  h2.textContent = branchName[4]
  div.appendChild(h2);

  console.log(h2);
  console.log(branchName);


Store.prototype.calcCustomersPerHour = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  };

Store.prototype.calcCookiesPerHour = function () {
  for (var i = 0; i < storeHours.length - 1; i++) {
    this.cookiesPerHour.push(Math.round(this.calcCustomersPerHour(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer));
  }
};














// var table = document.createElement('table')
// div.appendChild(tableRow)

// var tableRow = document.createElement('tr')
// table.appendChild(tableRow);

// var header = document.createElement('th');

// header.textContent = 'header';
// tableRow.appendChild(header);







