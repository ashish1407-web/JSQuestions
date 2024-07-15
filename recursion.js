function factorialNumber(num1) {
    if (num1 == 1) {
        return num1;
    }
    return num1 * factorialNumber(num1 - 1);
}
let number = 5;
let ggg = factorialNumber(number)
console.log(ggg)


function arraySumUsingRecursion(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    return arr[index] + arraySumUsingRecursion(arr, index + 1)
}
let arr12 = [5, 4, 3, 2, 1]
let hh = arraySumUsingRecursion(arr12)
console.log(hh)

function multiPlayOfTheArray(arr19, index = 0) {
    if (index >= arr19.length) {
        console.log(index, "sssss")
        return 1;
    }
    console.log(arr19[index])
    return arr19[index] * multiPlayOfTheArray(arr19, index + 1)
}
let arr9 = [1, 2, 3, 4, 5, 6]
let kok = multiPlayOfTheArray(arr9)
console.log(kok)


// function calculateThePowerOfExpoenentUsingRecursion(z, x,index=1) {
//     if (x==0) {
//         return 1;
//     }
//     return z*calculateThePowerOfExpoenentUsingRecursion(z,1)
// }
// let x = 2;
// let y = 3;
// //2*2*2
// let gg=calculateThePowerOfExpoenentUsingRecursion(x, y)
// console.log(gg);


function findTheExponenetOfTheRecursion(val) {
    if (val == 1) {
        return true;
    }
    if (val < 1) {
        return false;
    }
    return findTheExponenetOfTheRecursion(val / 3)
}
let value = 64;
let uuu = findTheExponenetOfTheRecursion(value)
console.log(uuu);
//output - 3



function reverseArrayUsingTheRecursion(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return arr;
    [arr[start], arr[end]] = [arr[end], arr[start]]
    return reverseArrayUsingTheRecursion(arr, start = start + 1, end = end - 1)
}
let arr = [1, 2, 3, 4, 5, 6]
let uuu123 = reverseArrayUsingTheRecursion(arr)
console.log(uuu123)


function sortedArray(arr1, index = 0) {
    console.log(arr1)
    if (index == arr1.length - 1) {
        return true;
    }
    if (arr1[index] > arr1[index + 1]) {
        return false;
    }
    return sortedArray(arr1, index = index + 1)
}
arr = [10, 11, 12, 19, 2]
let opop = sortedArray(arr);
console.log(opop, "skksskksk121212")


function recursionUsingBinearySearch(arr1, val, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    let middle = parseInt((left + right) / 2);
    if (arr1[middle] == val) {
        return middle;
    } else if (val < arr1[middle]) {
        return recursionUsingBinearySearch(arr1, val, left, middle - 1)
    } else {
        return recursionUsingBinearySearch(arr1, val, middle + 1, right)
    }
}
arr = [2, 3, 4, 10, 40];
val = 2;
gg = recursionUsingBinearySearch(arr, val)
console.log(gg, "fkkf12312121212")


function BubbleSortAlgorithem(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            } else {
                continue;
            }
        }
    }
    return arr;
}
arr = [20, 30, 11, 22, 44, 1, 2, 3]
let uu = BubbleSortAlgorithem(arr)
console.log(uu, "sksksksks")

/******************************************************* */

function BubbleSortRecursion(arr, start = 0, end = arr.length - 1) {
    if (start == end) {
        return arr;
    }
    if (start <= end) {
        [arr[end], arr[start]] = [arr[start], arr[end]]
    }
    return BubbleSortRecursion(arr, start = start + 1, end = end - 1)
}
arr = [20, 30, 11, 22, 44, 1, 2, 3]
let koo = BubbleSortRecursion(arr);
console.log(koo, "this recursive clal")

function BubbleSortRecursion(arr, end = arr.length - 1) {
    // Base case: if end is 0, the array is sorted
    if (end == 0) {
        return arr;
    }

    // Perform a single pass of bubble sort
    for (let i = 0; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap if the element found is greater than the next element
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Recur for the remaining part of the array
    return BubbleSortRecursion(arr, end - 1);
}
arr = [20, 30, 11, 22, 44, 1, 2, 3];
let sortedArr = BubbleSortRecursion(arr);
console.log(sortedArr);


function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isFlag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
                isFlag = true
            }
        }
        if (isFlag == false) {
            break;
        }
    }
    return arr;
}
arr = [20, 30, 11, 22, 44, 1, 2, 3];
let okokko = BubbleSort(arr);
console.log(okokko, "slslsl")





function BubbleSortWithRecursion(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return arr;

    for (let j = 0; j < end; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }

    return BubbleSortWithRecursion(arr, start, end - 1);
}

arr = [20, 30, 11, 22, 44, 1, 2, 3];
sortedArr = BubbleSortWithRecursion(arr);
console.log(sortedArr, "slslssssssss");




function currying(a) {
    return function addition(b) {
        return function substraction(c) {
            return a + b + c;
        }
    }
}
console.log(currying(1)(2)(3))


/******************************************************************************** */


function mergeSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let mid = parseInt((left + right) / 2);
    merge(arr, left, mid)
    merge(arr, mid + 1, right)
    merge(arr, left, mid, right)
}
function mergeSort(arr, left, mid, right) {
    let arr3 = []
    let arr4 = []
    let n1 = mid - left + 1;
    let n2 = right - mid;
    for (let i = 0; i < n1; i++) {
        arr3[i] = arr[left + i]
    }
    for (let j = 0; j < n2; j++) {
        arr4[j] = arr[mid + 1 + j]
    }
    let a = 0;
    let b = 0;
    while (a < n1 && b < n2) {
        if (arr3[a] >= arr4[b]) {
            arr[left] = arr4[b]
            b++
        } else {
            arr[left] = arr3[a]
            a++
        }
        left++;
    }
    while(a<n1){
      arr[left]=arr3[a]
        a++;
        left++;
    }
    while(b<n2){
        arr[right]=arr4[b];
        b++;
        right++;
    }
}
let arrr = [4, 3, 2, 1, 0]
mergeSort(arr);
























