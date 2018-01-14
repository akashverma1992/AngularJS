var myApp = angular.module('MmyApp', []);

myApp.controller('CGreetingsController', ['$scope', function($scope){
    $scope.greeting = "Hello!";
}]);

myApp.controller('CDoubleController', ['$scope', function($scope){
    $scope.double = function(value){return (value * 2)};
}]);

myApp.controller('CSpicyController', ['$scope', function($scope){
    $scope.spice = 'very';

    $scope.chiliSpicy = function(){
        $scope.spice = 'chili'; 
    };

    $scope.jalapenoSpicy = function(){
        $scope.spice = 'jalapeno'; 
    };
}]);

myApp.controller('CSpicyController2', ['$scope', function($scope){
    $scope.spice = 'very';
    $scope.customSpice = 'wasabi';

    $scope.spicy = function(spice){
        $scope.spice = spice; 
    };
}]);

// scopeInheritance
myApp.controller('MainController', ['$scope', function($scope) {
    $scope.timeOfDay = 'morning';
    $scope.name = 'Nikki';
}]);
  myApp.controller('ChildController', ['$scope', function($scope) {
    $scope.name = 'Mattie';
}]);
myApp.controller('GrandChildController', ['$scope', function($scope) {
    $scope.timeOfDay = 'evening';
    $scope.name = 'Gingerbread Baby';
    $scope.location = 'Delhi';
}]);