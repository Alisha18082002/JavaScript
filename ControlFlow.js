//Buying courses
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}

//Switch 
// switch(key){
//      case value:

//      break;

//      default:
//         break;
// }

const month="april"

switch(month) {
    case 1:
        console.log("Janauaray");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    

    default:
        console.log("default");
        break;
}

//Truthy and falsy values
const userEmail="alisha123@gmail.com"
if(userEmail){
    console.log("Got the user email");
}
else{
    console.log("Don't have user email");
}

//Truthy values
//"0",'false'," ",[],{},function()

//Falsy values
//false ,0,-0,BigInt 0n,"",null, undefined, NaN

//Check whether the array is empty or not
const array=[];
if(array.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
// val1=null??10
// val=undefined ??15
val1=null??89??80

console.log(val1);

//Terniary Operator

// condition ? true :false

const iceCream=70
iceCream>=100 ?console.log("more than 100"):
console.log("less than 100")