'use strict';
var EC = protractor.ExpectedConditions;
var timeout=10000;
module.exports = {
    page: this,
    firstFlight: $('.hide-mobile flights-table-price .flights-table-price'),
    fareFamilyPlus: $('.fare-select.family-plus'),
    fareEconomy: $('.fare-select.economy'),
    farePlus: $('.fare-select.leisure-plus'),
    continueBtn: $('#continue'),

    searchFlights: function (departure, destination, day, month, year, adults, child) {
        var baseUrl='https://www.ryanair.com/ie/en/';
        var targetUrl=baseUrl+'booking/home/' + departure + '/' + destination + '/' + year + '-' + month + '-' + day + '//' + adults + '/0/' + child + '/0';
        browser.get(targetUrl);
        return browser.wait(EC.elementToBeClickable(this.firstFlight), timeout,"Flights were not loaded");
    },
    chooseAnyFlight: function () {
        this.firstFlight.click();
        browser.wait(EC.elementToBeClickable(this.farePlus), timeout,"Fares were not loaded");
        return this.farePlus.click();
    }
};

