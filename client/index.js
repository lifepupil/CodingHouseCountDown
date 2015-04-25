'use strict';

angular.module('codingHouseClock', [])
.controller('clock', ['$scope', '$rootScope', function($scope, $rootScope) {
  var now;
  var numNow;
  // $scope.daysSinceDate = 0;
  // add start button to launch clock
  // create current date object
  // convert current, end and start date to Unix Epoch
  // subtract end date from current date
  // extract out days, hours, minutes and seconds remaining
  // set interval for date refresh every second (?) || use JSON call (?)
  $scope.startClock = function($scope) {
    setInterval(runClock, 1000);

    function runClock() {
      $rootScope.daysSinceDate = 0;
      now = new Date();
      numNow = now.getTime();
      numNow/=1000;
      // $scope.start =
      // var t = 1429938030084;

      // start date April 2, 4pm
      var s = 1427972400;
      // end date June 8, 2015
      var e = 1433761200;
      var days = 60*60*24;
      var hours = 60*60;
      var minutes = 60;

      var timeSince = numNow - s;
      $rootScope.daysSinceDate = Math.floor(timeSince/days);
      // var hoursSinceDate = daysSinceDate -

      var timeTo = e - numNow;
      var daysToDate = timeTo/days;


      console.log(numNow, 'since', $rootScope.daysSinceDate, 'timeSince', timeSince);



    }



  };
  // set




}]);
