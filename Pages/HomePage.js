var HomePage=function(){

this.loginAsCustomer=function(){

element(by.buttonText("Customer Login")).click();
return require("../Pages/CustomerLoginPage");
};

this.loginAsBankManager=function(){
//element(by.buttonText("Bank Manager Login")).click();
return require("../Pages/BankManagerPage");
};

};
module.exports=new HomePage();