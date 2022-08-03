
// 13 er Namta 
function eita13ErNamta(num){
    for(var i = 1 ; i<=10 ; i++)
        console.log(i + " x " + num + " = " + num*i);
}

// eita13ErNamta(15);

// upper case ke lower case kore 

const toLower = (name) => name.toLowerCase();

// console.log(toLower("Rakibul Hasan"));

// First name and last name input dile full name dibe 

const fullName = (firstName , lastName) => firstName + " " + lastName ;

// console.log("Hablo", "Kanto");

// Number ke Square korbe

const squareNumber = (number) => number ** 2;

// console.log(squareNumber(5));

// Extra object theke peparoni print korbe

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }
 
//    console.log(pizza.toppings[2])


// PDF problems 

const foo = () => console.log("foo");
const bar = () => console.log("bar");

// foo(bar());
// foo(foo());