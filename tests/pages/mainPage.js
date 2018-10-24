'use strict';


module.exports = {

    page: this,
    signInBtn: $('#myryanair-auth-login'),
    loginModal: {
        emailInput: $('.signup-modal input[name="emailAddress"]'),
        passInput: $('.signup-modal input[name="password"]'),
        logInBtn: $('.signup-modal button[class="core-btn-primary"]')
    },
    doLogin: function (email, pass) {
        this.signInBtn.click();
        this.loginModal.emailInput.sendKeys(email);
        this.loginModal.passInput.sendKeys(pass);
        return this.loginModal.logInBtn.click();
    },

    email:
        'testryanair@mail.com',
    password:
        'T3st.ryanair',


    go:
        function (site) {
            browser.get(site);
        },
    searchFlights: function (departure, destination, day, month, year, adults, child) {
        var baseUrl='https://www.ryanair.com/ie/en/';
        var targetUrl=baseUrl+'booking/home/' + departure + '/' + destination + '/' + year + '-' + month + '-' + day + '//' + adults + '/0/' + child + '/0';
        browser.get(targetUrl);
        browser.waitForAngular();
    },


};




