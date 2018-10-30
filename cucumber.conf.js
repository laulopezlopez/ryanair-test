exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [{
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: ['disable-infobars']
        }
    }],
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
        options:{
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};