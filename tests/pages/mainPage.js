'use strict';
// The require statement will import your JSON file into the json variable
var testdata = require('../test_data/data.json');


module.exports = {

    page: this,
    signInBtn: $('#myryanair-auth-login'),
    loginModal: {
        emailInput: $('.signup-modal input[name="emailAddress"]'),
        passInput: $('.signup-modal input[name="password"]'),
        logInBtn: $('.signup-modal button[class="core-btn-primary"]')
    },
    doLogin: function (email=testdata.login_email, pass=testdata.login_pass) {
        this.signInBtn.click();
        this.loginModal.emailInput.sendKeys(email);
        this.loginModal.passInput.sendKeys(pass);
        return this.loginModal.logInBtn.click();
    },
    headerCheckOutBtn :$('#booking-selection [data-ref="header-checkout-btn"]'),




    go:
        function (site) {
            browser.get(site);
        },


};




