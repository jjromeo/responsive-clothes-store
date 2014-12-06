'use strict';

var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('ItemListCtrl',['$scope', 'Items', 'Alerts', function($scope, Items, Alerts){
    $scope.products = Items.shelf;
    $scope.invoice = Items.invoice

    $scope.addAlert = function(message) {
        Alerts.alerts.push({type: 'danger', msg: message})
    }

    $scope.hasStock = function(itemIndex){
        return $scope.products[itemIndex].stockLeft > 0
    }

    $scope.addItem = function(itemIndex) {
        var item = $scope.products[itemIndex]
        item['qty'] = 1
        Items.invoice.push(item)
    }
}]);

shopControllers.controller('ShopCartCtrl',['$scope', 'Items', 'Alerts', function($scope, Items, Alerts){
    $scope.invoice = Items.invoice;
    $scope.alerts = Alerts.alerts

    // Range for dynamically setting amount of product selectable
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
    };

    $scope.selectDiscount = function(discount){
        $scope.activeDiscount = $scope.discounts[discount]
    };

    $scope.applyDiscount = function(total){
        total += $scope.activeDiscount
        return total
    };

    $scope.addAlert = function(message) {
        $scope.alerts.push({type: 'danger', msg: message})
    }

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    }

    
}])


