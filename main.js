

const marks = 20;

if (marks >= 80){
    console.log("Grade is A");
}else if (marks >=70){
    console.log("Grade is B");
}else if (marks >=60){
    console.log("Grade is c");
}else {
    console.log("failed");
}





const age = 19;

if(age >= 60){
    console.log("you are senior");
    console.log("you are eligible for visa");
    
}else if (age >= 20){
      console.log("you are young");
      console.log("you are eligible for visa");
    
}else{
    console.log("you are child");
    console.log("you are not eligible for visa");
}


// use the function in javascrpit
console.log(1);
console.log(2);
console.log(3);

console.log(1);
console.log(2);
console.log(3);

console.log(1);
console.log(2);
console.log(3);
console.log("+++++++++++++++++++++++++++++++++++++++");


function myFun(){
    console.log(1);
     console.log(2);
     console.log(3);

}


myFun();
myFun();
myFun();



function CalculateCircumference(r){
    const result = 2 * 3.14 * r;
    console.log("inside the function: " +  r + " is " +  result);
    return result;
}

CalculateCircumference(54);
CalculateCircumference(24);
CalculateCircumference(534);






//function
function add(numberOne = 0, numberTwo = 0) {
    console.log("numberOne: ", numberOne);
    console.log("numberTwo: ", numberTwo);
    const result = numberOne + numberTwo;
    return result;
    }
    console.log(add(5, 2,));
    console.log(add(1, 2));
    console.log(add(3));
    console.log(add());





// convert Temperature celsius to farhenheit
function getTemperature(c){
    const result = 9/5 * c + 32 ;
    console.log("convert temp celsius to fahrenheit: " +  c + " is " +  result);
    return result;
}

getTemperature(96);
getTemperature(24);
getTemperature(34);



// convert hight inch to centimeters
function personHight(h) {
    const result = 2.54 * h ;
    console.log("convert hight inch into centimeters: " + h + " is " + result );
    return result;

    
}

personHight(65);


//convert kliometer to meter

function kliometer(k) {
    const result = 1000 * k;
    console.log("convert kliometer to meter "+   k + " is " + result);
    return result;
    
}
kliometer(2);
kliometer(22);
kliometer(25);
kliometer(28);



//convert meter to kliometer

function meter(m) {
    const result = m / 1000;
    console.log("convert  meter to kliometer  "+   m + " is " + result);
    return result;
    
}
meter(1000);
meter(100);
meter(55.54);





// if else statment

const english = 80;
const urdu = 80;
const math = 40;

if (english == 80 && urdu == 80 && math == 80){
    console.log("your are passed");
}
else{
    console.log("your are falid");
}



