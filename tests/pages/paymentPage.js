'use strict';

var testdata = require('../test_data/data.json');
module.exports = {

    page: this,
    signInBtn: $('#myryanair-auth-login'),
    passengerDetails: {
        getPassengerTitleSelector: function (num) {
            return $('[name="passengerForm' + num + '"] .payment-passenger-title select')
        },
        getPassengerNameInput: function (num) {
            return $('[name="passengerForm' + num + '"] .payment-passenger-first-name input')
        },
        getPassengerLastNameInput: function (num) {
            return $('[name="passengerForm' + num + '"] .payment-passenger-last-name input')
        },

    },
    paymentDetails: {
        cardNumberInput: $('input[ng-model="$ctrl.cardModel.cardNumber"]'),
        cardTypeSelector: $('[name="cardType"]'),
        expiryMonthSelector: $('[name="expiryMonth"]'),
        expiryYearSelector: $('[name="expiryYear"]'),
        securityCodeInput: $('input[name="securityCode"]'),
        cardHolderNameInput: $('input[name="cardHolderName"]'),
        billingAddressAddressInput: $('input[name="billingAddressAddressLine1"]'),
        billingAddressCityInput: $('input[name="billingAddressCity"]'),
        acceptPolicyCheckbox: $('[name="acceptPolicy"]'),
    },
    payNowBtn: $('button[ng-click="$ctrl.processPayment()"]'),

    fillAdult: function (num, name = testdata.passengers.adult1.name, lastName = testdata.passengers.adult1.lastName) {
        //todo select title
        this.passengerDetails.getPassengerNameInput(num).sendKeys(name);
        this.passengerDetails.getPassengerLastNameInput(num).sendKeys(lastName);
    },
    fillChild: function (num, name = testdata.passengers.child.name, lastName = testdata.passengers.child.lastName) {
        this.passengerDetails.getPassengerNameInput(num).sendKeys(name);
        this.passengerDetails.getPassengerLastNameInput(num).sendKeys(lastName);
    },
    fillTwoAdultsAndOneChildData: function () {
        var adult1=testdata.passengers.adult1;
        this.fillAdult(0,adult1.name,adult1.lastName);
        this.fillAdult(1,testdata.passengers.adult2.name,testdata.passengers.adult2.lastName);
        this.fillChild(2,testdata.passengers.child.name,testdata.passengers.child.lastName);
    },


};




