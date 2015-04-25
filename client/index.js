'use strict';

angular.module('codingHouseClock', [])
.controller('clock', ['$scope', '$rootScope', '$interval', function($scope, $rootScope, $interval) {
  var now;
  var numNow;
  var days = 60*60*24;
  // $scope.daysSinceDate = 0;
  // add start button to launch clock
  // create current date object
  // convert current, end and start date to Unix Epoch
  // subtract end date from current date
  // extract out days, hours, minutes and seconds remaining
  // set interval for date refresh every second (?) || use JSON call (?)
  $scope.startClock = function() {
    $interval(runClock, 1000);

    function runClock() {
      now = new Date();
      numNow = now.getTime();
      numNow/=1000;

      // $scope.start =
      // var t = 1429938030084;

      // start date April 2, 4pm
      var s = 1427972400;
      // end date June 8, 2015
      var e = 1433761200;

      var timeSince = numNow - s;
      $scope.daysSinceDate = Math.floor(timeSince/days);
      // var hoursSinceDate = daysSinceDate -

      var timeTo = e - numNow;
      $scope.daysToDate = Math.floor(timeTo/days);
      console.log(numNow, 'since', $rootScope.daysSinceDate, 'to', $rootScope.daysToDate);
    }
  };
}]);
