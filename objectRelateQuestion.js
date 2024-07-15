// function mergeObject(obj1, obj2) {
//     for (let el in obj1) {
//         if (obj1.hasOwnProperty(el)) {
//             console.log("yessss")
//             obj2[el] = obj1[el]
//         }
//         console.log(obj2)
//     }
//     console.log(obj2)





// }
// let obj = { name: "Ashish", place: "GandhiSagar" }
// let obj2 = { name: "Manoj", place: "Indore" }
// mergeObject(obj, obj2)

// function mergeObject(obj1, obj2) {
//     let merge = {};
//     for (let key in obj1) {
//         if (obj2.hasOwnProperty(key)) {
//             obj1[key] = obj2[key];
//         }
//     }
    // for(let key in obj2){
    //    if(obj2.hasOwnProperty(key)){
    //       merge[key]=obj2[key]
    //    }

    // }
    // console.log(Object.assign({},obj1,obj2),"ksksk")
// }

// Example usage:


// let mergedObj = mergeObject(obj1, obj2);
// console.log(mergedObj);
// obj1 = { name: "Ashish", place: "GandhiSagar" };
// obj2 = { name: "Manoj", place: "Indore" };

function copyMatchingValues(obj11, obj2) {
    for (let key in obj2) {
        if (obj11.hasOwnProperty(key)) {
            console.log(key)
            if (typeof obj11[key] == 'object') {
                copyMatchingValues(obj11[key], obj2[key])
            } else {
                obj11[key] = obj2[key];
                // }
            }
        }
    }
    console.log(obj11)
}
let obj11 = { a: 1, b: { c: 2, d: 3 }, e: 4 }
let obj2 = { a: 8, b: { c: 5 }, f: 6 }
let ggg = copyMatchingValues(obj11, obj2);
console.log(ggg, "lolo")



function objectChanging(obj, obj1) {
    let result = {}
    for (let el in obj) {
        if (obj1.hasOwnProperty(el)) {
            result[el] = [obj[el], obj1[el]]
        } else {
            result[el] = obj[el];
        }

        for (let el in obj2) {
            if (!result.hasOwnProperty(el))
                result[el] = obj2[el]
        }

    }
    console.log(result)
}
let obj = { a: 1, b: 2, e: 4 }
obj1 = { a: 100, b: 90, f: 900 }
objectChanging(obj, obj1)




function mergeValues(obj1,obj2){
for(let el in obj1){
    if(obj2.hasOwnProperty(el)){
        if(Array.isArray(obj1[el])){
             obj1[el].forEach(el=>String(el))
             obj1[el].push(obj2[el])
        }else if(typeof obj1[el]=='object' ){
               console.log(obj1[el].k,"sksksk",Number(obj2[el]))
               let val=obj1[el].k+Number(obj2[el])
               console.log(Number(obj1[el].k+Number(obj2[el])))
               obj1[el]=val
        }
    }
}
console.log(obj1)
}
obj1={a:1,b:[6,2,1],g:{k:100},f:100}
obj2={g:901,a:100,b:78,k:99}
mergeValues(obj1,obj2)



function addValues(arr){
    let str=0;
for(let i=0;i<arr.length;i++){
    if(!isNaN(arr[i])){
        str+=Number(arr[i]);
    }else if(Array.isArray(arr[i]) && isNaN(arr[i])){
       str+=addValues(arr[i])
    }
}
return str;
}
let arr=['1','2','a',[4,5,'b'],'9','0','3',['h','78',[9,100,[800,700]]],'45',89]
let gg=addValues(arr)
// console.log(gg)



function objectQuestion(ok1){
let vv=ok1.filter(el=>el.gender=="female").map(el=>{

})
// console.log(vv,"lclcll")
}
let obj1234 = [
    { name: "Ashish", city: "Ujjain", place: "Mahu","gender":"male","age":23},
    { name: "Ashish123", city: "Ujjain", place: "Mahu","gender":"male","age":14 },
    { name: "Anita", city: "Delhi", place: "Connaught Place","gender": "female","age":40 },
    { name: "Sneha", city: "Mumbai", place: "Juhu","gender":"female","age":14  }
  ];
  objectQuestion(obj1234) 
  





  
  // Sorting function to order by gender (female first)
 
  
  let obj12345 = [
    { name: "Ashish", city: "Ujjain", place: "Mahu", gender: "male", age: 23 },
    { name: "Ashish123", city: "Ujjain", place: "Mahu", gender: "male", age: 14 },
    { name: "Anita", city: "Delhi", place: "Connaught Place", gender: "female", age: 40 },
    { name: "Sneha", city: "Mumbai", place: "Juhu", gender: "female", age: 14 }
  ];
  const sortedByAge = obj12345.sort((a, b) => a.age - b.age);
let obj1={};
let obj21={};
let final=[]
for(let el in sortedByAge){
if(el.gender=='female'){
obj1.el=el;
}
}
for(let el in sortedByAge){
if(el.gender=='male'){
obj2.el=el;
}
}
let obj3={...obj1,...obj2}
final.push(obj3);
console.log(final,"finallllllllllllllll")
































































