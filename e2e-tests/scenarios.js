'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('shopApp', function() {

      var shoppingCart = element.all(by.repeater('item in invoice'));
      var firstItem = element(by.repeater('product in products').row(0))
      var secondItem= element(by.repeater('product in products').row(1))
      var addFirstItem = firstItem.element(by.css('#add-item'))
      var firstCartItem = element(by.repeater('item in invoice').row(0))
      var rmFirstCartItem = firstCartItem.element(by.css('#remove-item'))

    beforeEach(function() {
      browser.get('/app');
    })

  it('should display all of the 13 items on the page', function() {
      var phoneList = element.all(by.repeater('product in products'));
      expect(phoneList.count()).toBe(13)
  });

  it('should add an item to shopping cart when requested', function(){
      var shoppingCart = element.all(by.repeater('item in invoice'));
      expect(shoppingCart.count()).toBe(0)
      addFirstItem.click()
      expect(shoppingCart.count()).toBe(1)
  })


  it('should remove an item from shopping cart when requested', function(){
      addFirstItem.click()
      expect(shoppingCart.count()).toBe(1)
      rmFirstCartItem.click()
      expect(shoppingCart.count()).toBe(0)
  })

  it('should be able to view the total price of the products in cart', function(){

  })

});

