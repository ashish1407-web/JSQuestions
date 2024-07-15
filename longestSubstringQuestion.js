function twoSum(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let remainingValue = k - arr[i]
        if (map.has(remainingValue)) {
            return [arr[i], remainingValue]
        }
        map.set(arr[i], 1)
    }

}
let k = 9;
let arr = [1, 29, 3, 4, 5, 10, 20, 30]
let ggg = twoSum(arr, k)
console.log(ggg)

function threeSum(arr1, k1) {
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        let values = k1 - arr1[i];
        for (let j = i + 1; j < arr1.length; j++) {
            let finalvalue = values - arr1[j];
            if (map.has(finalvalue)) {
                return [arr1[i], arr1[j], finalvalue]
            }
            map.set(arr1[j], 1)
        }
    }
}
let arr1 = [2, 3, 4, 5, 6, 7, 8]
let k1 = 15;
ggg = threeSum(arr1, k1)
console.log(ggg)


function fourthSum(arr, k) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let f1 = k - arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let f2 = f1 - arr[j];
            for (let l = j + 1; l < arr.length; l++) {
                let f3 = f2 - arr[l];
                if (map.has(f3)) {
                    return [arr[i], arr[j], arr[l], f3];
                }
                map.set(arr[l], 1)
            }
            console.log(map)
        }
    }
}
arr = [4, 3, 2, 1, 9, 5, 4, 1, 2]
k = 12;
let uu = fourthSum(arr, k)
console.log(uu, "okkokkokookkok")

//kadnaf algorithmem
function printMaximumSubArrayValue(arr1234) {
    let maxSum = 0;
    let sum = arr1234[0];
    for (let i = 0; i < arr1234.length; i++) {
        sum += arr1234[i];

        maxSum = Math.max(maxSum, sum)
        if (sum < 0) {
            sum = 0;
        }

    }
    console.log(maxSum, "maxSum---------")
    return maxSum;
}
let arr12 = [-2, -3, 4, -1, -2, 1, 5, -3]
let gg = printMaximumSubArrayValue(arr12)
console.log(gg, "gggggggggggg")



function printMaximumSubArray(arr) {
    let maxSum = 0;
    let sum = 0;
    let obj = [];
    let tt = [];
    var fl;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 0) {
            obj.push({ value: arr[i], index: i, sum: sum, maxSum: maxSum })
            if (sum == maxSum) {
                continue;
            }
        }
        maxSum = Math.max(maxSum, sum)
        let j = maxSum;
        if (j !== maxSum) {
            fl = i;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    console.log(obj, "objjjj")
    let startIndex = -1;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].sum > 0) {
            startIndex = i;
            break;
        }
    }
    for (let i = startIndex; i < obj.length; i++) {
        if (obj[i].maxSum == maxSum) {
            break;
        } else {
            tt.push(obj[i].value)
        }
    }
    return tt;
}
arr12 = [-2, -3, 4, -1, -2, 1, 5, -3]
let fff = printMaximumSubArray(arr12)
console.log(fff, "ffffffffffffff")



function longestPalindromStringWithSubArray(lolo, k) {
    let sum = 0;
    let map = new Map();
    let maxLength;
    for (let i = 0; i < lolo.length; i++) {
        sum += lolo[i];
        let finalSum = sum - k;
        console.log(finalSum, "finalSummmmmmm")
        if (map.has(finalSum)) {
            console.log(finalSum, "finalSum-------------")

        }
        map.set(lolo[i], i)
    }
    console.log(map)
}
let arrt = [9, 4, 3, 2, 5]
k = 10;
longestPalindromStringWithSubArray(arrt, k)

// function findSubArrayWithSum(arr, k) {
//     let sum = 0;
//     let map = new Map();
//     let startIndex = 0;
//     let endIndex = 0;
//     let maximum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         let finalSum = sum - k;
//         if (map.has(finalSum)) {
//             startIndex = map.get(finalSum) + 1;
//             endIndex = i;
//             // let maxLength=endIndex-startIndex+1;
//             // maximum=Math.max(maxLength,maximum)
//             break;
//         }
//         map.set(sum, i);
//     }
//     // return maximum;
//     let gg = { startIndex: startIndex, endIndex: endIndex }
//     console.log(gg, arr)
//     let va = arr.slice(startIndex, endIndex + 1)
//     console.log(va)
// }
// arrt = [4, 5, 1, 9, 8, 1];
// k = 19;
// let uuuu = findSubArrayWithSum(arrt, k);
// console.log(uuuu, "lolololol")



// function slidingWindow(arr12, k) {
//     let i = 0;
//     let lengthArr = arr12.length;
//     let sum = 0;
//     let count = 0;
//     let j = 0;
//     let maxMath=0;
//   console.log(arr12,k-lengthArr)
//     while (i<=lengthArr-k) {
//           while(count<k){
//             sum += arr12[j]
//             console.log(sum)
//             count++;
//             j++;
//           }
//             maxMath = Math.max(sum, maxMath)
//             i++;
//             j = i;
//             sum=0;
//             count=0;
//     }
//   return maxMath/4;
// }
// arr12 = [1, 12, -5, -6, 50, 3]
// k = 4;
// let gg12=slidingWindow(arr12, k)
// console.log(gg12,"kakak")





function findMaxAverage(nums, k) {
    let sum = 0;
    let start = 0;

    let maxAvg = Number.MIN_SAFE_INTEGER;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        if (end - start + 1 === k) {
            maxAvg = Math.max(maxAvg, sum / k);

            sum -= nums[start];
            start++;
        }
    }

    return maxAvg;
};
arr12 = [1, 12, -5, -6, 50, 3]
k = 4;
let gghhh = findMaxAverage(arr12, k)
console.log(gghhh)



function findSubArrayWithSum(arr, k) {
    let sum = 0;
    let map = new Map();
    let startIndex = 0;
    let endIndex = 0;
    let minDiff=Infinity;
    let obj=[];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        let finalSum = sum - k;
        if (map.has(finalSum)) {
            startIndex = map.get(finalSum) + 1;
            endIndex = i;
            let val = endIndex - startIndex;
            // console.log(val, "valllllalaasa")
            // console.log(minDiff, "lololololololololll1212121212")
            minDiff = Math.min(val, minDiff)
            obj.push({startIndex:startIndex,endIndex:endIndex,difference:val})
        }
        map.set(sum, i);
    }
    obj.forEach((val, index) => {
        if (val.difference === minDiff) {
            const startIndex = val.startIndex;
            const endIndex = val.endIndex;
            console.log(startIndex,endIndex,"hereeeeeeeee")
            const ggg = arr.splice(startIndex, endIndex-1);
            console.log(ggg, "sliced array");
            return ggg; // This return is not necessary inside forEach, as it won't break the loop
        }
    });
}
arrt = [2, 3, 1, 2, 4, 3];
k = 7;
let uuuu = findSubArrayWithSum(arrt, k);
console.log(uuuu, "lolololol")



function longestConjecativeSubstringLength(arr){
let set=new Set(arr)
let longestMax=0;
for(let el of arr){
if(!set.has(el-1)){
    let num=el;
    let count=1;
     while(set.has(num+1)){
         num+=1;
         count+=1;
     }
     console.log(longestMax,count)
   longestMax=Math.max(longestMax,count)
}   
}
return longestMax;
}
let longestConjecativeArray=[102,4,100,1,101,3,2]
ggg=longestConjecativeSubstringLength(longestConjecativeArray)
























