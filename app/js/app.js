var app=angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'mainController'
            }).
            otherwise({
                redirectTo: '/'
             });
}]);