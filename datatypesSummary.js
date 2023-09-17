//Primitive and Non-primitive data-types;

//7 types:String, Number,Boolean, null, undefined, symbol,bigInt

let myname="Alisha";
console.log(typeof myname);

let num=32;
console.log(typeof num);

let valueInNumber=Number(myname);
console.log(typeof valueInNumber);

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);
const bigNumber=3455555555n;
console.log(typeof bigNumber);

//Reference (Non Primitive)
//Array,Objects,Function

const fruits=["Apple","Mango","Grapes"];
let myObj={
    name:"Alisha",
    age:18,
}
var a=function(){

}

