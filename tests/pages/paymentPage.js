(function () {
    'use strict';
    var testdata = require('../test_data/data.json');
    module.exports = {

        signInBtn: $('#myryanair-auth-login'),
        paymentDeclinedMessage: $('prompt.error'),
        passengerElements: $$('.pax-form-element'),
        passengerDetails: {
            getPassengerTitleSelectorOpt: function (num, title) {
                return $('[name="passengerForm' + num + '"] .payment-passenger-title select option[label="' + title + '"]');
            },
            getPassengerNameInput: function (num) {
                return $('[name="passengerForm' + num + '"] .payment-passenger-first-name input');
            },
            getPassengerLastNameInput: function (num) {
                return $('[name="passengerForm' + num + '"] .payment-passenger-last-name input');
            },

        },
        selectOpt: function (nameSelector, opt) {
            return $('select[name="' + nameSelector + '"] option[label="' + opt + '"]');
        },
        contactDetails: {
            phoneNumber: $('input[name="phoneNumber"]')
        },
        paymentDetails: {
            cardNumberInput: $('input[ng-model="$ctrl.cardModel.cardNumber"]'),
            cardTypeSelector: $('[name="cardType"]'),
            expiryMonthSelector: $('selector[name="expiryMonth"] option[label]'),
            expiryYearSelector: $('[name="expiryYear"]'),
            securityCodeInput: $('input[name="securityCode"]'),
            cardHolderNameInput: $('input[name="cardHolderName"]'),
            billingAddressAddressInput: $('input[name="billingAddressAddressLine1"]'),
            billingAddressCityInput: $('input[name="billingAddressCity"]'),
            acceptPolicyCheckbox: $('.cta .core-checkbox-label--icon'),
        },
        payNowBtn: $('button[ng-click="$ctrl.processPayment()"]'),

        fillPassengersDetails: function (context, passengers = testdata.passengers) {
            var page = this;
            return this.passengerElements.count().then(function (nPassengers) {
                for (var i = 0; i < nPassengers; i++) {
                    page.fillPassengerInfo(context, i, passengers[i]);
                }
            });
        },
        fillPassengerInfo: function (context, num, adult = testdata.passengers[0]) {
            context.clickIfPresent(this.passengerDetails.getPassengerTitleSelectorOpt(num, adult.title));
            this.passengerDetails.getPassengerNameInput(num).sendKeys(adult.name);
            this.passengerDetails.getPassengerLastNameInput(num).sendKeys(adult.lastName);
        },

        fillCardDetails: function (card = testdata.cards.card1) {
            var payment = this.paymentDetails;
            payment.cardNumberInput.sendKeys(card.cardNumber.replace(/\s/g, ""));
            this.selectOpt('expiryMonth', card.expiryMonth).click();
            this.selectOpt('expiryYear', card.expiryYear).click();
            this.selectOpt('cardType', card.cardType).click();
            payment.securityCodeInput.sendKeys(card.cvv);
            payment.cardHolderNameInput.sendKeys(card.holdersName);
        },
        fillBillingDetails: function (billingData = testdata.passengers[0].billingData) {
            this.paymentDetails.billingAddressAddressInput.sendKeys(billingData.address);
            this.paymentDetails.billingAddressCityInput.sendKeys(billingData.city);
        },
        fillContactDetails: function (phone = testdata.passengers[0].phone) {
            this.selectOpt('phoneNumberCountry', phone.country).click();
            this.contactDetails.phoneNumber.sendKeys(phone.number);

        },
        checkAcceptPolicy: function () {
            this.paymentDetails.acceptPolicyCheckbox.click();
        },
        createCard: function (cardNumber = testdata.cards.card1.number,
                              expiryMonth = testdata.cards.card1.expiryMonth,
                              expiryYear = testdata.cards.card1.expiryYear,
                              cvv = testdata.cards.card1.cvv,
                              cardType = testdata.cards.card1.cardType,
                              holdersName = testdata.cards.card1.holdersName) {

            var card = {};
            card.cardNumber = cardNumber;
            card.expiryMonth = expiryMonth;
            card.cardType = cardType;
            card.expiryYear = this.validateExpirateYearFormat(expiryYear);
            card.cvv = cvv;
            card.holdersName = holdersName;
            return card;
        },
        validateExpirateYearFormat: function (expiryYear) {
            if (expiryYear.toString().length === 2) {
                return "20" + expiryYear;
            } else {
                return expiryYear;
            }
        }
    };

}());


