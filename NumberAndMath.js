const score=40;
console.log(40);

//Explicitly declaring it as an number
const balance=new Number(100)
console.log(balance);

// console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))

const otherNumber1=123.8966
console.log(otherNumber1.toPrecision(3))

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));

//++++++Maths++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1)) //Increase to upper value
console.log(Math.floor(4.9)); //Decreases to lower value
console.log(Math.max(3,4,5,6));

console.log(Math.random()); //values are between 0-1
console.log((Math.random()*10)+1 ) 
//To convert 0.123 to 1.23-> we multiply by 10 to convert 0.123 to 1.23
//But in case the number is 0.0123-> multiply by 10 to convert 0.0123 to 0.123
//Still the number is 0.123 i.e the number is less than 1
//So we add 1
console.log(Math.floor(Math.random()*10)+1 )


const min=10
const max=20

//To print the number within the range
console.log(Math.floor(Math.random()*(max-min +1)+min));