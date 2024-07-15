function addSum(arr) {
   console.log(arr)
   let arr1 = arr.split('');
   let map = new Map();
   let j = 0;
   for (let i = 0; i < arr1.length; i++) {
      let isInterger;
      if (Number(arr1[i] % 2) == 0 && Number(arr[i + 1] % 2 == 0)) {
         isInterger = true;
      } else if (Number(arr1[i] % 2) !== 0 && Number(arr1[i + 1] % 2 !== 0)) {
         isInterger = false;
      }
      if (isInterger !== undefined && isInterger == true) {
         map.set(i, "*")
      } else if (isInterger == false) {
         map.set(i, "-")
      }
   }
   let str = '';
   for (let i = 0; i < arr1.length; i++) {
      if (map.has(i)) {
         let val = map.get(i);
         str += arr1[i];
         str += val;
         continue;
      }
      str += arr1[i];
   }
   return str;
}
let str = '454679364';
let dd = addSum(str)
console.log(dd)


function recentangleFinal(arr1234) {
   let arr4 = [];
   let map = {};
   let tt = '';
   for (let el of arr1234) {
      map[el] = (map[el] || 0) + 1;
   }
   for (let el in map) {
      tt += el.repeat(map[el]);
   }
   tt = tt.split('');
   console.log(tt.map(Number));
}
let arr1234 = [0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2]
let oio = recentangleFinal(arr1234)
console.log(oio)


function arrayChecking(arr1) {
   let i = 0;
   let k = arr1.length - 1;
   while (i <= k) {
      if (arr[i] == 0 && arr[k] == 0) {
         i++;
      } else if (arr[i] == 1 && arr[k] == 1) {
         k--;
      } else {
         if ((arr[i] == 0 && arr[k] == 1)) {
            i++;
            k--;
         } else {
            [arr1[k], arr1[i]] = [arr1[i], arr1[k]]
            i++;
            k--;
         }
      }
   }
   console.log(arr1)
}
let arr = [0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
arrayChecking(arr)

function flatternArray(arr1) {
   let sum = 0;
   let result = [];
   for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
         result = result.concat(arr1[i]);
         console.log(result, "resultopop")
      } else {
         result.push(arr1[i]);
      }
   }
   for (let i = 0; i < result.length; i++) {
      if (Number(result[i])) {
         sum += result[i];
      }
   }
   return sum;
}
let arr1 = [1, 2, 3, 4, [5, 'a', 'b', [1, 1]], [6, 2, 1, 'a', 'b']]
let ff = flatternArray(arr1)
console.log(ff)


// function printPrimeNumber(lower,higher)
// {
// for(let i=lower;i<=higher;i++)
// {    
// var flag=0;
// for(let j=2;j<i;j++)
// {
// if(i%j==0){
// flag=1;
// break;
// }
// }
// if(i>1 && flag==0){
// console.log(i);
// }
// }
// }
// var d=printPrimeNumber(1,10);
// console.log(d);


function printPrimeNumber(start, end) {
   for (let i = start; i <= end; i++) {
      let prime = true;
      for (let j = 2; j < i; j++) {
         if (i % j == 0) {
            prime = false;
            break;
         }
      }
      if (i > 0 && prime) {
         console.log(i, "popop")
      }

   }
}
let start = 1;
let end = 10;
printPrimeNumber(start, end)


function facotrialSeries(num) {
   if (num == 1) return num;
   return num * facotrialSeries(num - 1)
}
let num = 5;
let dd1 = facotrialSeries(num);
console.log(dd1)



function fabonaaciSeries(num) {
   if (num == 0) return num;
   if (num == 1) return num;
   return fabonaaciSeries(num - 1) + fabonaaciSeries(num - 2)
}
let num1 = 5;
let gg = fabonaaciSeries(num)
console.log(gg)
// 1,3,5,8


function binearySearch(arr123, b) {
   let left = 0;
   let right = arr123.length - 1;
   while (left <= right) {
      let mid = parseInt((left + right) / 2);
      let arraymid = arr123[mid];
      console.log(mid, "midddddddddd")
      if (b == arraymid) {
         return mid;
      } else if (arraymid > b) {
         right = mid - 1
      } else {
         left = mid + 1;
      }
   }
}
let arr123 = [2, 3, 4, 5, 6, 7]
let b = 5;
let gg12 = binearySearch(arr123, b)
console.log(gg12, "op")


function twoSum(arr, k) {
   let i = 0;
   while (i < arr.length) {
      let j = 0;
      while (j < arr.length) {
         if (i !== j) {
            let totalsum = arr[i] + arr[j];
            if (totalsum == k) {
               // return [arr[i],arr[j]]
               console.log(arr[i], arr[j], "olopp")
            }
         }
         j++;
      }
      i++;
   }
}
let arr4 = [0, -1, 2, -3, 1]
let x = 0;
let yy = twoSum(arr4, 0)
console.log(yy, "lop")



function binearyTwoSum(arr5) {

   arr5 = arr5.sort();
   let k = 0;
   console.log(arr5)
   for (let i = 0; i < arr5.length; i++) {
      console.log(arr5[i], arr5[i + 1], "kok")
      let totalsum = arr5[i] + arr5[i + 1];
      console.log(totalsum, k)
      if (totalsum == k) {
         console.log(arr5[i], arr5[i + 1], "dyaayayayay")
      }
   }
}
let arr5 = [0, -1, 2, 3, 1]
binearyTwoSum(arr5)

function lowestTimeComplexity(arr6, k) {
   for (let i = 0; i < arr6.length; i++) {
      let findInArrray = k - arr6[i];
      if (arr6.includes(findInArrray)) {
         return [arr6[i], findInArrray]
      }
   }
}
let arr6 = [0, -1, 2, 3, 1]
let y = 5;
let yy12 = lowestTimeComplexity(arr6, y)
console.log(yy12, "lopo123")


function findSortedArray(array, array1) {
  let map=new Map();
  for(let i=0;i<array.length;i++)
  {
   if(map.has(array[i])){
     map.set(array[i],map.get(array[i])+1)
  }else{
      map.set(array[i],1)
  }
}
console.log(map)
 for(let el of map){
   console.log("ellll",el[1])

 }
  
}
const array = [1, 5, 6, 7,7]
const array1 = [2, 3, 4, 5, 9]
findSortedArray(array, array1)


function startPrintingPattern(){
let str='';
let n=3;
for(let i=1;i<=3;i++)
{
str+=' '.repeat(n-i);
str+="*".repeat(2*i-1)+'\n';  
}
console.log(str)
}
startPrintingPattern()


function largestSubArraySumProbleam(arr111) {
   var currentSum = 0;
   var maximumLargest = -Infinity;
   for (let i = 0; i < arr111.length; i++) {
       currentSum = Math.max(currentSum + arr111[i], arr111[i])
       maximumLargest = Math.max(currentSum, maximumLargest)
   }
   return maximumLargest;
}
var arr111 = [-2, -3, 4, -1, -2, 1, 5, -3]
var fff = largestSubArraySumProbleam(arr111)
console.log(fff);
console.log("sgssgsgsgsgsgs")



function longestsubArray(arrtt){
console.log(arrtt,"arrttttttttttttttttt")






}
let arr34=[2, 3, 4, 2, 1, 1] 
longestsubArray(arr34)



















