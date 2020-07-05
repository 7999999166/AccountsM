  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

var db = {};
db.order = new Nedb({
    filename: 'Data1.db',
    autoload: true
  });
db.cash = new Nedb({
    filename: 'Data2.db',
    autoload: true
  });
db.Stock = new Nedb({
    filename: 'Data3.db',
    autoload: true
  });

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}


function datasave(){
var o1 = document.getElementById('o1').value;
var o2 = document.getElementById('o2').value;
var o3 = document.getElementById('o3').value;
var o4 = document.getElementById('o4').value;
var o5 = document.getElementById('o5').value;
var o6 = document.getElementById('o6').value;
var orderData = {Date:o1,AccountName:o2,Item:o3,Inward:o4,Outward:o5,Price:o6}
console.log(orderData);
db.order.insert(orderData);
document.getElementById('o1').value = null;
document.getElementById('o2').value = null;
document.getElementById('o3').value = null;
document.getElementById('o4').value = null;
document.getElementById('o5').value = null;
document.getElementById('o6').value = null;

}
db.order.find({ }, function (err, docs) {
  x = docs;
  console.log(x);
  var myObject1 = {orders:x}
  console.log(myObject1);
  w3.displayObject("id01", myObject1);
});
db.cash.find({ }, function (err, docs) {
  x1 = docs;
  console.log(x1);
  var myObject2 = {casho:x1}
  console.log(myObject2);
  w3.displayObject("id011", myObject2);
});
db.Stock.find({ }, function (err, docs) {
  x3 = docs;
  console.log(x3);
  var myObject3 = {stocko:x3}
  console.log(myObject3);
  w3.displayObject("id0111", myObject3);
});
function datasave2(){
var o11 = document.getElementById('o11').value;
var o22 = document.getElementById('o22').value;
var o33 = document.getElementById('o33').value;
var o44 = document.getElementById('o44').value;
var orderData1 = {Date:o11,AccountName:o22,Inward:o33,Outward:o44}
console.log(orderData1);
db.cash.insert(orderData1);
document.getElementById('o11').value = null;
document.getElementById('o22').value = null;
document.getElementById('o33').value = null;
document.getElementById('o44').value = null;
}
function datasave3(){
var o111 = document.getElementById('o111').value;
var o222 = document.getElementById('o222').value;
var o333 = document.getElementById('o333').value;
var o444 = document.getElementById('o444').value;
var o555 = document.getElementById('o555').value;
var o666 = document.getElementById('o666').value;
var o777 = document.getElementById('o777').value;
var orderData2 = {Date:o111,AccountName:o222,TransactionType:o333,Inward:o444,Outward:o555,Item:o666,Price:o777}
console.log(orderData2);
db.Stock.insert(orderData2);
document.getElementById('o111').value = null;
document.getElementById('o222').value = null;
document.getElementById('o333').value = null;
document.getElementById('o444').value = null;
document.getElementById('o555').value = null;
document.getElementById('o666').value = null;
document.getElementById('o777').value = null;
}
