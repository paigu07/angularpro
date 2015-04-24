/**
 * Created by Rachel on 4/7/2015.
 */
angular.module("sportsStore")
.constant("dataUrl","http://graph.facebook.com/jaja" )
.controller("sportsStoreCtrl",function($scope,$http,dataUrl){
        $scope.data={};
        $http.get(dataUrl)
            .success(function(data){
                $scope.data.products=data;
            })
            .error(function(error){
                $scope.data.error=error;
            });
    })