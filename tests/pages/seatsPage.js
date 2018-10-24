'use strict';
var EC = protractor.ExpectedConditions;

module.exports = {

    page: this,
    url:'',
    popupBtn: $('.seat-map-prompt-content .core-btn-primary'),
    availableSeats :$$('.seat-click'),
    firstAvailableSeats :$$('.seat-click').get(1),
    reviewSeatsBtn : $('[data-ref="dialog-overlay-footer-ok-btn"]'),
    go:
        function (site) {
            browser.get(site);
        },
    getFirstVisibleSeat : function (){
        return this.availableSeats.filter(function(elem) {
            return  EC.elementToBeClickable(elem);
        }).then(function (items) {
            return items.first().click();
        });
    },
    selectSeats: function (passangers) {
        browser.waitForAngular();
        this.popupBtn.click();
        this.firstAvailableSeats.click();
        return this.reviewSeatsBtn.click();
    },


};




