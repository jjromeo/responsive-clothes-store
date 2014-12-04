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
            console.log(scope.total())
        }));

        it ('can push items into the invoice array', inject(function($controller){
            var scope = {},
            ctrl = $controller('ItemListCtrl', {$scope:scope});
            expect (scope.invoice.length).toBe(0);
            scope.addItem(0)
            expect (scope.invoice.length).toBe(1);
        }));

    });
});
