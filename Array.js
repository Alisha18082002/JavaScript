const myArr=[0,1,2,3,4,5];
console.log(myArr.length);

myArr.push(8);


console.log(myArr);
myArr.pop(3);
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift(); //used to remove operator inserted by shift
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2))

const newArr=myArr.join()

console.log(newArr);

//slice,splice
console.log("We are going slice and splice");

//Original Array
const temp=[1,2,3,4,5];
console.log("Original",temp);

//slice
const temp1=temp.slice(1,3);
console.log(temp1);
console.log(temp);

//Splice
const temp2=temp.splice(1,3);
console.log(temp2)
console.log(temp)