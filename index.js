function ReverseString(str) {
    str = str.split(' ');
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i] = str[i].reverse();
        str2 += str[i].join('') + ' ';
    }
    return str2;
}
let str = 'I am the star person';
let ff = ReverseString(str);
console.log(ff);

function DisplayNumberInAccendingOrder(number) {
    let map = {};
    let string = '';
    let tot = [];
    for (let i = 0; i < number.length; i++) {
        map[number[i]] = (map[number[i]] || 0) + 1;
    }
    for (let el in map) {
        tot.push(el.repeat(map[el]));
    }
    for (let i = tot.length - 1; i >= 0; i--) {
        string += tot[i];
    }
    console.log(string)
}
let number = '454572390';
DisplayNumberInAccendingOrder(number)


function reverseAlphaBhat(yy) {
    let map = {};
    let oo = '';
    let pop = yy.split('');
    let ff = pop.sort();
    console.log(ff)

    for (let el of pop) {
        let charCode1 = el.charCodeAt(el);
        map[charCode1] = (map[charCode1] || 0) + 1;
    }
    console.log(map)
    for (let tot in map) {
        console.log(tot)
        let yy = String.fromCharCode(tot);
        oo += yy.repeat(map[tot]);
    }
    return oo;
}
let rr = 'qooaaBy';
let ll = reverseAlphaBhat(rr)
console.log(ll)


function onlyOneDigit(number) {
    while (number >= 10) {
        let sum = 0;
        number.toString().split('').forEach(digit => {
            sum += Number(digit);
        });
        number = sum;
    }
    return number;
}

let dd = 123456;
console.log(onlyOneDigit(dd));

function binearySearch(arr1, dd123) {
    let start = 0;
    let end = arr1.length - 1;
    while (end >= 0) {
        let mid = ((start + end) / 2);
        let middleValue = arr1[mid]
        if (middleValue == dd123) {
            return mid;
        } else if (middleValue > dd123) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
let arr = [3, 2, 1, 4, 5, 6, 7]
let dd123 = 7;
let oo = binearySearch(arr, dd123)
console.log(oo)

function primeNumber(num) {
    let isPrimse = false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrimse = true;
        }
    }
    if (isPrimse) {
        return "the number is primse number"
    } else {
        return "the number is not primse number"
    }
}
let num = 8;
let gg = primeNumber(num)
console.log(gg)

function seriesOfPrimseNumber(start, end) {
    if (start == 0) {
        start = 1;
    }
    for (let i = start; i <= end; i++) {
        console.log(i)

    }
}
let start = 0;
let end = 20;
seriesOfPrimseNumber(start, end)

function factorialSeries(bb) {
    let fac = 1;
    for (let i = 1; i <= bb; i++) {
        console.log(i, "kopoo")
        fac *= i;
    }
    return fac;
}
let num12 = 5;
let gg12 = factorialSeries(num12)
console.log(gg12)

function fabonaicSeries(lower, higher) {
    for (let i = lower; i <= higher; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i)
        }
    }
}
let lower = 1;
let higher = 20;
fabonaicSeries(lower, higher)

function printingStart(n) {

    console.log(n, "oooooooooooooooo---------------------------------")
    let str = '*';
    let space = ' ';
    for (let i = n; i > 0; i--) {
        console.log(space.repeat(n - i) + str.repeat(i * 2 + 1))
    }
}
let n = 4;
printingStart(n)

function comanElementFromArray(arr19, arr21) {
    let arr22 = new Set([...arr19])
    arr22 = Array.from(arr22)
    arr21 = new Set([...arr21])
    arr21 = Array.from(arr21)
    /*
    
    
    */
}
let arr19 = [1, 2, 3, 4, 5, 6]
let arr21 = [5, 6, 3, 100, 6, 3, 11]
comanElementFromArray(arr19, arr21)



// function findDetails(...arr1) {
//     let arr4 = [];
//     let arr9 = [];
//     let arr10 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i].gender == 'female' && arr1[i].percentage > '45') {
//             arr4.push({ percentage: Number(arr1[i].percentage), index: i })
//             arr4.sort((a, b) => b.percentage - a.percentage);
//         } else {
//             arr10.push({ percentage: Number(arr1[i].percentage), index: i })
//         }
//         console.log(arr4, 'okokokokoo')
//         console.log(arr10, 'plplpllpll')
//         arr4 = arr4.concat(arr10)
//     }
//     for (let i = 0; i < arr4.length; i++) {
//         console.log(arr4[i].index)
//         arr9.push(arr1[arr4[i].index])
//     }
//     console.log(arr9);








// }
// let array = [
//     {
//         "name": "ashish",
//         "gender": "male",
//         "percentage": "44.7"
//     },
//     {
//         "name": "anamika",
//         "gender": "female",
//         "percentage": "46.7"
//     },
//     {
//         "name": "kush",
//         "gender": "male",
//         "percentage": "49.7"
//     },
//     {
//         "name": "Ritu",
//         "gender": "female",
//         "percentage": "45.7"
//     },
//     {
//         "name": "visvjit",
//         "gender": "male",
//         "percentage": "90.9"
//     },
//     {
//         "name": "Reena",
//         "gender": "female",
//         "percentage": "75"
//     },
//     {
//         "name": "Savrupa",
//         "gender": "female",
//         "percentage": "80"
//     },
//     {
//         "name": "rups",
//         "gender": "female",
//         "percentage": "90"
//     },

// ];
// findDetails(...array)


// function findDuplicates(rr1234) {
//     let map = new Map();
//     for (let i = 0; i < rr1234.length; i++) {
//         let name = rr1234[i].name;
//         if (!map.has(name)) {
//             map.set(name, {
//                 name: rr1234[i].name,
//                 gender: rr1234[i].gender,
//                 percentage: [Number(rr1234[i].percentage)]
//             })
//         }else{
//             console.log(map.get(name))
//              map.get(name).percentage.push(Number(rr1234[i].percentage))
//         }

//     }
//     let values=Array.from(map.values())
//     for(let i=0;i<values.length;i++){
//         if(values[i].percentage.length==1){
//             values[i].percentage=values[i].percentage[0]
//         }
//     }
//     console.log(values,"valuessss")
// }
// let rr1234 = [
//     { "name": "ashish", "gender": "male", "percentage": "44.7" },
//     { "name": "anamika", "gender": "female", "percentage": "46.7" },
//     { "name": "anamika", "gender": "female", "percentage": "90.7" },
//     { "name": "kush", "gender": "male", "percentage": "49.7" },
//     { "name": "ashish", "gender": "male", "percentage": "49.7" },
//     { "name": "ashish", "gender": "male", "percentage": "89.7" },
//     { "name": "Ritu", "gender": "female", "percentage": "45.7" }
// ];
// findDuplicates(rr1234)






function addDetails(rr12345) {
    let map = new Map();

    for (let i = 0; i < rr12345.length; i++) {
        if (!map.has(rr12345[i].name)) {
            map.set(rr12345[i].name, {
                name: rr12345[i].name,
                gender: rr12345[i].gender,
                percentage: rr12345[i].percentage
            })
        } else {
            continue;
        }
    }
    let ggg = Array.from(map.values());
    console.log(ggg)
}
let rr12345 = [
    { "name": "ashish1234", "gender": "male", "percentage": "44.7" },
    { "name": "anamika", "gender": "female", "percentage": "46.7" },
    { "name": "anamika", "gender": "female", "percentage": "90.7" },
    { "name": "kush", "gender": "male", "percentage": "49.7" },
    { "name": "ashish1234", "gender": "male", "percentage": "49.7" },
    { "name": "ashish1234", "gender": "male", "percentage": "89.7" },
    { "name": "Ritu", "gender": "female", "percentage": "45.7" }
];
addDetails(rr12345)


function sumArrayElements(arr) {
    let sum = 0;

    function recursiveSum(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (Array.isArray(subArray[i])) {
                recursiveSum(subArray[i]);
            } else if (typeof subArray[i] === 'number') {
                sum += subArray[i];
            }
        }
    }

    recursiveSum(arr);
    return sum;
}

let arr0 = [1, 2, ['a', 'b'], [9, 'k', 'l'], [4, [6, 'q']],1];
console.log(sumArrayElements(arr0));

















































































