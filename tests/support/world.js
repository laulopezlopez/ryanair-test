(function () {
    'use strict';
    var {setWorldConstructor} = require('cucumber');
    const protractor = require('protractor');
    const errors = require('./errors.js');
    var {setDefaultTimeout} = require('cucumber');

    setDefaultTimeout(60 * 1000);

    function CustomWorld({attach}) {

        var chai = require('chai'),
            expect = chai.expect,
            chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);

        const EC = protractor.ExpectedConditions;
        const defaultCustomTimeout = 10000;
        const customTimeout = browser.params.customTimeout || defaultCustomTimeout;

        this.attach = attach;

        this.goTo = function (url) {
            return browser.get(url);
        };

        this.waitForURLToLoad = function (url) {
            return browser.wait(EC.urlContains(url), customTimeout, `"${url}" ${errors.URL_LOADED}`);
        };

        this.waitForDisplayed = function (elementSelector) {
            return browser.wait(EC.presenceOf(elementSelector), customTimeout, errors.ELEMENT_PRESENT);
        };
        this.waitForNotDisplayed = function (elementSelector) {
            return browser.wait(EC.not(EC.presenceOf(elementSelector), customTimeout, errors.ELEMENT_PRESENT));
        };
        this.waitForNotVisible= function (elementSelector) {
            return browser.wait(EC.not(EC.visibilityOf(elementSelector), customTimeout, errors.ELEMENT_PRESENT));
        };

        this.clickOn = function (elmnt) {
            this.waitForDisplayed(elmnt);
            browser.wait(EC.elementToBeClickable(elmnt), customTimeout, `"${elmnt}" ${errors.CLICKABLE}`);
            return elmnt.click();
        };

        this.clickIfPresent = function (elmnt) {
            var page=this;
            return elmnt.isPresent().then(function (isPresent) {
                if (isPresent) {
                    return page.clickOn(elmnt);
                }
            });
        };

        this.verifyPresent = function (elmnt, errorMsg) {
            return expect(elmnt.isPresent()).to.eventually.equal(true, errorMsg);
        };

        this.verifyNotPresent = function (elmnt, errorMsg) {
            return expect(elmnt.isPresent()).to.eventually.equal(false, errorMsg);
        };

        this.verifyDisplayed = function (elmnt, errorMsg) {
            return expect(elmnt.isDisplayed()).to.eventually.equal(true, errorMsg);
        };

        this.verifyNotDisplayed = function (elmnt, errorMsg) {
            return expect(elmnt.isDisplayed()).to.eventually.equal(false, errorMsg);
        };

        this.verifyText = function (elmnt, text, errorMsg) {
            return expect(elmnt.getText()).to.eventually.equal(text, errorMsg);
        };

        this.verifyNotText = function (elmnt, text, errorMsg) {
            return expect(elmnt.getText()).not.to.eventually.equal(text, errorMsg);
        };

    }

    setWorldConstructor(CustomWorld);
}());