# Responsive Store

``

## Testing

There are two kinds of tests in my application: Unit tests and End to End tests.

### Running Unit Tests

My unit tests are written in [Jasmine][jasmine], and can be run with the [Karma
Test Runner][karma] using the command 'npm test', they can be found in `test/unit-tests/controllersSpec.js`



### End to end testing

My end-to-end tests are again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. The commands
required to get this running are:
.
npm start(A server must be running for protractor to work)
npm run update-webdriver (protractor relies on WebDriver and a script is
included to install it)

    Once you have ensured that the development web server hosting our application is up and running
    and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

npm run protractor

* the end-to-end tests are found in `e2e-tests/scenarios.js`
```
```

```
```


```
```



[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
