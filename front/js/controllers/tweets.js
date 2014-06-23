angular.module('iesMaps')
.controller('tweetsController', function ($scope, data) {
  $scope.tweets = data.tweets;
});
