angular.module('shortly.links', [])

// .controller('LinksController', ['$scope', function ($scope, Links) {
//   // Your code here
//   $scope.data = {};
//   $scope.init = function() {
//     console.log(Links);
//   };
// }]);
.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  
  Links.getAll()
    .then(function(data) {
      $scope.data.links = data;
    });

  $scope.click = function() {
    var index = this.$index;
    $scope.data.links[index].visits ++;
  };
  // $scope.data.links.push(Links.getAll());
  //};
  // $scope.$on('$viewContentLoaded', function() {
  //   Links.getAll();
  // });
});