'use strict';


module.exports = {
    indexPage: {
        oneWayLabel: $('[id=lbl-flight-search-type-one-way]'),
    },

    go: function(site) {
        browser.get(site);
    },

    selectOneWay: function() {
        var angular = this.indexPage;
        angular.oneWayLabel.click();
    },

    fillDepartureAirport: function(name) {
        var angular = this.indexPage;
       // angular.departureAirport.sendKeys(name);
    }
};