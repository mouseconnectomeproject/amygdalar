const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const request = require("request");
const By = webdriver.By;
const screen = {
    width: 640,
    height: 480
  };
const driver = new webdriver.Builder()
    .forBrowser('chrome').setChromeOptions(new chrome.Options()
        .headless().windowSize(screen)
        .addArguments('--no-sandbox')
    )
    .build();
const sites = ["https://mouseconnectomeproject.github.io/amygdalar", "https://mouseconnectomeproject.github.io/amygdalar/development"];
let errorCode = 0;


function checkResponseCode(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, body) => {
            resolve(response.statusCode);
        });
    });
}

async function testIndex() {
    try {  
        for(var i=0; i<sites.length; i++){
            let url = sites[i];
            console.info(url);

            await driver.get(url);

            await checkResponseCode(url).then(function(result) {
                if(result !== 200){
                    console.info("The link "+url+" returns "+result);
                    errorCode = 1;
                };
            });
        };
    }
    catch (e) {
        console.error(e);
    }
    finally {
        if(driver !== null){
            await driver.quit();
        }
        if(errorCode==0){
            console.info("Tests ran succesfully.");
        }
        process.exit(errorCode);
    }
}

async function testWiringDiagram() {
    try {  
        for(var i=0; i<sites.length; i++){
            let url = sites[i]+"/wiringdiagram";
            console.info(url);

            await driver.get(url);

            await checkResponseCode(url).then(function(result) {
                if(result !== 200){
                    console.info("The link "+url+" returns "+result);
                    errorCode = 1;
                };
            });
        };
    }
    catch (e) {
        console.error(e);
    }
    finally {
        if(driver !== null){
            await driver.quit();
        }
        if(errorCode==0){
            console.info("Tests ran succesfully.");
        }
        process.exit(errorCode);
    }
}

testIndex();
testWiringDiagram();