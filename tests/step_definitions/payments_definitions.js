'use strict';
const {Given, When, Then} = require('cucumber');
const {expect} = require('chai');


var mainPage = require('../pages/mainPage.js');
var flightPage = require('../pages/flightPage.js');
var seatsPage = require('../pages/seatsPage.js');
var paymentPage = require('../pages/paymentPage.js');
this.World = require('../support/world.js').World;

Given(/^I make a booking from "([^"]*)" to "([^"]*)" on (\d+)\/(\d+)\/(\d+) for (\d+) adults and (\d+) child$/,
    function (departure, destination, day, month, year, adults, children) {
        flightPage.searchFlights(this, departure, destination, day, month, year, adults, children);
        flightPage.chooseAnyFlight(this);
        mainPage.doLogin();
        this.verifyNotText(mainPage.cartPriceValue,"0.00", "Flight was not added to cart");
        this.clickOn(mainPage.cartContinueBtn);
        seatsPage.selectSeats(this,adults + children);
        this.clickOn(mainPage.cartContinueBtn);
        return this.waitForURLToLoad('/booking/payment');
    });

When(/^I pay for booking with card details "(\+?[\d ]+)", "(\d+)\/(\d+)" and "(\d+)"$/,
    function (cardNumber, expiryMonth, expiryYear, cvv) {
        paymentPage.fillPassengersDetails(this);
        paymentPage.fillContactDetails();
        var myCard = paymentPage.createCard(cardNumber, expiryMonth, expiryYear, cvv);
        paymentPage.fillCardDetails(myCard);
        paymentPage.fillBillingDetails();
        paymentPage.checkAcceptPolicy();
        this.clickOn(paymentPage.payNowBtn);
        return this.waitForURLToLoad('/booking/payment');
    });

Then(/^I should get payment declined message$/, function () {
    //  expect(paymentPage.paymentDeclinedMessage.isDisplayed()).to.eventually.equals(false,"Error in card message is shown");
    return this.verifyDisplayed(paymentPage.paymentDeclinedMessage, "Payment Declined Message not shown");

});



