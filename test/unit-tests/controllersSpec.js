'use strict';

describe('Shop controllers', function() {
    
    describe('ItemListCtrl', function() {
        
        beforeEach(module('shopApp'));

        it ('should create a products model with 13 items', inject(function($controller){
            var scope = {},
            ctrl = $controller('ItemListCtrl', {$scope:scope});

            expect (scope.products.length).toBe(13);
            expect (scope.products[0].name).toBe('Almond Toe Court Shoes, Patent Black')
        })); 

        it ('should create an invoice model with 0 items', inject(function($controller){
            var scope = {},
            ctrl = $controller('ShopCartCtrl', {$scope:scope});
            expect (scope.invoice.length).toBe(0);
        }));

        it ('can push items into the invoice array', inject(function($controller){
            var scope = {},
            ctrl = $controller('ItemListCtrl', {$scope:scope});
            expect (scope.invoice.length).toBe(0);
            scope.addItem(0)
            expect (scope.invoice.length).toBe(1);
        }));

        it ('can remove items from the invoice array', inject(function($controller){
            var scope = {},
            ctrl = $controller('ShopCartCtrl', {$scope:scope});
            scope.invoice.push({})
            expect(scope.invoice.length).toBe(1);
            scope.removeItem(0)
            expect(scope.invoice.length).toBe(0);
        }));

        it ('can apply a £5 discount to total cost', inject(function($controller){
            var scope = {},
            ctrl = $controller('ShopCartCtrl', {$scope:scope});
            scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = scope.total()
            var discount = scope.activeDiscount
            scope.selectDiscount('standardDiscount')
            expect(subTotal).toBe(99.00)
            expect(scope.applyDiscount(subTotal)).toBe(94.00)
        }));

        it ('knows whether the invoice includes an item of Footwear', inject(function($controller){
            var scope = {},
            ctrl = $controller('ShopCartCtrl', {$scope:scope});
            scope.invoice.push({'price': 99.00, 'qty': 1, 'category': "Men's Casualwear"})
            expect(scope.hasFootwear()).toBe(false)
            scope.invoice.push({'price': 99.00, 'qty': 1, 'category': "Men's Footwear"})
            expect(scope.hasFootwear()).toBe(true)
            console.log(scope.addAlert())
        }));
    });
});
