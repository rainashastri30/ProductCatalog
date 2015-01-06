var app = angular.module('EcommCatalog',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/store', {
        templateUrl: '/home1.html',
       
    }).when('/store/car', {
        templateUrl: '/cars.html',
        controller: 'CarNameController'
    }).when('/store/car/:carId', {
        templateUrl: '/carsInfo.html',
        controller: 'carController'
	})
	.when('/store/tv', {
        templateUrl: '/tv.html',
        controller: 'tvNameController'
    }).when('/store/tv/:tvId', {
        templateUrl: '/tvInfo.html',
        controller: 'tvController'
    }).
	when('/store/nailPolish', {
        templateUrl: '/nailPolish.html',
        controller: 'NpNameController'
    }).
	when('/store/nailPolish/:nailPolishId', {
        templateUrl: '/nailPolishInfo.html',
        controller: 'npController'
    }).when('/store/user/login', {
        templateUrl: '/login.html',
       
    }).when('/home/cars/:Id', {
	templateUrl: '/carsInfo.html',
        controller: 'SampleController'
    }).when('/store/user/login', {
        templateUrl: '/login.html',
       
    }).
      otherwise({
        redirectTo: '/store',
	
      });
	  
}]);




app.service('ServiceCarNames',function($http){

//for displaying car names

return {
carNames: function(){
var url = '/getCarNameList'
console.log("Inside Car name list");
return $http.get(url);
}};

});

app.service('ServiceCar',function($http,$routeParams){
var url;
//for displaying car details
return {
carDetails: function(){
var id = $routeParams.carId;
url = '/getCarInfo/'+id
return $http.get(url);
}};
});


app.service('SampleService',function($http,$routeParams){

//for displaying car names

return {
displayProdInfo: function(){
console.log("Inside Sample Service");
var carId = $routeParams.Id;
var url = 'http://localhost:8080/home/cars/'+carId
return $http.get(url);
}};

});


app.controller('SampleController',function($scope,SampleService){
SampleService.displayProdInfo().success(function(product){
console.log("Inside Sample Controller");
$scope.car = product;
});

});

/*
app.controller('SampleController',function($scope,SampleService){
SampleService.displayProdInfo().then(function(cars){
if(typeof cars.data== 'object'){
$scope.car = cars;
return cars.data;
}else{
return $q.reject(cars.data);
}

});

});

*/


app.controller('CarNameController',function($scope,ServiceCarNames){
ServiceCarNames.carNames().success(function(cars){
console.log("Inside Car name list");
$scope.carsdata = cars;
});

});


app.controller('carController',function($scope,ServiceCar){
ServiceCar.carDetails().success(function(carsInfo){
$scope.cars = carsInfo;
});

});

//**************************************************************


app.service('ServiceTVNames',function($http){

//for displaying tv names

return {
tvNames: function(){
var url = '/getTVNameList'
return $http.get(url);
}};

});




//for displaying tv info
app.service('ServiceTV',function($http,$routeParams){
var url;
return {
tvDetails: function(){
var id = $routeParams.tvId;
url = '/getTVInfo/'+id
console.log("Inside TV COntroller");
return $http.get(url);
}};


});


app.controller('tvController',function($scope,ServiceTV){
ServiceTV.tvDetails().success(function(tvInfo){
$scope.tvs = tvInfo;
});

});



app.controller('tvNameController',function($scope,ServiceTVNames){
ServiceTVNames.tvNames().success(function(tvData){
$scope.tvList = tvData;
});

});


//**************************************************************



app.service('ServiceNPNames',function($http){

//for displaying NP names

return {
npNames: function(){
var url = '/getNPNameList'
return $http.get(url);
}};

});


app.service('ServiceNP',function($http,$routeParams){

//for displaying NP info
var url;
return {
npDetails: function(){
var id=$routeParams.nailPolishId
url = '/getNPInfo/'+id
return $http.get(url);
}};


});

app.controller('npController',function($scope,ServiceNP){
ServiceNP.npDetails().success(function(npInfo){
console.log("Inside NP Controller");
$scope.nps = npInfo;
});

});


app.controller('NpNameController',function($scope,ServiceNPNames){
ServiceNPNames.npNames().success(function(npData){
$scope.npList = npData;
});

});





