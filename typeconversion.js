let a="33";
console.log(typeof a);

//Convert into number
let number=Number(a);
console.log(typeof number);

console.log("Converting into Number")
let b="33ab";
console.log(typeof b);
let number1=Number(b);
console.log(typeof number1);
console.log(number1); 

//Null
console.log("Defining Null")
let c=null;
let number2=Number(c);
console.log(c);
console.log(typeof c);

 //Undefined
 let d=undefined;
 console.log(d);
 console.log(typeof d);

 //Boolean
 let e=true;
 let number3=Number(e);
 console.log(number3)
 console.log(typeof e);

//String into number
let f="Alisha";
let gh=Number(f);
console.log(gh)
console.log(typeof gh);


//Notes
//"33"=>33;
//"33abc"=>NaN
//true =>1 ; false=>0

//1=>true ; 0=>false
// ""=>false
// "hitesh"=>true

console.log("Conversion into Boolean")
let isLoggedIn="1"

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

console.log("Conversion into String")
let ss=33
let s1=String(ss);
console.log(s1)
console.log(typeof s1)