var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

describe("Login into Shopping page",function(){
    var FinalAmount,amount,amount1;
    var total = 0;
    
      function selectItems(product) 
      {

        element.all(by.tagName("app-card")).each(function(item)
        {
            item.element(by.css("h4[class='card-title']")).getText().then(function(text)
            {
             
                if(text==product)
                {
                    item.element(by.css("button[class='btn btn-info']")).click();
                }                                      
            });
                      
        });
         
      }

      function RemoveProduct(rproduct)
      {
        element.all(by.css("tbody tr")).each(function(item1, i)
        {
            if(i < 3) 
            {
                item1.element(by.css("td:nth-child(1) div div h4 a")).getText().then(function(text)
                {
                   if (text==rproduct)
                   {
                   item1.element(by.buttonText('Remove')).click();

                   }

                });
            }
                        
        });

      }

      function checkoutproduct()
      {
        total = 0;
        element.all(by.tagName("tbody tr")).each(function(item)
        {
            
                item.element(by.css("td:nth-child(4)")).getText().then(function(text)
                {
                    
                    if (text == 'Total')
                     {
                                          

                    } else if (text == 'Continue Shopping') 
                    {

                    }
                    else 
                    {
                        amount=text.substring(3,9);
                      //  console.log("Final Price of Product is"+amount);   
                        total = +total + +amount;
                                                          
                    }
                   
                logger.info("Final Amount of all Product in cart is"+total);                 
                });
                     
        });
       
      }

      function AmountValidation(){

        element(by.css('tbody tr td.text-right h3 strong')).getText().then(function(text)
        {
         amount1=text.substring(3,13);
         logger.info("Total Amount of all item in cart is"+amount1);
         expect(parseInt(amount1)).toBe(total);
         
       });
      }

    it("Purchase Product from shoping website",function()
    {
      //  browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.linkText('Shop')).click();
        selectItems("Samsung Note 8");
        selectItems("iphone X");
        selectItems("Nokia Edge");
        element(by.xpath("//a[@class='nav-link btn btn-primary']")).getText().then(function(text)
        {
            logger.info("Total no of checkout item is" +text);
            var result=text.slice(10,13);
            logger.info("Final Checkout item is"+result);
            element(by.partialLinkText('Checkout')).click();
            browser.sleep(2000);
           
        });
       
    });

    it("Checkout the Product from the list",function(){

        checkoutproduct();
       

    });

    it("Validation of Total Amount of item in cart",function()
    {
        AmountValidation();                                  
      
    });

    it("Remove Product from the Cart",function()
    {
        RemoveProduct("iphone X");
        logger.info("Product has been sucesfully removed from cart");
        checkoutproduct();
        AmountValidation();
        logger.info("All items are sucesfully validated and are ready for checkout");
    element(by.xpath("//button[contains(text(),'Checkout')]")).click();   
    // element(by.id('country')).sendKeys("India");

    browser.actions().mouseMove(element(by.id("country")).sendKeys("India")).perform();
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){

    browser.sleep(5000);
    });
      


browser.sleep(5000);
 //  element(by.css("div #checkbox2")).click();
    element(by.buttonText('Purchase')).click();
    element(by.xpath("//div[@class='alert alert-success alert-dismissible']")).getText().then(function(msg){
    
    expect(msg).toContain("Thank");
    element(by.xpath("//a[@class='close']")).click();
    logger.info("Sucess message has been closed");
browser.sleep(3000);


    });

    });


});