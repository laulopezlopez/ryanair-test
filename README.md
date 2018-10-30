# Ryanair-test

The main object of this project is to create a testing environment for the ryanair website and automate the following feature:
```
    Given I make a booking from "DUB" to "SXF" on 12/03/2019 for 2 adults and 1 child
    When I pay for booking with card details "5555 5555 5555 5557", "10/18" and "265"
    Then I should get payment declined message
```
### Features
* All scripts written with > Javascript & Cucumber: since the ryanair website is an Angular.JS application this was the logical choice because it has built-in methods that listen for Angular’s JavaScript callbacks making everything easier.
* Page Object design pattern implementation.
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc. //TODO: implement
* Screenshots on failure feature scenarios.

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.


#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install
```
* All the dependencies

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
```

* Then you should start your selenium server!
```
npm run webdriver-start
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

#### HTML Reports
Currently this project has been integrated with [protractor-multiple-cucumber-html-reporter-plugin](https://github.com/wswebcreation/protractor-multiple-cucumber-html-reporter-plugin), which is generated in the `.tmp/reports` folder when you run `npm test`.
They can be customized according to user's specific needs.
