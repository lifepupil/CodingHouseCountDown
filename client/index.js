'use strict';

angular.module('codingHouseClock', [])
.controller('clock', ['$scope',function($scope) {
  var time = new Date();
  var numTime = time.getTime();
  console.log(time, numTime);

  


}]);
