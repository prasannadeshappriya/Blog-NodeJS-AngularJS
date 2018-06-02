app.controller('MainController', [
    '$scope', function($scope){
        $scope.showAnswer = false;
        $scope.showSecondNumberError = false;
        $scope.showFirstNumberError = false;

        resetVariables = function(value){
            if(value){
                $scope.showAnswer = true;
                $scope.showSecondNumberError = true;
                $scope.showFirstNumberError = true;
            }else{
                $scope.showAnswer = false;
                $scope.showSecondNumberError = false;
                $scope.showFirstNumberError = false;
            }
        };

        $scope.btnAddition = function () {
            if(typeof $scope.first_num==='undefined'){
                $scope.first_num = "0";
            }
            if(typeof $scope.second_num==='undefined'){
                $scope.second_num = "0";
            }
            let answer = parseFloat($scope.first_num) + parseFloat($scope.second_num);
            $scope.answer = $scope.first_num + ' + ' + $scope.second_num + ' = ' + answer;
            $scope.showAnswer = true;
        }
}]);