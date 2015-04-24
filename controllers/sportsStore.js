/**
 * Created by Rachel on 4/2/2015.
 */
angular.module("sportsStore")
    .constant("dataUrl","http://graph.facebook.com/jaja" )
    .controller("sportsStore", function ($scope,$http,dataUrl) {
        $scope.data={
            products:[
                {id:1,name: "Leather Messenger Store Style #: 30S5GCZM2L",description:"A product", category:"Bag",price:100,
                 img:"images.jpg"},
                {id:2,name: "Store Style #: 32S4STVC3L",description:"A product", category:"Watch",price:110, img:"hero.jpg"},
                {id:3,name:"Product #3",description:"A product", category:"Sales",price:210,img:"figgie_hand_painted.jpg"},
                {id:4,name:"Product #4",description:"A product", category:"Accessories",price:202,img:"Hand+Painted+Wedding+Shoes+Personalized.JPG"}
            ]};


           //$http.get(dataUrl)
           //     .success(function(data){
           //         $scope.data.products=data;
           //     })
           //     .error(function(error){
           //         $scope.data.error=error;
           //     });


});
