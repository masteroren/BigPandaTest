(function(){
    'use strict'

    app.controller('mainController', Main);

    Main.$inject=['$scope'];

    function Main($scope){

        $scope.comment = {
            email: '',
            message: '',
            filter: ''
        }

        $scope.items = [];

        $scope.add= function(){

            if ($scope.comment.email == ''){
                alert('Email is required');
                return;
            }

            var imageHash = CryptoJS.MD5($scope.comment.email).toString();

            $scope.items.push({
                email: $scope.comment.email,
                message: $scope.comment.message,
                imgHash: imageHash
            });

        }

    }

})();