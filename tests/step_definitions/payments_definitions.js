var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var {Given, When, Then, setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);
var EC = protractor.ExpectedConditions;
var timeout = 10000; // in miliseconds

var mainPage = require('../pages/mainPage.js');
var flightPage = require('../pages/flightPage.js');
var seatsPage = require('../pages/seatsPage.js');
var paymentPage = require('../pages/paymentPage.js');

Given(/^I make a booking from "([^"]*)" to "([^"]*)" on (\d+)\/(\d+)\/(\d+) for (\d+) adults and (\d+) child$/,
    function (departure, destination, day, month, year, adults, child) {
        flightPage.searchFlights(departure, destination, day, month, year, adults, child);
        flightPage.chooseAnyFlight();
        seatsPage.selectSeats();
        mainPage.doLogin();
        mainPage.headerCheckOutBtn.click();
        return browser.wait(EC.urlContains('/booking/payment'), 5000);


});

When(/^I pay for booking with card details "(\+?[\d ]+)", "(\d+)\/(\d+)" and "(\d+)"$/,
    function (cardNumber, expiryMonth, expiryYear, cvv) {
        paymentPage.fillTwoAdultsAndOneChildData();
        var myCard=paymentPage.createCard(cardNumber,expiryMonth,expiryYear,cvv);
        paymentPage.fillCardDetails(myCard);
        paymentPage.fillBillingDetails();
        paymentPage.fillContactDetails();
       // paymentPage.checkAcceptPolicy();
        return browser.wait(EC.urlContains('/booking/payment'), 5000);
});

Then(/^I should get payment declined message$/, function (callback) {
    return browser.wait(EC.urlContains('/booking/payment'), 5000);
});



