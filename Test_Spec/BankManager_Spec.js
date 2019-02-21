describe("Add Customer from the Bank Manager Page",function(){

    var Bank_manager=require("../Pages/BankManagerPage");
    it("Add Customer",function(){

        Bank_manager.AddAsCustomer();
        Bank_manager.AddAsCustomerNew();
   
    
    });
    
    it("Open New Customer Account",function(){

        Bank_manager.OpenAccount();
        Bank_manager.OpenAccountNew();      
             
    });

    it("Verify New Customer Info",function(){
        Bank_manager.NewCustomer();
        Bank_manager.NewCustomerNew();

    });






   });




