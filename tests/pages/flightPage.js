'use strict';
var EC = protractor.ExpectedConditions;

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
        return browser.wait(EC.visibilityOf(this.firstFlight), 10000);
    },
    chooseAnyFlight: function () {
        this.firstFlight.click();
        browser.wait(EC.visibilityOf(this.farePlus), 5000);
        this.farePlus.click();
        browser.wait(EC.elementToBeClickable(this.continueBtn), 5000);
        return this.continueBtn.click();
    }
};

