/**
 * Created by Rachel on 4/3/2015.
 */
angular.module("sportsStore")
    .constant("productListActiveClass","btn-primary")
    .constant("productListPageCount",2)
    .controller("productListCtrl",function($scope,$filter,productListActiveClass,productListPageCount,cart){
     var selectedCategory=null;
    $scope.selectedPage=1;
    $scope.pageSize=productListPageCount;
    $scope.selectCategory=function(newCategory){
        selectedCategory=newCategory;
        $scope.selectedPage=1;
    }
    $scope.selectPage=function(newPage){
        $scope.selectedPage=newPage;
    }
    $scope.categoryFilterFn=function(product){


        return selectedCategory==null||product.category==selectedCategory;
    }
    $scope.getPageClass=function(page){
        return $scope.selectedPage==page?productListActiveClass:"";
        }
    $scope.addProductToCart=function(product){

        cart.addProduct(product.id,product.name,product.price);
    }
        //$scope.error=$scope.data.products.error;
});
