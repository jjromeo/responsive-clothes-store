'use strict';

describe('Shop controllers', function() {
   beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  }); 
    describe('ItemListCtrl', function() {
            var ctrl, scope, $httpBackend;
        
        beforeEach(module('shopApp'));
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_
            $httpBackend.expectGET('inventory/products.json').
                respond([{"name": "Almond Toe Court Shoes, Patent Black",
                        "category": "Women's Footwear",
                        "price": 99.00,
                        "stockLeft": 5,
                        "img": "almond_black.jpeg"},
                        {"name": "Suede Shoes, Blue",
                        "category": "Women's Footwear",
                        "price": 42.00,
                        "stockLeft": 4,
                        "img": "blue_suede_shoe.jpeg"},
                        {"name": "Leather Driver Saddle Loafers, Tan",
                        "category": "Men's Footwear",
                        "price": 34.00,
                        "stockLeft": 12,
                        "img": "tan_loafers.jpeg"}])
            scope = $rootScope.$new()
            ctrl = $controller('ItemListCtrl', {$scope: scope});
        }));

        it ('should create a products model with all items from json response', inject(function($controller){
            $httpBackend.flush()
            expect(scope.products.length).toBe(3);
            expect(scope.products[0].name).toBe('Almond Toe Court Shoes, Patent Black')
        })); 

        it ('can push items into the invoice array', inject(function($controller){
            $httpBackend.flush()
            expect(scope.invoice.length).toBe(0);
            scope.addItem(0)
            expect(scope.invoice.length).toBe(1);
        }));

    })

    describe('ShopCartCtrl', function() {
        var ctrl, scope;

        beforeEach(module('shopApp'));
        beforeEach(inject(function($httpBackend, $rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('ShopCartCtrl', {$scope: scope});
        }));

        it ('should create an invoice model with 0 items', inject(function($controller){
            expect (scope.invoice.length).toBe(0);
        }));


        it ('can remove items from the invoice array', inject(function($controller){
            scope.invoice.push({})
            expect(scope.invoice.length).toBe(1);
            scope.removeItem(0)
            expect(scope.invoice.length).toBe(0);
        }));

        it ('can apply a £5 discount to total cost', inject(function($controller){
            scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = scope.total()
            var discount = scope.activeDiscount
            scope.selectDiscount('standardDiscount')
            expect(subTotal).toBe(99.00)
            expect(scope.applyDiscount(subTotal)).toBe(94.00)
        }));

        it ('can apply a £10 discount to total cost', inject(function($controller){
            scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = scope.total()
            var discount = scope.activeDiscount
            scope.selectDiscount('overFifty')
            expect(subTotal).toBe(99.00)
            expect(scope.applyDiscount(subTotal)).toBe(89.00)
        }));

        it ('can apply a £15 discount to total cost', inject(function($controller){
            scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = scope.total()
            var discount = scope.activeDiscount
            scope.selectDiscount('overSeventyFive')
            expect(subTotal).toBe(99.00)
            expect(scope.applyDiscount(subTotal)).toBe(84.00)
        }));

        it ('knows whether the invoice includes an item of Footwear', inject(function($controller){
            scope.invoice.push({'price': 99.00, 'qty': 1, 'category': "Men's Casualwear"})
            expect(scope.hasFootwear()).toBe(false)
            scope.invoice.push({'price': 99.00, 'qty': 1, 'category': "Men's Footwear"})
            expect(scope.hasFootwear()).toBe(true)
        }));

        it ('can put an alert into the alerts array', inject(function($controller){
            expect(scope.alerts.length).toBe(0)
            scope.addAlert('hello')
            expect(scope.alerts.length).toBe(1)
        }));

        it ('can remove an alert from the alerts array', function(){
            scope.addAlert('hello')
            expect(scope.alerts.length).toBe(1)
            scope.closeAlert(0)
            expect(scope.alerts.length).toBe(0)
        });
        

    });
});
