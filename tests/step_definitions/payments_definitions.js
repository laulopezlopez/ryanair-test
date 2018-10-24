


var {Given, When, Then, setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
var EC = protractor.ExpectedConditions;
var timeout = 5000; // in miliseconds

var mainPage = require('../pages/mainPage.js');
var chooseFlightPage = require('../pages/chooseFlightPage.js');

Given(/^I make a booking from "([^"]*)" to "([^"]*)" on (\d+)\/(\d+)\/(\d+) for (\d+) adults and (\d+) child$/,
    function (departure, destination, day, month, year, adults, child) {

        var targetUrl='https://www.ryanair.com/ie/en/booking/home/' + departure + '/' + destination + '/' + year + '-' + month + '-' + day + '//' + adults + '/0/' + child + '/0';
        browser.get(targetUrl);
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).to.eventually.equal(targetUrl);
        browser.wait(EC.visibilityOf(chooseFlightPage.firstFlight), timeout);
        chooseFlightPage.chooseAnyFlight();
        return expect(browser.getCurrentUrl()).to.eventually.equal(targetUrl);

});
