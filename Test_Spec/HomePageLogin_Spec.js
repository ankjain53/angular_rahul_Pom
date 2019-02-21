var object= require("../Json/object.json");
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';


describe("HomePage",function(){

var home=require("../Pages/HomePage");
var fun=require("../Util/CommonUtil.js");
it("Customer Login Page",function()
{
  browser.get(object.HomePageUrl);
  browser.driver.manage().window().maximize();
  logger.info("Browser Opened"); 
  var Tittle=fun.GetPageTittle();
  console.log(Tittle);
  expect(Tittle).toBe("Protractor practice website - Banking App");
  logger.info("Home page Tittle Validation is sucesfull");
 home.loginAsCustomer();
});


});