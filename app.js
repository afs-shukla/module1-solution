
var appname= angular.module('LunchCheck',[]);
    appname.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject=['$scope']
      
    function LunchCheckController ($scope){
            $scope.lunchmenu =""
            $scope.message=""
            $scope.displayMessage=createMessage;
           
    function createMessage (){
          if (isEmpty($scope.lunchmenu)){
              $scope.message="Please enter data first";
          }else{
              if (menuCount($scope.lunchmenu) <= 3){
                 $scope.message="Enjoy!"
              }else{
                 $scope.message="Too much!"
              }
          }
        
     }

      function isEmpty(str) {
        return (!str || 0 === str.length);
      }
     
      function menuCount(str) {
        return ((str.split(',')).length);
      }
}
   
    
