(function () {
    'use strict';

    module.exports = {
        popupBtn: $('.seat-map-prompt-content .core-btn-primary'),
        firstAvailableSeat: $$('.seat-row-seat:not(.reserved):not(.selected):not(.extra-leg) .seat-click').get(0),
        availableSeats: $$('.seat-row-seat:not(.reserved):not(.selected):not(.extra-leg) .seat-click'),
        addFastTrackBtn: $('.fasttrack-popup__right button'),
        seatMapHeader: $('.seat-map-header'),
        footerBtn: $('[data-ref="dialog-overlay-footer-ok-btn"]'),

        selectSeats: function (context, passengers) {
            context.clickOn(this.popupBtn);
            context.waitForNotDisplayed(this.popupBtn);
            for (var i = 0; i < passengers; i++) {
                this.scrollAndClickSeat(this.firstAvailableSeat);
            }
            context.clickOn(this.footerBtn);
            context.waitForNotDisplayed(this.availableSeats);
            context.clickOn(this.footerBtn);
            return context.clickOn(this.addFastTrackBtn);
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
}());



