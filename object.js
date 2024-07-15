
// function addDetails(rr12345) {
//     let map = new Map();

//     for (let i = 0; i < rr12345.length; i++) {
//         if (!map.has(rr12345[i].name)) {
//             map.set(rr12345[i].name, {
//                 name: rr12345[i].name,
//                 gender: rr12345[i].gender,
//                 percentage: rr12345[i].percentage
//             })
//         } else {
//             continue;
//         }
//     }
//     let ggg = Array.from(map.values());
//     console.log(ggg)
// }
// let rr12345 = [
//     { "name": "ashish1234", "gender": "male", "percentage": "44.7" },
//     { "name": "anamika", "gender": "female", "percentage": "46.7" },
//     { "name": "anamika", "gender": "female", "percentage": "90.7" },
//     { "name": "kush", "gender": "male", "percentage": "49.7" },
//     { "name": "ashish1234", "gender": "male", "percentage": "49.7" },
//     { "name": "ashish1234", "gender": "male", "percentage": "89.7" },
//     { "name": "Ritu", "gender": "female", "percentage": "45.7" }
// ];
// addDetails(rr12345)

function detailsData(arr1, arr2) {
    console.log(arr1)
    let map = new Map();
    for (let j = 0; j < arr1.length; j++) {
        if (!map.has(arr1[j])) {
            map.set(arr1[j].id, arr1[j])
        }
    }
    console.log(map, "map111111111")
    for (let k = 0; k < arr2.length; k++) {
        let currentEntry = arr2[k].id
        console.log(currentEntry, "currentEntrycurrentEntry")
        if (map.get(currentEntry)) {
            map.set(arr2[k].id, { ...map.get(currentEntry), ...arr2[k] })
        } else {
            // Add the new object to the map
            map.set(arr2[k].id, arr2[k]);
        }
    }
    console.log(Array.from(map.values()))
}
const arr1 = [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
];
const arr2 = [
    { "id": 1, "age": 25 },
    { "id": 3, "name": "Charlie", "age": 30 }
];
detailsData(arr1, arr2)


function RemoveDuplicates(users) {
    let map = new Map();
    for (let i = 0; i < users.length; i++) {
        if (!map.has(users[i].id)) {
            map.set(users[i].id, users[i])
        } else {
            continue;
        }
    }
    console.log(map, "oplolololololollllooo")
}
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Blook" },
    { id: 3, name: "Charlie" }
];
RemoveDuplicates(users);


function averageOfSum(st) {
    let map1 = new Map();
    let str = 0;
    for (let i = 0; i < st.length; i++) {
        map1.set("score", str += st[i].score)
    }
    console.log(map1)
    map1 = Array.from(map1.values());
    console.log(map1[0])
    console.log(map1.values())
}
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 78 }
];
averageOfSum(students)

// function totalSum(string) {
//     console.log(string,"oooooooooooo")
//     for (let i = 2; i <= string; i++) {
//         for (let j = i; j <= string; j++) {
//             console.log(j,i,j%i);
//            if(j%i!==0){
//                 // console.log(i);
//            }
//         }
//     }
// }
// let string = 7;
// totalSum(string)


// function totalSum(totalNumber) {
//     let arr = [];
//     let j = 3;
//     while (arr.length <= totalNumber) {
//         let isPrime = true;
//         for (let i = 2; i < j; i++) {
//             console.log(j)
//             if (j % i == 0) {
//                 isPrime = false
//             }
//         }
//         if (isPrime == true) {
//             arr.push(j)
//         }
//         j++;
//     }
//     return arr;
// }
// let totalNumber = 9;
// let gg = totalSum(totalNumber)
// console.log(gg)



// function longestSubstring(str1) {
//     let n = str1.length;
//     let res = 0;
//     let visited = new Array(256).fill(false)
//     console.log(visited)
//     let left = 0;
//     let right = 0;
//     let maxLength=0;
//     while(right<str1.length){
//           if(visited[str.charCodeAt(right)]){
//             while (visited[str.charCodeAt(right)]) {
//                 visited[str.charCodeAt(left)] = false;
//                 left++;
//             }
//           }
//           console.log(str1.charCodeAt(right))
//           visited[str1.charCodeAt(right)] = true;
//           console.log(visited);
//         //   maxLength = Math.max(maxLength, right - left + 1);
//         //   right++;
//     }
//     return maxLength;
// }
// let str = 'geekforgeeks';
// let gg=longestSubstring(str);
// console.log(gg)


function longestsubString(str) {
    let n = string.length;
    let res = 0;
    let maxLength = 0;
    let map = new Map();
    let visited = new Array(256).fill(false);
    let left = 0;
    let right = 0;
    while (right < str.length) {
        if (visited[str.charCodeAt(right)]) {
            while (visited[str.charCodeAt(right)]) {
                visited[str.charCodeAt(left)] = false;
                left++;
            }
        }
        visited[str.charCodeAt(right)] = true;
        let currentLength = right - left + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            let start = left;
            map.set(maxLength, { start, end: right });
        }
        right++;
    }
    console.log(map, "mapppppppppppppppppp");
    console.log(maxLength, "lo;")
    let value = map.get(maxLength);
    console.log(value, "lolololsss")
    let yyy = str.slice(value.start, value.end + 1);
    console.log(str, "opopopop", yyy)
}
// return maxLength;
let string = "GEEKSFORGEEKSGEEKSFORGEEKS";
let gg = longestsubString(string)
console.log(gg)




function forGeneratingRandomNumber(num) {
    let randomNumber = '012345678AKLKLOIUYTREDVBH';
    let result = '';
    for (let i = 0; i < num; i++) {
        let res = Math.floor(Math.random() * randomNumber.length)
        result += randomNumber.charAt(res)
    }
    return result;
}
let gg12 = forGeneratingRandomNumber(9);
console.log(gg12, "ggggg")



// function findCountValue(arr1) {
//     let count = 0;
//     let isUpdated = false;
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (arr[i] >arr[j]) {
//                 console.log(arr[i]);
//             }
//         }
//     }
//     return count;
// }
// let arr = [4,5,6,2,1,0]
// let details = findCountValue(arr)
// console.log(details);




function countFineValue(arr) {
    let count = 0;
    let isCount = false;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                isCount = true;
            }
        }




    }

    return count;
}
let arr = [12, 11, 10, 19, 6, 7]
let tt = countFineValue(arr)
console.log(tt)


function dateCheck(vals) {
    val = vals.split('');
    console.log(val)
    let str = '';
    for (let i = 0; i < val.length; i++) {
        if (!isNaN(val[i]) || val[i] == '-') {
            str += val[i];
            let firstDashIndex = str.indexOf('-');
            let lastDashIndex = str.indexOf('-');
            const yearPart = str.slice(firstDashIndex - 4,1,"assss", firstDashIndex + 1);
            const monthPart = str.slice(firstDashIndex - 2, lastDashIndex + 1);
            const dayPart = str.slice(lastDashIndex + 1, lastDashIndex + 3);



            console.log(yearPart, monthPart, dayPart, "ksksksksksksksDateeeeee")
        }
    }
}
let val = "iyuuuuuuuuuuuuuyu2022jhh23939932022-10-22989898gjfjfddf";
let hhhh = dateCheck(val)
console.log(hhhh)


function generatePattern(n) {
    let pattern = '';

    // Loop to generate the pattern
    for (let i = 1; i <= 2 * n - 1; i++) {
        if (i <= n) {
            // For the first part (1 to n)
            pattern += i;
        } else {
            // For the second part (n-1 to 1)
            pattern += 2 * n - i;
        }
    }

    return pattern;
}

let n = 5;
let result = generatePattern(n);
console.log(result); // Output: 123454321




// function palindromString(klkl) {
//     isPalindrom=true;
//    let str=(klkl.length-1)/2;
//    console.log(str)
//    let str2=klkl.slice(0,str)
//    let str1=klkl.slice(str+1)
//     str1=str1.split('');
//     str1=str1.reverse();
//     str1=str1.join('');
//     console.log(str2==str1,"ksllssss")
//    if(str2==str1){
//       return "this is the palindrom string";
//    }else{
//        return "this is not palindrom string";
//    }
// }
// let str = 'level';
// let ggg = palindromString(str);
// console.log(ggg)

function palindromString(str){
    let isPalindrom=true;
for(let i=0;i<=(str.length-1)/2;i++)
{
let val=str.length-1;
console.log(str[val],str[i])
if (str[i] != str[val-i]) {
    isPalindrom = false;
    break;
}
}
if(isPalindrom){
return "this is the palindrom "
}else{
return "this is not palind"
}
}
str = 'aeveb';
ggg = palindromString(str);
console.log(ggg)



function javaScriptCodingPart(arr13){
let uniqueElement=arr13.filter((element,index)=>{
return arr13.indexOf(element)===index
})
console.log(uniqueElement)
}
let arr13=[1,4,5,"Banana",6,1,4,4,9,3,"Banana"]
// output [1,4,5,"Bannana",6,9,3]
javaScriptCodingPart(arr13)



function sortTheString(str){
let obj={}
for(let el of str){
el=el.charCodeAt();
obj[el]=(obj[el]||0)+1    
}
console.log(obj,"objjjssjjs121212121212")

}
string='bbccdefbbaa';
sortTheString(string)











