

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

