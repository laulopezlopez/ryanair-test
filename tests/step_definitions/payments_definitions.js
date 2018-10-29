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
    function (departure, destination, day, month, year, adults, children) {
        flightPage.searchFlights(departure, destination, day, month, year, adults, children);
        flightPage.chooseAnyFlight();
        expect(mainPage.cartPriceValue.getText()).not.to.eventually.contains("0.00","Flight was not added to cart");
        mainPage.cartContinueBtn.click();
        seatsPage.selectSeats(adults+children);
        mainPage.doLogin();
        mainPage.cartContinueBtn.click();
        return browser.wait(EC.urlContains('/booking/payment'));
});

When(/^I pay for booking with card details "(\+?[\d ]+)", "(\d+)\/(\d+)" and "(\d+)"$/,
    function (cardNumber, expiryMonth, expiryYear, cvv) {
        paymentPage.fillTwoAdultsAndOneChildData();
        var myCard=paymentPage.createCard(cardNumber,expiryMonth,expiryYear,cvv);
        paymentPage.fillContactDetails();
        paymentPage.fillCardDetails(myCard);
        paymentPage.fillBillingDetails();
        paymentPage.checkAcceptPolicy();
        paymentPage.payNowBtn.click();
        return browser.wait(EC.urlContains('/booking/payment'), 5000);
});

Then(/^I should get payment declined message$/, function () {
   //  expect(paymentPage.paymentDeclinedMessage.isDisplayed()).to.eventually.equals(false,"Error in card message is shown");
    return expect(paymentPage.paymentDeclinedMessage.isDisplayed()).to.eventually.equals(true,"error card message not shown");

});



