
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

/*
প্রাকটিস চ্যালেঞ্জ-৩ টা: 

১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
*/


const leapYear = (year) => (year%4==0 && year%100!=0) || (year%400==0 && year%100==0);

const year = 2023;

// console.log(leapYear(year));

/*
 

২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

*/


    const evenOrOdd = (year) => year%2==0 ;

    // console.log(evenOrOdd(23));


/*
 

৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

*/

    const hourToMin = (hour) => hour*60 ;

    // console.log(hourToMin(5));

/*

৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।

*/

    const hourToSeconds = (hour) => hour*3600;

    // console.log(hourToSeconds(4));

/*
Practice Problem 1
    Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
*/


        // console.log(hourToMin(5));

/*
Practice Problem 2

Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
*/

    const findLeapYear = (years) => {
        let leapYear = [];
        for (const year of years) {
            if((year%4==0 && year%100!=0) || (year%400==0 && year%100==0))
                leapYear.push(year);
        }
        return leapYear;
    }

    const years = [2023,2024,2025,2028,2030];

    // console.log(findLeapYear(years))


/*
Practice Problem 3

Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/


    const findOddSum = (nums) => {
        let oddSum = 0 ;
        for (const num of nums) {
            if(num%2==1)
                oddSum += num;
        }

        return oddSum;
    }

    const nums = [5, 7, 8, 10, 45, 30];
    
    const sum = findOddSum(nums);

    // console.log(sum);