angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.url = '';
  $scope.addLink = function(url) {
    Links.addOne(url)
      .then(function(success) {
        console.log('you win');
      })
      .catch(function(err) {
        console.log('err:', err);
      });
  };
});
