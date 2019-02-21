var CustomerAccountPage=function(){

   
    this.Transcations_Money=function(){
        element(by.xpath("//button[contains(text(),'Transactions')]")).click();
    };

    this.Deposit_Money=function(){
        element(by.xpath("//button[contains(text(),'Deposit')]")).click();
   
    };

    this.Withdrawl_Money=function(){
        element(by.xpath("//button[contains(text(),'Withdrawl')]")).click();
 
    };

    this.Transcations_Money_Function=function(){
        element(by.xpath("//button[contains(text(),'Reset')]")).click();
        element(by.xpath("//button[contains(text(),'Back')]")).click();
        element(by.xpath("//button[@class='btn home']")).click();

        element(by.buttonText("Bank Manager Login")).click();
        return this;

    };

    this.Deposit_Money_Function=function(){
        element(by.xpath("//input[@placeholder='amount']")).sendKeys(10000);
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(5000);
        var depo=element(by.xpath("//span[@class='error ng-binding']")).getText();
        console.log(depo);
        expect(depo).toBe("Deposit Successful");
       
        element(by.xpath("//strong[@class='ng-binding'][1]")).getText().then(function(text){
        console.log(text);
        expect(parseInt(text)).toBe(1004);
        

        });

        element(by.xpath("//strong[@class='ng-binding'][2]")).getText().then(function(text){
        console.log(text);
        expect(parseInt(text)).toBe(10000);

        });

        element(by.xpath("//strong[@class='ng-binding'][3]")).getText().then(function(text){
        console.log(text);
        expect(text).toBe("Dollar");

        });
                return this;
        
    };

    this.Withdrawl_Money_Function=function(){
        element(by.xpath("//input[@placeholder='amount']")).sendKeys(500);
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(5000);
        var withd=element(by.xpath("//span[@class='error ng-binding']")).getText();
        console.log(withd);
        expect(withd).toBe("Transaction successful");

        element(by.xpath("//strong[@class='ng-binding'][2]")).getText().then(function(text){
            console.log(text);
            expect(parseInt(text)).toBe(9500);
    
            });
        return this;
    };
};
module.exports=new CustomerAccountPage();