function veryGoodQuestion(a) {
    a = a.split('');
    a = a.reverse();
    let i = 0;
    let str = '';
    console.log(a)
    while (i < a.length) {
        let finalValue = a[i] + a[i + 1]
        if ((finalValue >= 65 && finalValue <= 90) || (finalValue >= 97 && finalValue <= 122) || (finalValue == 32)) {
            str += String.fromCharCode(finalValue)
            i = i + 2;
        } else {
            let finalValue = a[i] + a[i + 1] + a[i + 2];
            console.log(finalValue, "finaValueeee")
            str += String.fromCharCode(finalValue)
            i = i + 3;
        }
    }
    return str;
}
let a = "796115110113721110141108";
let gg = veryGoodQuestion(a);
console.log(gg, "ggggg")

// output PrepInsta


function forUniqueNumber(arrtt) {
    let map = {};
    for (let i = 0; i < arrtt.length; i++) {
        map[arrtt[i]] = (map[arrtt[i]] || 0) + 1;
    }
    let i = 1;
    let str = '';
    for (el in map) {
        if (map[el] > 1) {

            for (i = 0; i < map[el]; i++) {
                if (i !== 0) {
                    str += el + i + ' ';
                } else {
                    str += el + ' ';
                }
            }
        } else {
            str += el + ' ';
        }

    }
    str = str.split(' ');
    return str.slice(0, str.length - 1)
}
const arrtt = ['home', 'download', 'first', 'first', 'first', 'download']
let hh = forUniqueNumber(arrtt)
console.log(hh)

// output ['home','download','first','first1','first2','download']

function numberOccure(str11) {
    let map = {};
    for (let i = 0; i < str11.length; i++) {
        map[str11[i]] = (map[str11[i]] || 0) + 1;
    }
    console.log(map)

}
let str = ['a', 'b', 'b', 'b', 'c', 'c', 'c', 'a', 'f', 'c']
numberOccure(str)



function oxigenLevelOfThreeTrainee(a) {
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let uu = []
    for (let i = 0; i < a.length; i += 3) {
        sum += a[i];
    }
    uu.push(sum)
    for (let j = 1; j < a.length; j += 3) {
        sum1 += a[j];
    }
    uu.push(sum1)
    for (let k = 2; k < a.length; k += 3) {
        sum2 += a[k]
    }
    uu.push(sum2)
    console.log(uu.sort((a, b) => b - a))

}
a = [95, 92, 95, 92, 90, 92, 90, 92, 90]
oxigenLevelOfThreeTrainee(a)


function maxArrayElement(arr) {
    let max = arr[0];
    let count = 1;
    let maxValue = max;
    for (let i = 0; i < arr.length; i++) {
        maxValue = Math.max(max, arr[i]);
        console.log(maxValue, "maxValueeeeee", i, max)
        if (maxValue !== max) {
            count++;
            max = maxValue
        }

    }
    return count;
}
arr = [9, 8, 10, 11, 12, 13]
hh = maxArrayElement(arr)
console.log(hh, "lolol")

function findTheNumberEle(arr1) {
    let count = 0;
    let count1 = 0;
    let maxCount = 0;
    let i = 0;

    while (i < arr1.length) {
        while (i < arr1.length && arr1[i] == 1) {
            count++;
            i++;
        }
        maxCount = Math.max(maxCount, count);
        count = 0;

        while (i < arr1.length && arr1[i] == 0) {
            count1++;
            i++;
        }
        maxCount = Math.max(maxCount, count1);
        count1 = 0;
    }

    return maxCount;
}
arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
let hhh = findTheNumberEle(arr)
console.log(hhh)


function slidingWinddow(b) {
    let map = new Map();
    let start = 0;
    let end = 0;
    let max = 0;
    let lastValue;
    for (let i = 0; i < b.length; i++) {
        if (map.has(b[i])) {
            map.delete(b[i]);
            end++;
        } else {
            map.set(b[i], i);
            max = Math.max(max, map.size);
        }
        lastValue = i;
    }
    console.log(lastValue, end, "lololpkjddddd")
    b = b.split('');
    return b.slice(end, lastValue).join('')
    // return max;
}
a = 'abcabcdb'
hhh = slidingWinddow(a)
console.log(hhh, "lololoo")
//minimum window
// function slidingwindow(nums, target) {
//     let minimumWinddow = 0;
//     let sums=0;
//     let map=new Map();
//     for (let i = 0; i < nums.length; i++) {
//          sums+=nums[i];
//         let value=sums-target
//         if(map.has(value)){

//         }
//       map.set(nums[i],i)
//     }
// }
// let nums = [2, 3, 1, 2, 4, 3];
// let target =7;
// slidingwindow(nums, target)
// 



function findSubArrayWithSum(arr, k) {
    let sum = 0;
    let map = new Map();
    let startIndex = 0;
    let endIndex = 0;
    let maximum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        let finalSum = sum - k;
        if (map.has(finalSum)) {
            console.log("kskskskssk")

        }
        map.set(sum, i);
    }
    // return maximum;
    let gg = { startIndex: startIndex, endIndex: endIndex }
    console.log(gg, arr)
    let va = arr.slice(startIndex, endIndex + 1)
    console.log(va)
}
arrt = [2, 3, 1, 2, 4, 3];
k = 7
let uuuu = findSubArrayWithSum(arrt, k);
console.log(uuuu, "lolololol")



// function findOccurence(arr){
//    let str;
//    for(let i=0;i<arr.length;i++)
//      {
//       console.log(str)
//       console.log(str.length)
//      }
//  }
//  const array1 = [
//    1,
//    "1",
//    0,
//    "0",
//    "3A",
//    "",
//    3,
//    4,
//    "A",
//    null,
//    undefined,
//    false,
//    true,
//    NaN,
//  ];
//  findOccurence(array1)




function deepMerge(obj1, obj2) {
    let merged = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'object' && obj1[key] !== null) {

                merged[key] = deepMerge({}, obj1[key]);
            } else {
                // Copy primitive values or non-nested objects directly
                merged[key] = obj1[key];
            }
        }
    }

    // Iterate over keys of obj2 and merge them into merged
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null) {
                // If obj2[key] is an object, recursively merge its properties
                merged[key] = deepMerge(merged[key] || {}, obj2[key]);
            } else {
                // Copy primitive values or non-nested objects directly
                merged[key] = obj2[key];
            }
        }
    }

    return merged;
}

// Example usage:
let obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4 };
let obj2 = { b: { c: 5 }, f: 6 };

console.log(deepMerge(obj1, obj2));






function copyMatchingValues(obj1, obj2) {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                // Recursively copy or overwrite nested objects
                copyMatchingValues(obj1[key], obj2[key]);
            } else {
                // Copy or overwrite primitive values
                obj1[key] = obj2[key];
            }
        }
        console.log(obj1)

    }
}
    obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4 }
    obj2 = { b: { c: 5 }, f: 6 }
    let ggg = copyMatchingValues(obj1, obj2);
    console.log(ggg, "lolo")



function totData(str){
str='';
for(let i=0;i<=5;i++){
   str+=6*i+' '; 
   str+=7*i+' ';
}
console.log(str);




}
let str12="0,0,7,6,14,12,21,18, 28";
totData(str12);



















