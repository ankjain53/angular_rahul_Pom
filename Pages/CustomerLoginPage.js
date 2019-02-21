var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

var CustomerLoginPage=function(){

this.CustomerLogin=function(){

element(by.xpath("//select[@id='userSelect']")).click();
element(by.xpath("//option[@value='2']")).click();
element(by.xpath("//button[@type='submit']")).click();
browser.sleep(2000);
var namecheck=element(by.xpath("//span[@class='fontBig ng-binding']")).getText();
console.log(namecheck);
expect(namecheck).toBe("Harry Potter");
logger.info("Name Validation is sucess on Customer Login Page");
return require("../Pages/CustomerAccountPage");

};

};

module.exports=new CustomerLoginPage();