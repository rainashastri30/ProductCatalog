var tvApp = angular.module('EcommCatalog',['ngRoute']);

tvApp.service('ServiceTVNames',function($http){

//for displaying tv names

return {
tvNames: function(){
var url = '/getTVNameList'
return $http.get(url);
}};

});




//for displaying tv info
tvApp.service('ServiceTV',function($http){
return {
tvDetails: function(){
var url = '/getTVInfo'
console.log("Inside TV COntroller");
return $http.get(url);
}};


});


tvApp.controller('Controller',function($scope,ServiceTV){
ServiceTV.tvDetails().success(function(tvInfo){
$scope.tvs = tvInfo;
});

});



app.controller('Controller',function($scope,ServiceTVNames){
ServiceTVNames.tvNames().success(function(tvData){
$scope.tvList = tvData;
});

});