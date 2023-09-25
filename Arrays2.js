const array=[1,2,3,4,5];
const array1=[6,7,8,9,10];

// array.push(array1)
console.log(array);

console.log(array[2])

const new_array=array.concat(array1)
console.log(new_array);

const all_new_heros=[...array,...array1];
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array)

 console.log(Array.isArray("Hitesh"))
 console.log(Array.from("Hitesh")); //Used to convert into Array
 console.log(Array.from({name:"hitesh"})) //Interview qus

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3))