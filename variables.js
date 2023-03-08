//VALUES AND VARIABLES ,OPERATORS AND CONTROL FLOW
//let,const and var are the ways of declaring variables in js


//let firstName = ("Tosin");
//let profession =("student");
//let location = ("yaba");
//let age = 20;


//console.log(firstName);
//console.log(profession);
//console.log(location);
//DATA TYPES  are 8
//number,string,boolean,null,undefined,bigint,symbols,object

         //CONCATENATION
//console.log("my name is " + firstName + ". and i am still " + profession + ". i live in " + location);
//console.log("i am " + 20 + " years old ");

//JS OPERATORS
             //ARITHMETIC OPERATIONS
 //let a = 100;
 //let b = 45;

 //let sum = a + b;
  //let sumElement = document.getElementById('sum');
  //sumElement.innerText = sum;
 //console.log(sum)
 //let difference = a - b;
 // let multiplication = a * b;
 //let division =a / b;


         //MODULO OPERATOR
 //let remainder = a % b;
 //console.log('Remainder of a divided by b equals ' + remainder);
       //EXPONENTIAL OPERATOR  (**)
 //let exponentResult = c ** 3;
 //console.log('the exponent result is ' + exponentResult);
       //INCREMENT (++) & DECREMENT (--) OPERATORS
 //let initialValue = 43;
 //initialValue++; //its the same as initialValue = initialValue +1
 //console.log('value is ' + initialValue);

 //let age = 30;
 //age--;
 //console.log('new age value is '+ age);

         //ASSIGNMENT OPERATOR
 //let x = x + 1//is same as let x++
 //let y = y - 1//is same as let y--

 //let z = z + 6 // is same as let z += 6;
 //let w = w - 6 // is same as let w -= 6;
 //let p = p * 6 // is same as let p *= 6;
 //same for /

          //COMPARISON OPERATOR (<, >, >=, <=, !=, !==, ==, ===)
//LHS- LEFT HAND SIDE
//RHS-RIGHT HAND SIDE
// let groceries = 1000
//groceries > 2000


         //EQUALITY OPERATOR
//let cash = 2000;
//let expenses = 4000;

//console.log( cash == expenses)// checks only value
//console.log( cash === expenses)// checks type and value

         //TERNARY OPERATOR

//let myAge = 17;

//if age is greater than or equals to 18, print 'Eligible to vote'
 //if age is less than 18, print 'Not Eligible to Vote'

// (condition) ? true : false

//(myAge >= 18) ? console.log ( 'Eligible to vote') : console.log('Not Eligible to Vote');

        //LOGICAL OPERATORS

//let nationality = 'Nigerian';

//(myAge >= 18 && nationality === 'Nigerian') ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');
// true && true

//AND operators - &&
// OR Operator - ||

//let WAEC = 'PASS';
//let NECO = 'PASS';

//(WAEC === 'PASS' || NECO === 'PASS') ? console.log('admitted') : console.log('admitted');

      //OPERATOR PRECEDENCE
// the BODMAS of javaScript is called PEMDAS
//Parenthesis, exponent , Multiplication, Division , Addition, substraction.

//const result = (26-2) + 4 / 2
//console.log(result);


       //CONTROL FLOW -(1) CONDITIONAL STATEMENT
           //IF...ELSE

//let myAge = 23;
//let eligibleVoterAge = 18;

//if (condition) {
    //console.log()
//}else {

//}

//if (myAge >= eligibleVoterAge) {
    //output is when condition evaluates to true
   // console.log('Eligible to vote');
//} else {
    //output is when condition evaluates to false
   // console.log('Not eligible to vote');
//}
       //IF /ELSE IF
//if (condition){
//logical and ternary can be used here ( <,>,>=)
//console.log('the result')
//}else if (condition){
//logical can be used here ( <,>,>=)
//console.log('the result')
//}else{
    //output is when  all conditions evaluates to false
    //console.log('');
//}

           

         // (2) SWITCH CASE-logical and ternary and comaprison  not advised,instead equality and assignment is used here
//let studentGroup = 'result'

//switch (studentGroup) {
    //case 'SCIENCE' :
       // console.log('type the subjects here');
        //break;
        //repeat the same thing from case
        //the last can be default
        //default :
        //console.log('');
        //break;
//}

             //  (3) LOOP
/**
 * for loop
 * while loop
 * do while loop
 */

//FOR LOOP
/**
 * let index = 0; // initial expression 
 * index < array.length; // condition 
 * index++ // update to initial expression
 */

//for (let index = 0; index < array.length; index++) {
   // const element = array[index];
    
//} //i.e
//for (initialExpression; condition; expressionUpdate (increament or decreament)) {
    // for loop body;
    
//}
// e.g Log out numbers 1 - 100

//for( let index = 1; index <= 100 ; index++) {
    //console.log(index);
//}
// or index < 101
// log out 'i love javaScript' 7 times
//for (let index = 1; index < 8; index++) {
   // console.log( 'i love javaScript');
    
//}
//log out the sum of numbers from 1 to 5
// console.log(1 + 2 + 3 + 4 +5)

//let sum = 0;
//for (let index = 1; index <= 5 ; index++) {
    //sum += index // sum = sum + index;    
//}console.log( "sum is " + sum);
//this can also be used to find the sum of positive numbers less than 20

        //WHILE LOOP
        //while (condition) {
            //console.log(initialNumber);
            //initialNumber++
       // }
        //Log out number 1-5
        //let initialNumber = 1;
        //let limit = 6; //or limit = 5 then condition will be <=5
        //while (initialNumber < limit) {
            //console.log(initialNumber);
            //initialNumber++;
        //}

        //log out the sum of positive numbers less than 20
        //let sum = 0;
        //let num = 0;
        //while ( num < 20 ) {
           // sum += num;
           // num++
        //}console.log(sum);

           //DO WHILE
           //
           //do {
            //statement you want to execute
          // } while (condition);

           // log out the sum of numbers between 10 and 20
           //let  number = 11;
           //let sumOfNumbers = 0;
           
           //do {
            //sumOfNumbers  += number
            //number ++;
          // } while (10 < 20);

           //console.log(sumOfNumbers)

           /**
            * whilevloops check condition first before executing what is in the loop body.
            * do..while loops execute what is in the loop body first before checking the condition
            */

           //BREAK AND CONTINUE

           /**
            * BREAK will stop the execution of a loop
            * CONTINUE will skip the execution of loop and move to the next
            */
           //e.g fIND THE SUm of positive nubers btw 10 and 20.
           //Break when number is greater than 15
            //let sumNumbers = 0;
            //let number = 10;

            //while (number < 20 ){
                //sumNumbers += number;
                //number++;
                //if ( number > 15 ){
                    //break;
                //}
            //}
           // console.log(sumNumbers)
            
            //for continue
            //for ( let i =1; i <=5; i++) {
                //you want to skip 4 
                //if ( 1 == 4) {
                    //continue;
                //}
                //console.log(i);
            //}