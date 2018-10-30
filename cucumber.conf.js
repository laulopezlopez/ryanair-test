exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
        maxInstances: 1,
        chromeOptions: {
            args: ['disable-infobars','--start-maximized']
        }
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'tests/features/*.feature'
    ],
    ignoreUncaughtExceptions: true,
    cucumberOpts: {
        require: ['tests/step_definitions/*.js',
            'tests/support/*.js',],
        tags: [],
        strict: true,
        dryRun: false,
        compiler: [],
        keepAlive: false,
        format: 'json:.tmp/results.json'
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true
        }
    }],
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};