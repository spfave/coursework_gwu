// 'this' scope information withing a function and object
// https://blog.kevinchisholm.com/javascript/context-object-literals/#:~:text=In%20JavaScript%2C%20%E2%80%9Ccontext%E2%80%9D%20refers%20to%20an%20object.%20Within,the%20object%20that%20the%20function%20is%20executed%20in.

// Console log Document Object Model window object (browser window)
console.log(this);

/* 
Create function helloThis
The helloThis function console logs the DOM object model
*/
function helloThis() {
  console.log("Inside this function, this is " + this);

  // console.log(this); // for testing
}

helloThis();

/* 
Create child object with properties: age and function ageTenYears 
The ageTenYears function console logs the child object's age plus ten years
*/
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10); // print 20
    // console.log(this); // for testing
  },
};

child.ageTenYears();

/* 
Create investor object with properties: name and investment
investment property is itself an object with properties: initialInvestment and function investmentGrowth
The investmentGrowth function console logs the result of the initial investment times a return rate
*/
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
      // console.log(this); // for testing
    },
  },
};

investor.investment.investmentGrowth();
