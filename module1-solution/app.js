(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.showMessage = function(){
      if($scope.lunchMenu == ''){
        $scope.message = "Please enter data first";
        return;
      }
      var lunchItems = $scope.lunchMenu.split(",");
      lunchItems = lunchItems.filter(v=>v != '');
      if(lunchItems.length > 3)
        $scope.message = "Too Much";
      else
        $scope.message = "Enjoy";
    }
  }

})();
