

//Singleton Object
const tinderUser=new Object();
tinderUser.id="101"
tinderUser.name="Alisha"
tinderUser.isLoggedIn=false


// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
           firstname:"Alisha",
           lastname:"Shaikh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2} //spread object
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"alisha@gmail.com",
    }
]

console.log(users[1].email)
console.log(tinderUser)

//The output of accessing object's -> key or value pair is
//always array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));