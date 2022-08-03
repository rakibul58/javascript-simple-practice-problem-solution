
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
/************* 1 ******************
 * Write a function called foo() which prints “foo” and a function called bar() which prints 
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call 
the foo() to see the output.
*/
const foo = () => console.log("foo");
const bar = () => console.log("bar");
// foo(bar());
// foo(foo());

/************ 2 ******************
 *Write a function called make_avg() which will take an three integers and return the 
average of those values.*/ 

const make_avg = (num1 , num2 , num3) => (num1 + num2 + num3)/3;

// console.log(make_avg(13,14,15));

/* 3) Challenging: Write a function called make_avg() which will take an array of integers and 
the size of that array and return the average of those values.
*/

const arr_avg = (arr , len) => arr.reduce((a,b)=>a+b,0)/len;

// console.log(arr_avg([13,14,15],[13,14,15].length));

// 4) Write a function called odd_even() which takes an integer value and tells whether this 
// value is even or odd. You need to do it in 4 ways: 
// ● Has return + Has parameter
// ● No return + Has parameter

// Has return + Has parameter

const odd_even = (num) => {
    if (num%2==0) {
        return "even";
    } else {
        return "odd";
    }
}

// console.log(odd_even(4));

// ● No return + Has parameter

const odd_even2 = (num) => {
    if (num%2==0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

// odd_even2(422);

/*5) You are in a hurry to go to your school on time. But when you are crossing the road, the 
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in 
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a 
variable called signal. Its value can be green, yellow or red & we will get different activities as 
output depending on the variable. So, hurry up.*/

var signal = "yellow";

switch (signal) {
    case "red":
        // console.log("Stop");
        break;
    case "yellow":
        // console.log("Wait");
        break;
    case "green":
        // console.log("Go");
        break;

    default:
        break;
}
