function twoSum(arr, k) {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        sum = k - arr[i];
        if (arr.includes(sum)) {
            //   return [arr[i],sum];
            console.log(arr[i], sum)
        }
    }
}
let arr = [3, 4, 1, 2, 6, 2]
let k = 8;
let hh = twoSum(arr, k)
console.log(hh)

function notRepetatedPair(arr1, k1) {
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        sum = k1 - arr1[i]
        if (map.has(sum)) {
            // console.log(arr1[i], sum, "incrideee")
            console.log(sum, arr1[i], "popopossssssssssssssssss")
            return [arr1[i], sum]
        }
        console.log(map)
        map.set(arr1[i], 1);
    }
}
let arr1 = [5, 1, 9, 8, 3, 4, 7]
let k1 = 12;
let klo = notRepetatedPair(arr1, k1)
console.log(klo)



function notRepetatedTriplet(arr1, k1) {
    for (let i = 0; i < arr1.length; i++) {
        let map = new Map();
        let currentSum = k1 - arr1[i];
        for (let j = i + 1; j < arr1.length; j++) {
            let sum = currentSum - arr1[j];
            console.log(sum, "sum-----")
            if (map.has(sum)) {

                return [arr1[i], sum, arr1[j]];
            }
            map.set(arr1[j], 1);
            console.log(map, "mapppppppppppppppppppp")
        }
    }
    return null;
}

let arr11 = [5, 1, 9, 8, 3, 4, 7];
let k11 = 12;
let klo1 = notRepetatedTriplet(arr11, k11);
console.log(klo1);


function threeSum(arr, value) {
    console.log(arr, "arrrrrrrrr")
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let findValue = value - arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let totValu = findValue - arr[j];
            if (map.has(totValu)) {
                console.log(totValu, "sskskksk")
                // return [arr[j],arr[i],totValu]
            }
            map.set(arr[j], 1)
        }
    }
}
let arr112 = [5, 1, 9, 8, 3, 4, 7];
let value = 14;
let hhh = threeSum(arr112)
console.log(hhh, "hereeeee")



function longestPalindromStringWithSubArray(lolo, k) {
    let sum = 0;
    let map = new Map();
    let maxLength;
    for (let i = 0; i < lolo.length; i++) {
        sum += lolo[i];
        let finalSum = sum - k;
        console.log(finalSum, "finalSummmmmmm")
        if (map.has(finalSum)) {
            console.log(map.get(finalSum),i, "finalSum-------------")

        }
        map.set(lolo[i], i)
    }
    console.log(map)
}
let arrt = [9, 4, 3, 2, 5]
k = 10;
longestPalindromStringWithSubArray(arrt, k)



















