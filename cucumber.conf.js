exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'tests/features/payments.feature'
    ],
    cucumberOpts: {
        require: ['tests/step_definitions/*.js',
            'tests/support/*.js',],
        tags: [],
        strict: true,
        dryRun: false,
        compiler: [],
        keepAlive: false
    },

    onPrepare: function () {
        browser.manage().window().maximize();
    }
};