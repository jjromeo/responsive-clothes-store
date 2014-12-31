# Responsive Store

This is a one-page web-app created to simulate an online store.

Initialized using the angular-seed repo, hence the large amount of commits.

## Specification

It has been created to the specification that it must :

* Responsive
* Allow users to add products to a Shopping Cart
* Allow users to remove products from their shopping carts
* Allow users to see a total price of the products in their cart.
* Allow users to use vouchers on their cart.
* Allow users to see the price of their cart after discounts.
* Alert users when invalid vouchers are applied to their cart.
* Not allow users to put out of stock items into their cart.

## Approach

With the specification in mind, I decided to use: 

* Angularjs for my front-end Javascript, as I have been practicing it recently and wanted to learn more of it.
* Twitter Bootstrap for the styling, to help with the responsiveness of the page.

My approach was to first focus on getting the basic functionality there with the first items on the specification, before adding some styling and responsiveness, and then returning to add the final bits of functionality.

The majority of my code can be found in `app/js/` and `index.html`, with some added styling found in `app/css/style.css`. 


Technologies used for testing will be outlined below:

## Testing

#### Foreword
Whilst I generally adhere strictly to a test-first approach, as I was largely unfamiliar with Angularjs before starting this project, I needed to get an idea of the basics before I was able to outline what I would do through tests. This meant that at first my tests were fairly limited in coverage. However, as my grasp on the framework improved I went back to add further tests to greatly increase the coverage. As a result of what I've learned I'll be able to much more easily test-drive future projects using Angularjs.

There are two kinds of tests in my application: Unit tests and End to End tests.

### Running Unit Tests

My unit tests are written in [Jasmine][jasmine], and can be run with the [Karma
Test Runner][karma] using the command 'npm test', they can be found in `test/unit-tests/controllersSpec.js`



### End to end testing

My end-to-end tests are again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. The commands
required to get this running are:

* npm start(A server must be running for protractor to work)
* npm run update-webdriver (protractor relies on WebDriver and a script is
included to install it)
* npm run protractor - Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:



* the end-to-end tests are found in `e2e-tests/scenarios.js`
```
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
