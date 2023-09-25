const mySym=Symbol("key1");

const JsUser={
    name:"Hitesh",
    "full Name":"Alisha Shaikh",
    age:18,
    location:"Jaipur",
    email:"alishashaikh89@gmail.com",
    isloggedIn:false,
    lastLoginDays:["Monday","Saturday"],

    //Using it as Symbol
    [mySym]:"myKey1",


}
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser.mySym);
// console.log( JsUser[mySym]);

// JsUser.email="aloo@gmail.com"
// //Object.freeze(JsUser)
// console.log(JsUser.email);
// JsUser.email="aloo@2.com"
// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

