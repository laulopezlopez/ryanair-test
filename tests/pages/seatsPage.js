'use strict';
var EC = protractor.ExpectedConditions;
var timeout = 10000;

module.exports = {

    page: this,
    url: '',
    popupBtn: $('.seat-map-prompt-content .core-btn-primary'),
    availableSeats: $$('.seat-row-seat.standard:not(.reserved):not(.selected) .seat-click'),
    firstAvailableSeats: $$('.seat-row-seat.standard:not(.reserved):not(.selected) .seat-click').get(0),
    lastAvailableSeats: $$('.seat-row-seat.standard:not(.reserved):not(.selected) .seat-click').last(),
    insuranceAcceptBtn: $('#ngdialog3 button'),
    header: $('.seat-map-header'),

    footerBtn: $('[data-ref="dialog-overlay-footer-ok-btn"]'),

    go:
        function (site) {
            browser.get(site);
        },

    selectSeats: function (passangers) {
       //Todo: refactor this function. It might be a scroll issue
        browser.wait(EC.elementToBeClickable(this.popupBtn), timeout, "Modal in seats selection is not clickable");
        this.popupBtn.click();
        browser.wait(EC.not(EC.presenceOf(this.popupBtn)));
        this.clickSeat(80);
        this.clickSeat(81);
        this.clickSeat(82);

        this.footerBtn.click();
        browser.wait(EC.not(EC.presenceOf(this.availableSeats)));
        this.footerBtn.click();
        browser.wait(EC.elementToBeClickable(this.insuranceAcceptBtn), timeout, "insuranceAcceptBtn are not Clickable");
        this.insuranceAcceptBtn.click();
        return browser.wait(EC.not(EC.presenceOf(this.insuranceAcceptBtn)));
    },

    clickSeat(num) {
        browser.wait(EC.elementToBeClickable(this.availableSeats.get(num)), timeout, "Seats not loaded");
        this.availableSeats.get(num).click();
    }

};




