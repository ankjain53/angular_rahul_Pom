var BankManagerPage=function(){

    this.AddAsCustomer=function(){

        element(by.buttonText("Add Customer")).click();
    };

    this.OpenAccount=function(){
        element(by.buttonText("Open Account")).click();
    };

    this.NewCustomer=function(){
        element(by.buttonText("Customers")).click();
    };

    this.AddAsCustomerNew=function(){

        element(by.model("fName")).sendKeys("Test customer 1");
        element(by.model("lName")).sendKeys("JIO");
        element(by.model("postCd")).sendKeys("400708");
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(2000);
        browser.switchTo().alert().getText().then(function(text)
        {
        console.log(text);
        expect(text).toBe("Customer added successfully with customer id :6");
        browser.switchTo().alert().accept();
        console.log("Alert Accepted Sucesfully")
        });
        
    };

    this.OpenAccountNew=function(){
        element(by.xpath("//select[@id='userSelect']/option[@value='2']")).click();
        element(by.xpath("//select[@id='currency']/option[@value='Pound']")).click();
        element(by.xpath("//button[@type='submit']")).click();
        browser.switchTo().alert().getText().then(function(text)
        {
        console.log(text);
        expect(text).toBe("Account created successfully with account Number :1016");
        browser.switchTo().alert().accept();
        console.log("Open Account Alert Accepted Sucesfully");
        });
    };


    this.NewCustomerNew=function(){
        element(by.model("searchCustomer")).sendKeys("Harry");
        element(by.xpath("//td[@class='ng-binding'][1]")).getText().then(function(text){
            console.log(text);
            expect(text).toBe("Harry");
            console.log("Customer Info Verfied sucesfully");
        });

        element(by.buttonText("Delete")).click();
        console.log("Customer Info Deleted sucesfully");


    };

};
module.exports=new BankManagerPage();