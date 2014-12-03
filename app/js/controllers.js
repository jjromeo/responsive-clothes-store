'use strict';

var shopApp = angular.module('shopApp', []);

shopApp.controller('ItemListCtrl',['$scope', 'Items', function($scope, Items){
    $scope.products = Items.shelf;
    $scope.invoice = Items.invoice
    $scope.addItem = function(itemIndex) {
        Items.invoice.push(Items.shelf[itemIndex])
    }
}]);

shopApp.controller('ShopCartCtrl',['$scope', 'Items', function($scope, Items){
    $scope.invoice = Items.invoice;

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.price;
        })
        return total;
    }
}])


