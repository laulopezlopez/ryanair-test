var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var {Given, When, Then, setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
var EC = protractor.ExpectedConditions;
var timeout = 5000; // in miliseconds

var mainPage = require('../pages/mainPage.js');
var flightPage = require('../pages/flightPage.js');

Given(/^I make a booking from "([^"]*)" to "([^"]*)" on (\d+)\/(\d+)\/(\d+) for (\d+) adults and (\d+) child$/,
    function (departure, destination, day, month, year, adults, child) {
        mainPage.searchFlights(departure, destination, day, month, year, adults, child);
        browser.wait(EC.visibilityOf(flightPage.firstFlight), timeout);
        flightPage.chooseAnyFlight();
        return expect(browser.getCurrentUrl()).to.eventually.equal("");

});
