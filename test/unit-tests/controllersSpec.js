'use strict';

describe('Shop controllers', function() {
    
    describe('ItemListCtrl', function() {
        
        beforeEach(module('shopApp'));
        beforeEach(inject(function($controller) {
            var ctrl;
            this.scope = {},
            ctrl = $controller('ItemListCtrl', {$scope: this.scope});
        }));

        it ('should create a products model with 13 items', inject(function($controller){
            expect(this.scope.products.length).toBe(13);
            expect(this.scope.products[0].name).toBe('Almond Toe Court Shoes, Patent Black')
        })); 

        it ('can push items into the invoice array', inject(function($controller){
            expect(this.scope.invoice.length).toBe(0);
            this.scope.addItem(0)
            expect(this.scope.invoice.length).toBe(1);
        }));

    })

    describe('ShopCartCtrl', function() {

        beforeEach(module('shopApp'));
        beforeEach(inject(function($controller) {
            var ctrl;
            this.scope = {},
            ctrl = $controller('ShopCartCtrl', {$scope: this.scope});
        }));

        it ('should create an invoice model with 0 items', inject(function($controller){
            expect (this.scope.invoice.length).toBe(0);
        }));


        it ('can remove items from the invoice array', inject(function($controller){
            this.scope.invoice.push({})
            expect(this.scope.invoice.length).toBe(1);
            this.scope.removeItem(0)
            expect(this.scope.invoice.length).toBe(0);
        }));

        it ('can apply a £5 discount to total cost', inject(function($controller){
            this.scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = this.scope.total()
            var discount = this.scope.activeDiscount
            this.scope.selectDiscount('standardDiscount')
            expect(subTotal).toBe(99.00)
            expect(this.scope.applyDiscount(subTotal)).toBe(94.00)
        }));

        it ('can apply a £10 discount to total cost', inject(function($controller){
            this.scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = this.scope.total()
            var discount = this.scope.activeDiscount
            this.scope.selectDiscount('overFifty')
            expect(subTotal).toBe(99.00)
            expect(this.scope.applyDiscount(subTotal)).toBe(89.00)
        }));

        it ('can apply a £15 discount to total cost', inject(function($controller){
            this.scope.invoice.push({'price': 99.00, 'qty': 1})
            var subTotal = this.scope.total()
            var discount = this.scope.activeDiscount
            this.scope.selectDiscount('overSeventyFive')
            expect(subTotal).toBe(99.00)
            expect(this.scope.applyDiscount(subTotal)).toBe(84.00)
        }));

        it ('knows whether the invoice includes an item of Footwear', inject(function($controller){
            this.scope.invoice.push({'price': 99.00, 'qty': 1, 'category': "Men's Casualwear"})
            expect(this.scope.hasFootwear()).toBe(false)
            this.scope.invoice.push({'price': 99.00, 'qty': 1, 'category': "Men's Footwear"})
            expect(this.scope.hasFootwear()).toBe(true)
        }));

        it ('can put an alert into the alerts array', inject(function($controller){
            expect(this.scope.alerts.length).toBe(0)
            this.scope.addAlert('hello')
            expect(this.scope.alerts.length).toBe(1)
        }));

        it ('can remove an alert from the alerts array', inject(function($controller){
            this.scope.addAlert('hello')
            expect(this.scope.alerts.length).toBe(1)
            this.scope.closeAlert(0)
            expect(this.scope.alerts.length).toBe(0)
        }));
        

    });
});
