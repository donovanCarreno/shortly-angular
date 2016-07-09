angular.module('shortly.links', [])

.controller('LinksController', ['$scope', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  // $scope.init = function() {
  console.log($scope);
  // };
}]);
// .controller('LinksController', function ($scope, Links) {
//   // Your code here
//   $scope.data = {};
//   $scope.init = function() {
//     console.log('hello');
//     Links.getAll();
//   };
// });