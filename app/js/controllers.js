'use strict';

var shopApp = angular.module('shopApp', []);

shopApp.controller('ItemListCtrl',['$scope', 'Items', function($scope, Items){
    $scope.products = Items.shelf;
    $scope.invoice = Items.invoice
    $scope.addItem = function(itemIndex) {
        var item = Items.shelf[itemIndex]
        item['qty'] = 1
        item['sum'] = 0
        Items.invoice.push(item)
    }
}]);

shopApp.controller('ShopCartCtrl',['$scope', 'Items', function($scope, Items){
    $scope.invoice = Items.invoice;
    $scope.total = function() {
        var total = 0
        angular.forEach($scope.invoice, function(item) {
            total += item.qty * item.price;
        })
        return total
    }
}])


