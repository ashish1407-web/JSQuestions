function addData(a){
if(a=={name:"Ashish"}){
console.log("exprected")
}else{
console.log("cannot accepted")
}
}
addData({name:"Ashish"})

let a=3;
let b=new Number(3)
console.log(typeof b)
let c=3;
// console.log(b==c)
// console.log(a==c)
// console.log(a==c)


// b=null;
// console.log(b==null)

console.log(Object==Number)




console.log(a==b==2)


let f = '5';
let g = 5;

console.log(typeof f,typeof g,f === g,"kkkkkkkkk"); // Implicit type conversion: string '5' is converted to number 5
console.log(f === g);

function greet(name) {
    if (name === null) {
        console.log('Hello, guest!');
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet(null); // Output: Hello, guest!
greet('Alice'); // Output: Hello, Alice!



