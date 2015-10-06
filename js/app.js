var app = angular.module("conversionApp",['ngMaterial']);


app.controller("conversionCtrl",function($scope) {

  $scope.units = [
    'kilogrammes',
    'litres',
    'ounces',
    'pints'
  ];

  var number = $scope.value;

  console.log(number);


  var howMany = $scope.data;


  console.log(howMany);




   //$scope.unitValue = 1;

//    selectedOption: {id: '1', name: 'Kilogrammes'} //default value 



   //$scope.selected = data.repeatSelect;

  // 1 litre = 1.759 753 986 pint // 1 pint = 0.568 litre

  //var unit = $scope.data.availableOptions;

//  console.log (unit[3].name);



// function convertUnits(kg, lbs, oz, pints) {
//   var convertedValue;
//   if (kg){
//     convertedValue = Math.round(unitValue*2);
//     return convertedValue;
//   }

// }


//   function convertUnits(cm, inches, kilos, lbs) {
//     var convertedValue;
//     if (cm) {
//       convertedValue = Math.round(cm / 2.54);
//     } else if (inches) {
//       convertedValue = Math.round(inches * 2.54);
//     } else if (kilos) {
//       convertedValue = Math.round(kilos * 2.20462);
//     } else {
//       convertedValue = Math.round(lbs / 2.20462);
//     }
//     return convertedValue;
//   }


  // 1 kilogram = 35.273 961 95 ounce // 1 ounce = 0.028 349 523 kilogram



});


