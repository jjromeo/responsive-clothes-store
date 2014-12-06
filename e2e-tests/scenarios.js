'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('shopApp', function() {

      var shoppingCart = element.all(by.repeater('item in invoice'));
      var firstItem = element(by.repeater('product in products').row(0))
      var secondItem = element(by.repeater('product in products').row(1))
      var sharkSkin = element(by.repeater('product in products').row(9))
      var outOfStockFlipFlops = element(by.repeater('product in products').row(4))
      var firstCartItem = element(by.repeater('item in invoice').row(0))
      var rmFirstCartItem = firstCartItem.element(by.css('#remove-item'))
      var subTotal = element(by.css('#sub-total'))
      var finalCost = element(by.css('#final-cost'))

      var addItem = function(item){
          item.element(by.css('#add-item')).click()
      }

    beforeEach(function() {
      browser.get('/app');
    })

  it('should display all of the 13 items on the page', function() {
      var phoneList = element.all(by.repeater('product in products'));
      expect(phoneList.count()).toBe(13)
  });

  it('should add an item to shopping cart when requested', function(){
      expect(shoppingCart.count()).toBe(0)
      addItem(firstItem)
      expect(shoppingCart.count()).toBe(1)
  })


  it('should remove an item from shopping cart when requested', function(){
      addItem(firstItem)
      expect(shoppingCart.count()).toBe(1)
      rmFirstCartItem.click()
      expect(shoppingCart.count()).toBe(0)
  })

  it('should be able to view the total price when there is a product in cart', function(){
      addItem(firstItem)
      expect(subTotal.getText()).toBe('£99.00')
      expect(finalCost.getText()).toBe('£99.00')
  })

  it('should be able to view the total price of multiple products in cart', function(){
      addItem(firstItem)
      addItem(secondItem)
      expect(subTotal.getText()).toBe('£141.00')
      expect(finalCost.getText()).toBe('£141.00')
  })

  it('should be able to apply a voucher to shopping cart and see a reduced price.', function(){
      addItem(firstItem)
      element(by.css('#standard-discount')).click()
      expect(subTotal.getText()).toBe('£99.00')
      expect(finalCost.getText()).toBe('£94.00')
  })

  it('should not be able to apply a £10 voucher when less than £50 is being spent', function(){
      addItem(secondItem)
      element(by.css('#over-fifty')).click()
      expect(subTotal.getText()).toBe('£42.00')
      expect(finalCost.getText()).toBe('£42.00')
      expect(element(by.css('.alert-msg')).getText()).toBe('You must spend more than £50 to use this discount')
  })

  it('should be able to apply a £10 voucher when more than £50 is being spent', function(){
      addItem(sharkSkin)
      element(by.css('#over-fifty')).click()
      expect(element(by.css('.alert-msg')).isPresent()).toBe(false)
      expect(subTotal.getText()).toBe('£75.00')
      expect(finalCost.getText()).toBe('£65.00')
  })

  it('should not be able to apply a £15 voucher when less than £75 is being spent', function(){
      addItem(secondItem)
      element(by.css('#over-seventyFive')).click()
      expect(element(by.css('.alert-msg')).getText()).toBe('You must purchase some footwear and spend over £75 in order to use this discount.')
      expect(subTotal.getText()).toBe('£42.00')
      expect(finalCost.getText()).toBe('£42.00')
  })

  it('should not be able to apply a £15 voucher when footwear is not being bought', function(){
      addItem(sharkSkin)
      element(by.css('#over-seventyFive')).click()
      expect(element(by.css('.alert-msg')).getText()).toBe('You must purchase some footwear and spend over £75 in order to use this discount.')
      expect(subTotal.getText()).toBe('£75.00')
      expect(finalCost.getText()).toBe('£75.00')
  })

  it('should be able to apply a £15 voucher when footwear is being bought and £75 is being spent', function(){
      addItem(firstItem)
      element(by.css('#over-seventyFive')).click()
      expect(element(by.css('.alert-msg')).isPresent()).toBe(false)
      expect(subTotal.getText()).toBe('£99.00')
      expect(finalCost.getText()).toBe('£84.00')
  })

  it('should not be able to add out of stock items to shopping cart', function(){
      addItem(outOfStockFlipFlops)
      expect(element(by.css('.alert-msg')).getText()).toBe('Sorry, this item is out of stock')
      expect(subTotal.getText()).toBe('')
  })
});

