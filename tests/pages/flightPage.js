'use strict';


module.exports = {
    page: this,
    firstFlight: $('.hide-mobile flights-table-price .flights-table-price'),
    fareFamilyPlus: $('.fare-select.family-plus'),
    fareEconomy: $('.fare-select.economy'),
    farePlus: $('.fare-select.leisure-plus'),
    continueBtn: $('#continue'),

    chooseAnyFlight: function () {
        this.firstFlight.click();
        this.farePlus.click();
        return this.continueBtn.click();
    }
};

