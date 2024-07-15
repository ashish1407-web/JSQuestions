
function longestPalindromString(arr, k) {
    let sum = 0;
    let maxLength = 0;
    let map1 = new Map();
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum == k) {
            map1.set(i, i + 1);
            maxLength = i + 1;
        }
        let needed = sum - k;
        console.log(needed)
        const neededInMap = map.get(needed);
        console.log(neededInMap, "kk")
        if (map.has(needed)) {
            map1.set(neededInMap, i);
            maxLength = Math.max(maxLength, i - neededInMap);
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    // console.log(maxLength)
    // console.log(map)
    console.log(map1, "llllll")
}
let arr = [9, 7]
let k = 11;
longestPalindromString(arr, k)



function LongestConjecativeNumber(arr1) {
    let min = Math.min(...arr1);
    let max = Math.max(...arr)
    for (let i = min; i <= max; i++) {
        if (!arr1.includes(i)) {
            return i - 1;
        }
    }
}
let arr1 = [2, 6, 1, 9, 4, 5, 3]
let gg = LongestConjecativeNumber(arr1)
console.log(gg)





// function addDetails(exprs) {
//    let stack=[];
//    let i=0;
//    let isBalance=false;
//   for(let el of exprs){
//    if(el=="("||el=="{"||el=="["){
//     stack.push(el);
//     i++;
//    }else{
//      if(i>=0 && (el[i]==")" && stack[i]=='(')||(el[i]=="}" && stack[i]=='{') ||(el[i]=="[" && stack[i]=="]")){
//         isBalance=true;
//          stack.pop();
//          i--;
//      }
//    }
//   }
//  if(isBalance){
//    return "It is balance";
//  }else{
//     return "It is not balance";
//  }
//   }
// let expr = "([{}])";
// let gg123=addDetails(expr)
// console.log(gg123)
// function isOpening(value) {
//     if (value == '{' || value == '[' || value=='(')
//      return true;
// }
function isClosing(isOpening, isClosing) {
    // console.log(isOpening,isClosing,"sssksksk")
    if (isOpening == '{' && isClosing == '}' || isOpening == '[' && isClosing == ']' || isOpening == '(' && isClosing == ')')
        return true
}
function isOpening(char) {
    return char === '(' || char === '{' || char === '[';
}

function isMatching(opening, closing) {
    return (opening === '(' && closing === ')') ||
        (opening === '{' && closing === '}') ||
        (opening === '[' && closing === ']');
}

function checkParanthesis(expr) {
    let i = 0;
    let stack = [];
    let isBalance = true;
    while (i < expr.length) {
        let tt = isOpening(expr[i]);
        if (tt) {
            stack.push(expr[i]);
            console.log(stack);
        } else {
            const lastOpened = stack.pop();
            console.log(isMatching(lastOpened, expr[i]))
            if (isMatching(lastOpened, expr[i]) !== true) {
                isBalance = false;
                break;
            }
        }
        i++;
    }

    if (isBalance && stack.length === 0) {
        return "this string is balanced";
    } else {
        return "this string is not balanced";
    }
}
let expr = "{[()]}";
let result = checkParanthesis(expr);
console.log(result);

console.log("000000000000000000000000000000000000000000")
function stockBuyAndSell(arr) {
    let total = 0;
    let min = arr[0];
    let maxProfilt = 0;
    let maxProfilt1 = 0;
    let lastMinmum;
    let profilt;
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        if (lastMinmum != min) {
            maxProfilt1 = Math.max(arr[i] - min, maxProfilt);
            total += maxProfilt1;
        }
        lastMinmum = min;

        maxProfilt = Math.max(arr[i] - min, maxProfilt);
        console.log(maxProfilt, "maxProfiltttt")
    }
    return total + maxProfilt;
}
let arr123 = [100, 180, 260, 310, 120, 20, 695]
let uu = stockBuyAndSell(arr123)
console.log(uu, "pppp")


function rainWater(arrData) {
    let res = 0;

    // For every element of the array
    // except first and last element
    for (let i = 1; i < arrData.length - 1; i++) {
        let left = arr[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }

        let right = arr[i];
        for (let j = i + 1; j < n; j++) {
            right = Math.max(right, arr[j]);
        }

        res += Math.min(left, right) - arr[i];
    }
    return res;
}
let arr1234 = [0, 1, 0, 2, 1, 0,
    1, 3, 2, 1, 2, 1]
rainWater(arr1234)


function rainWater(tt) {
    let left = new Array(tt.length);
    let right = new Array(tt.length)
    let water = 0;
    left[0] = tt[0];
    for (let i = 1; i < tt.length; i++) {
        left[i] = Math.max(left[i - 1], tt[i])
    }
    right[right.length - 1] = tt[tt.length - 1]
    for (let i = tt.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], tt[i])
    }
    for (let i = 0; i < tt.length; i++) {
        water += Math.min(left[i], right[i]) - tt[i];
    }
    return water;
}
let tt = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
let gg123 = rainWater(tt)
console.log(gg123)





function chocketProbleam(arrtt, y) {
    arrtt = arrtt.sort((a, b) => a - b);
    console.log(arrtt)
    let i = 0;
    let j = i + y - 1;
    let k = arrtt.length - 1;
    let minDiff = 100;
    console.log(i, j, k)
    while (j <= k) {
        let diff = arrtt[j] - arrtt[i];
        console.log(diff, "diffff")
        minDiff = Math.min(diff, minDiff)
        i++;
        j++;
    }
    return minDiff;
}
let chocklet = [7, 3, 2, 4, 9, 12, 56]
let y = 3;
let ggg = chocketProbleam(chocklet, y);
console.log(ggg, "klk")



function NextGreaterElement(arr10) {
    let arr11 = [];
    let i = 0;

    while (i < arr10.length) {
        let j = i + 1;
        let found = false;

        while (j < arr10.length) {
            if (arr10[j] > arr10[i]) {
                arr11.push(arr10[j]);
                found = true;
                break;
            }
            console.log(j, "vondolfrrlrlrrl")
            j++;
        }

        if (!found) {
            arr11.push(-1);
        }
        console.log("opoppoppp")
        i++;
    }

    console.log(arr11, "arr11 is printing");
}

let arr10 = [4, 5, 2, 25];
NextGreaterElement(arr10);

function addSum(){
let maxLen = 0;
let sum = 0;
let hashMap = new Map();

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
    if (sum === 0) {
        maxLen = i + 1;
    } else {
        if (hashMap.has(sum)) {
            maxLen = Math.max(maxLen, i - hashMap.get(sum));
        } else {
            hashMap.set(sum, i);
        }
    }
}

return maxLen;
}














