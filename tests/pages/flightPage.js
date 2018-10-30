(function () {
    'use strict';

    module.exports = {
        baseUrl: 'https://www.ryanair.com/ie/en/',
        firstFlight: $('.hide-mobile flights-table-price .flights-table-price'),
        fareFamilyPlus: $('.fare-select.family-plus'),
        fareEconomy: $('.fare-select.economy'),
        farePlus: $('.fare-select.leisure-plus'),
        continueBtn: $('#continue'),
        spinnerPlane: $('.spinner-plane'),

        searchFlights: function (context, departure, destination, day, month, year, adults, child) {
            var targetUrl = this.baseUrl + 'booking/home/' + departure + '/' + destination + '/' + year + '-' + month + '-' + day + '//' + adults + '/0/' + child + '/0';
            return context.goTo(targetUrl);
        },
        chooseAnyFlight: function (context) {
            context.waitForNotVisible(this.spinnerPlane);
            context.clickOn(this.firstFlight);
            context.waitForNotVisible(this.spinnerPlane);
            return context.clickOn(this.farePlus);
        }
    };

}());