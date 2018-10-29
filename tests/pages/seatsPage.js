'use strict';
var EC = protractor.ExpectedConditions;
var timeout = 10000;

module.exports = {

    page: this,
    url: '',
    popupBtn: $('.seat-map-prompt-content .core-btn-primary'),
    firstAvailableSeat: $$('.seat-row-seat:not(.reserved):not(.selected):not(.extra-leg) .seat-click').get(0),
    availableSeats: $$('.seat-row-seat:not(.reserved):not(.selected):not(.extra-leg) .seat-click'),
    insuranceAcceptBtn: $('#ngdialog3 button'),
    seatMapHeader: $('.seat-map-header'),

    footerBtn: $('[data-ref="dialog-overlay-footer-ok-btn"]'),

    go:
        function (site) {
            browser.get(site);
        },

    waitForPage: function (passangers) {
        return browser.wait(EC.urlContains('/booking/extras/seats'), timeout, "We are not in the page to select seats");
    },


    selectSeats: function (passengers) {
        this.waitForPage();
        browser.wait(EC.elementToBeClickable(this.popupBtn), timeout, "Modal in seats selection is not clickable");
        this.popupBtn.click();
        browser.wait(EC.not(EC.presenceOf(this.popupBtn)));

        for (var i = 0; i < passengers; i++) {
            this.scrollAndClickSeat(this.firstAvailableSeat);
        }

        this.footerBtn.click();
        browser.wait(EC.not(EC.presenceOf(this.availableSeats)));
        this.footerBtn.click();
        browser.wait(EC.elementToBeClickable(this.insuranceAcceptBtn), timeout, "insuranceAcceptBtn are not Clickable");
        this.insuranceAcceptBtn.click();
        return browser.wait(EC.not(EC.presenceOf(this.insuranceAcceptBtn)));
    },

    scrollAndClickSeat: function (element) {
        return this.seatMapHeader.getSize().then(function (size) {
            return browser.executeScript("return arguments[0].offsetTop;", element.getWebElement()).then(function (rect) {
                var scroll = rect - size.height;
                return browser.executeScript("return arguments[0].scrollTop=" + scroll + ";", $('#scrollable')).then(function () {
                    return element.click();
                });

            });

        });


    }

};




