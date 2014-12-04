'use strict';

var shopApp = angular.module('shopApp', []);

shopApp.controller('ItemListCtrl',['$scope', 'Items', function($scope, Items){
    $scope.products = Items.shelf;

    $scope.invoice = Items.invoice

    $scope.addItem = function(itemIndex) {
        var item = Items.shelf[itemIndex]
        item['qty'] = 1
        Items.invoice.push(item)
    }
}]);

shopApp.controller('ShopCartCtrl',['$scope', 'Items', function($scope, Items){
    $scope.invoice = Items.invoice;

    $scope.range = function(start, end) {
        var result = [];
        for (var i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    };

    $scope.total = function() {
        var total = 0
        angular.forEach($scope.invoice, function(item) {
            total += item.qty * item.price;
        })
        return total
    }

    $scope.removeItem = function(itemIndex){
       Items.invoice.splice(itemIndex, 1) 
    }

    $scope.activeDiscount = null;

    $scope.discounts = {
        standardDiscount: -5,
        overFifty: -10,
        overSeventyFive: -15
    }

    $scope.hasFootwear = function(){
        var footwear = false; 
        $scope.invoice.forEach(function(item){
            if (item.category.indexOf('Footwear') > -1 ) footwear = true
        })
       return footwear 
    }

    $scope.selectDiscount = function(discount){
        $scope.activeDiscount = $scope.discounts[discount]
    }

    $scope.applyDiscount = function(total){
        total += $scope.activeDiscount
        return total
    }

    
}])


