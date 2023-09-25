let username="Alisha Shaikh"
let anothername=username;
console.log(username);
console.log(anothername);

//Primitive ->Stack
console.log("Primitive day type is stored in Stack")
anothername="Aloo ";
console.log(username);
console.log(anothername);

//Non-primitive data type is stored in heap
let info1={
    roll_no:1,
    name:2,
    email:"alisha123gmail.com",
}
console.log(info1.email);

let info2=info1;
info2.email="aloo34gmail.com";
console.log(info1.email);