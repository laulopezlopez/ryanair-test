# Ryanair-test

The main object of this project is to create a testing environment for the Ryanair website and automate the following feature:
```
    Given I make a booking from "DUB" to "SXF" on 12/03/2019 for 2 adults and 1 child
    When I pay for booking with card details "5555 5555 5555 5557", "10/18" and "265"
    Then I should get payment declined message
```
### Features
* All scripts written with Javascript (Protractor) (since website to test is an Angular.JS application this was the logical choice because it has built-in methods that listen for Angular’s JavaScript callbacks making everything easier)
* BDD implementation using Cucumber
* Page Object design pattern implementation.
* HTML Reports
* Screenshots on failed scenarios.

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome browser installed.

2.WebDriver-Manager installed globally in the system (since directConnect still presents some issues)
```
npm install -g webdriver-manager
```

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run on a terminal/command prompt the following command to install all the dependencies
```
npm install
```


#### Run Scripts

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm run e2e
```

#### HTML Reports
Currently this project has been integrated with [protractor-multiple-cucumber-html-reporter-plugin](https://github.com/wswebcreation/protractor-multiple-cucumber-html-reporter-plugin), which is generated in the `.tmp/reports` folder when you run `npm test`.
They can be customized according to user's specific needs.
