var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

var fs = require('fs');
function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

describe("Login into QA Click",function(){

it("Fill the Onboarding Form",function(){

browser.get("https://qaclickacademy.github.io/protocommerce/");

element(by.xpath("//div[@class='form-group']//input[@name='name']")).sendKeys("Student 1");
element(by.name('email')).sendKeys("test@gmail.com");
element(by.id('exampleInputPassword1')).sendKeys("test");

//For taking screesnhot at specific point
browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'exception.png');
});

element(by.id('exampleCheck1')).click();
element(by.xpath("//select[@id='exampleFormControlSelect1']//option[contains(text(),'Female')]")).click();
element(by.id('inlineRadio1')).click();
element(by.xpath("//input[@name='bday']")).sendKeys("15-11-1984");
element(by.buttonText('Submit')).click();

browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'exception1.png');
});



element(by.css("div[class*='success']")).getText().then(function(text){
    
    logger.info(text);
expect(text).toContain("Success!");
element(by.xpath("//a[@class='close']")).click();
browser.sleep(2000);
});
});

it("Validation of error message",function(){
    element(by.xpath("//div[@class='form-group']//input[@name='name']")).clear();
    browser.sleep(2000);
    element(by.xpath("//div[@class='form-group']//input[@name='name']")).sendKeys("c");
    element(by.xpath("//div[@class='alert alert-danger']")).getText().then(function(text){
    logger.info(text);
    expect(text).toContain("2 characters");

    });





   
});

});

