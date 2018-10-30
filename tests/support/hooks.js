

const {After} = require('cucumber');

After(function(scenarioResult) {
  if(scenarioResult.result.status === 'failed'){
        let self = this;
        return browser.takeScreenshot()
            .then(function (screenshot) {
                const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
                self.attach(decodedImage, 'image/png');
            });
   }
});