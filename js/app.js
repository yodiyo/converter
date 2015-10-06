var app = angular.module("conversionApp",['ngMaterial']);


app.controller("conversionCtrl",function($scope) {

  $scope.units = [
    'kilogrammes',
    'litres',
    'ounces',
    'pints'
  ];

  $scope.value = 0; 

  var testvalue = function(){
    var newValue = new $scope.value;
  }
  console.log(newValue);

  $scope.result = function(value){
    var valueKg, valueLitres, valueOunces, valuePints;
    if ($scope.units === 'kilogrammes') {
      valueLitres = Math.round(value*1);
      valuePints = Math.round(value*1.759753986392702);
      valueOunces = Math.round(value*1.759753986392702);
       
      console.log(valueLitres, valuePints, valueOunces);
    } else if ($scope.units === 'litres') {
        valueKg = Math.round(value*1);
        valuePints = Math.round(value*1.759753986392702);
        valueOunces = Math.round(value*1.759753986392702);
    } else if ($scope.units === 'ounces') {
        valueKg = Math.round(value*0.0284131);
        valuePints = Math.round(value*0.050000065991);
        valueLitres = Math.round(value*0.0284131);
    } else if ($scope.units === 'pints') {
        valueKg = Math.round(value*0.56826125);
        valueOunces = Math.round(value*020);
        valueLitres = Math.round(value*0.568262000002563);
      }
  };


});








