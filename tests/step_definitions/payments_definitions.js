var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var indexPage = require('../pages/indexPage.js');

var {Given, When, Then, setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);


Given(/^I make a booking from “DUB” to “SXF” on 12\/03\/2017 for (\d+) adults and (\d+) child$/, function (adults, child, callback) {
    indexPage.go('https://www.ryanair.com/es/es/');
    indexPage.selectOneWay();
    callback();
  //  indexPage.fillDepartureAirport('Madrid');
});
