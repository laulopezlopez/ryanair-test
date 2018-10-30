(function () {
    'use strict';

    var testdata = require('../test_data/data.json');


    module.exports = {

        signInBtn: $('#myryanair-auth-login'),
        cartContinueBtn: $('.cart  button'),
        cartPriceValue: $('.cart .price-total .price-number'),
        loginModal: {
            emailInput: $('.signup-modal input[name="emailAddress"]'),
            passInput: $('.signup-modal input[name="password"]'),
            logInBtn: $('.signup-modal button[class="core-btn-primary"]')
        },
        doLogin: function (email = testdata.login_email, pass = testdata.login_pass) {
            this.signInBtn.click();
            this.loginModal.emailInput.sendKeys(email);
            this.loginModal.passInput.sendKeys(pass);
            return this.loginModal.logInBtn.click();
        },
    };
}());



