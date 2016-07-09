angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.url = '';
  $scope.valid = 'Valid Url';

  $scope.addLink = function(url) {
    Links.addOne(url)
      .then(function(success) {
        // Links.getAll();
        $location.path('/links');
        console.log('you win');
      })
      .catch(function(err) {
        console.log('err:', err);
      });
  };

  $scope.validate = function(url) {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    console.log(url.match(rValidUrl));
    if (!url.match(rValidUrl)) {
      $scope.valid = 'Invalid Url';
    }

    if (url.match(rValidUrl)) {
      $scope.valid = 'Valid Url';
    }
  };
});
