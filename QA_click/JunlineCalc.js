describe("Junline Calculator Test",function(){

function additon(a,b){
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();

}
it("Calcultor Test",function(){

browser.get("http://juliemr.github.io/protractor-demo/")

element(by.xpath("//h2[@class='ng-binding']")).getText().then(function(text){
additon(3,4);
additon(3,6);
additon(6,6);
additon(87,6);
additon(1,6);
//console.log(text)
//expect(parseInt(text)).toEqual(7);


});

//First way to get the get the data
// element(by.xpath("//tr[@class='ng-scope']//td[3]")).getText().then(function(text){

// console.log(text)
// //expect(parseInt(text)).toEqual(7);
// browser.sleep(5000)

// });

// //Second way to get the get the data using element chain locator
// element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text)
// {

// console.log(text);
// });


element.all(by.repeater("result in memory")).each(function(item)
{
item.element(by.css("td:nth-child(3)")).getText().then(function(text)
{

console.log(text);
});

});

});


});







