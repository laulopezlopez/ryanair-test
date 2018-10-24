'use strict';


module.exports = {

    page: this,
    signInBtn: $('#myryanair-auth-login'),
    loginModal: {
        emailInput: $('.signup-modal input[name="emailAddress"]'),
        passInput: $('.signup-modal input[name="password"]'),
        logInBtn: $('.signup-modal button[class="core-btn-primary"]')
    },
    doLogin: function (email=this.email, pass=this.password) {
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


};




