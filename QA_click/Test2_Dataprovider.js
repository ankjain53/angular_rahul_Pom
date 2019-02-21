var using = require('jasmine-data-provider');
var d=require("../QA_click/DataFile.js")

describe("Login into QA Click",function(){

    using(d.parentdata, function (data, description)
    {
    it("Fill the Form to onboard metbod",function(){
    
    browser.get("https://qaclickacademy.github.io/protocommerce/");
   
    element(by.xpath("//div[@class='form-group']//input[@name='name']")).sendKeys(data.name);
    element(by.name('email')).sendKeys(data.email);
    element(by.id('exampleInputPassword1')).sendKeys(data.Password);
    element(by.id('exampleCheck1')).click();
    element(by.xpath("//select[@id='exampleFormControlSelect1']//option[contains(text(),'Female')]")).click();
    element(by.id('inlineRadio1')).click();
    element(by.xpath("//input[@name='bday']")).sendKeys(data.DOB);
    element(by.buttonText('Submit')).click();
    
    element(by.css("div[class*='success']")).getText().then(function(text){
    console.log(text);
    expect(text).toContain("Success!");
    element(by.xpath("//a[@class='close']")).click();
    
    });
     
    });

    });
    
    });