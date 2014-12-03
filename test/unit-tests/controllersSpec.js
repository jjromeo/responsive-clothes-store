'use strict';

describe('Shop controllers', function() {
    
    describe('ItemListCtrl', function() {
        
        beforeEach(module('shopApp'));

        it ('should create a products model with 2 items', inject(function($controller){
            var scope = {},
            ctrl = $controller('ItemListCtrl', {$scope:scope});

            expect (scope.products.length).toBe(13);
        })); 
    });
});
