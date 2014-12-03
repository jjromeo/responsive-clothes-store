'use strict';

var shopApp = angular.module('shopApp', []);

shopApp.controller('ItemListCtrl',['$scope', 'Items', function($scope, Items){
    $scope.products = Items
}]);

shopApp.controller('ShopCartCtrl', function($scope){
    $scope.invoice = {
        items: [
        ]
    };

    $scope.addItem = function(item) {
        $scope.invoice.items.push({
            name: $scope,
            qty: 1,
            description: '',
            cost: 0
        })
    }

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })
    }
})

shopApp.factory('Items', function() {
    return [{'name': 'Almond Toe Court Shoes, Patent Black',
            'category': "Women's Footwear",
            'price': 99.00,
            'stockLeft': 5 },
            {'name': 'Suede Shoes, Blue',
            'category': "Women's Footwear",
            'price': 42.00,
            'stockLeft': 4 },
            {'name': 'Leather Driver Saddle Loafers, Tan',
            'category': "Men's Footwear",
            'price': 34.00,
            'stockLeft': 12 },
            {'name': 'Flip Flops, Red',
            'category': "Men's Footwear",
            'price': 19.00,
            'stockLeft': 6 },
            {'name': 'Flip Flops, Blue',
            'category': "Men's Footwear",
            'price': 19.00,
            'stockLeft': 0 },
            {'name': 'Gold Button Cardigan, Black',
            'category': "Women's Casualwear",
            'price': 167.00,
            'stockLeft': 6 },
            {'name': 'Cotton Shorts, Medium Red',
            'category': "Women's Casualwear",
            'price': 30.00,
            'stockLeft': 5 },
            {'name': 'Fine Stripe Short Sleeve Shirt, Grey',
            'category': "Men's Casualwear",
            'price': 49.99,
            'stockLeft': 9 },
            {'name': 'Fine Stripe Short Sleeve Shirt, Green',
            'category': "Men's Casualwear",
            'price': 39.99,
            'stockLeft': 3 },
            {'name': 'Sharkskin Waistcoat, Charcoal',
            'category': "Men's Formalwear",
            'price': 75.00,
            'stockLeft': 2 },
            {'name': 'Lightweight Patch Pocket Blazer, Deer',
            'category': "Men's Formalwear",
            'price': 175.00,
            'stockLeft': 1 },
            {'name': 'Bird Print Dress, Black',
            'category': "Women's Formalwear",
            'price': 270.00,
            'stockLeft': 10 },
            {'name': 'Mid Twist Cut-Out Dress, Pink',
            'category': "Women's Formalwear",
            'price': 540.00,
            'stockLeft': 5 },
        ]
});
