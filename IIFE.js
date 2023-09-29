//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
}) (); //Semicolon is very imp here
// ->To remove the pollution from global scope 

((name)=>{
    //Unamed iife
    console.log(`db connected ${name}`);
}) ('Alisha')
