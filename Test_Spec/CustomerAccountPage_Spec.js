describe("Validate Customer is able to deposit money",function(){

var depomoney=require("../Pages/CustomerAccountPage");
it("Deposit Money",function(){

depomoney.Deposit_Money();
depomoney.Deposit_Money_Function();

});

it("WithDrawl Money",function(){
    depomoney.Withdrawl_Money();
    depomoney.Withdrawl_Money_Function();
});

it("Transcations of Money",function(){
depomoney.Transcations_Money();
depomoney.Transcations_Money_Function();

});


});