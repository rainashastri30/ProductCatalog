var npApp = angular.module('EcommCatalog',['ngRoute']);

npApp.service('ServiceNPNames',function($http){

//for displaying NP names

return {
npNames: function(){
var url = '/getNPNameList'
return $http.get(url);
}};

});


npApp.service('ServiceNP',function($http){

//for displaying NP info
return {
npDetails: function(){
var url = '/getNPInfo'
return $http.get(url);
}};


});

npApp.controller('Controller',function($scope,ServiceNP){
ServiceNP.npDetails().success(function(npInfo){
console.log("Inside NP Controller");
$scope.nps = npInfo;
});

});


npApp.controller('Controller',function($scope,ServiceNPNames){
ServiceNPNames.npNames().success(function(npData){
$scope.npList = npData;
});

});


