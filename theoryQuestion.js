function closure(){
let a=100;
function sum(){
let d=200;
console.log(a+d);
}
return sum();
}
closure();


function sum(callback){
callback();
}
function add(){
    let a=10000;
console.log(a)
}
sum(add)



let obj={
name:"ashish",
student:"mathematics",
 getName(a,b){
console.log(this.name,a,b)
}
}
let obj1={
"name":"vijay"    
}
obj.getName.apply(obj1,["a","b"])





let obj2={
name:'koko',
getTotalData(a,v){
console.log(this.name,a,v)
}
}
let obj10={
    "name":"vijay"    
    }
let ff=obj2.getTotalData.bind(obj10,"kl",'lol')
ff();


let array=[1,2,3,4,56]
const array1=array
console.log(...array1);



class Stduent{
constructor(name,subject){
    console.log(name,subject)
}

}
let ss=new Stduent("uiomm","matches")







function add(a){
return function subs(b){
return function tot(c){
return a+b+c;
}
}
}
let ff123=add(1)(2)(3)
console.log(ff123)
































