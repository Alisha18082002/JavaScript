
function myName(){
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    
}
myName();

function addTwoNumbers(number1,number2){
    return number1+number2; ;
}
const num=addTwoNumbers(3,5);
// console.log(num);

function loginUserMessage(username="sam"){
    if(!username){ //username===undefined
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

const value=loginUserMessage("alisha");
// console.log(value);


//...rest operator
function calculateCartPrice(...num1){
return num1;
}
console.log(calculateCartPrice(9,89,90));

//...rest operator
function calculateCartPricee(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPricee(200,400,500,200));

//Creating object
const user={
    username:"Alisha",
    price:14,
};

//Passing objects into fuctions
function handleObjects(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObjects({
    username:"sam",
    price:90
} );

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
};
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,399]));


