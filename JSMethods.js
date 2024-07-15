function checkStringLength(str) {
    if (str.length > 10) {
        console.log(str.length)
      return "String is too long";
    } else if (str.length === 0) {
      return "String is empty";
    } else {
      return "String length is acceptable";
    }
  }
  
  console.log(checkStringLength("Hellwlsllslslslslsl  ")); // Output: String is too long
  console.log(checkStringLength("JavaScript"));    // Output: String length is acceptable
  console.log(checkStringLength(""));              // Output: String is empty
  


  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits,"furrrrr12344")
//   const frrrr="Banana"
// console.log(frrrr.at(2))
// console.log(fruits.indexOf("Banana"))
// at is the reverse of the indexof
// concat- it will one both array and string
// let array=[2,4,5,67,78]
// let array1=[9,9,9,9,12]
// array="ashish"
// array1="slslss"
// console.log(array.concat(array1))




// copywithIn
// in that place it will copy the element from anotehr element of the array it does nor the length of the array
// fruits.copyWithin(2,1);
// console.log(fruits)

//splice
// console.log(fruits)
// console.log(fruits.splice(1))
// console.log(fruits.splice(1,3))

fruits.splice(3,2,"skskkskssk12")
console.log(fruits,"dldldld")



//  fruits = ["apple", "banana", "cherry"];

// console.log("Before splice:", fruits);

// // Adding an element at index 1
// fruits.splice(1, 0, "eyyey");

// console.log("After splice:", fruits);

// toaSpliced
// slice does not chnage origianl array
//splice change the original array


// let fastptr=head;
// let slowptr=head;
// while(fastptr.next.next!=null && fastptr.next!==null){
// fastptr=fastptr.next.next;
// slowptr=slowptr.next
// }
// return slowptr


// let prev=null;
// let curr=head;
// let next=null;
// while(curr!==null){
//  next=curr.next;  
//  curr.next=prev;
//   prev=curr;
//   curr=next;
// }



//reverse cannot work with string
//we cannot add new element throught slice
//slice cannot change the originial array
//splice change the 




///find and filter
//find will return the only specific element from the array whereas filter will return the array after satisfy the condition
//

//find and findIndex
//findlastIndex
//findIndex



//


// let fruit= ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.sort(),"furrrrr12344")

// const arr=['90','392','020','090202020']
// console.log(arr.reverse())
// console.log(arr.sort((a,b)=>a-b))
// console.log(arr.sort((a,b)=>b-a))


function objecSort(aa){
let val=aa.sort((a,b)=>{
 if(a.name<b.name) return -1;
 if(a.name>b.name) return 1;
 return 0
})
console.log(val)
console.log(aa)
}

let obj=[
{name:"karima",price:1000},
{name:"Ashish",price:4000},
{name:"jay",price:20000},
{name:"vijay",price:7000},
{name:"Arvindo",price:90000}
]
objecSort(obj)



console.log(Array.from("ABCDEFG"));
// console.log()
// Array.from is used to convert the object to array or set map and hash map to array
//I have one more value for Array
// Array.with(3,"lslslslolol")
// we can also pass the limit in split method also


// one more we have the indexof also inside the we can also pass the index number with index we want to check this value
//we want to fetch some valuessss
//the slice will be use with the string only differnce the substr and slice
// inside the substr we can pass the second parameter as a number
// search is same string inside the 


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2); // [2, 4, 6, 8, 10]
console.log(doubledNumbers)
console.log(numbers)





















