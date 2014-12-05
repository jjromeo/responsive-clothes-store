'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('shopApp', function() {

    beforeEach(function() {
      browser.get('/app');
    })

  it('should display all of the 13 items on the page', function() {
      var phoneList = element.all(by.repeater('product in products'));
      expect(phoneList.count()).toBe(13)
  });


});

