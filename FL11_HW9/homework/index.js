//Task 0
function getNumbers (str) {    
    let reg = /\d/g;
    return str.match(reg) || [];
}
let nums = getNumbers('У меня есть 1 кошка, 4 плюшевых собаки, 10 декоративно-лиственных цветов и 34 орхидеи');
let justStr = getNumbers('Hello');

//Task 1
function findTipes (...allParams) {
    let obj = {};
    for (let i = 0; i < allParams.length; i++) {
        let nameProp = typeof allParams[i];
        let namePropStr = String(nameProp);        
        if(obj.hasOwnProperty(namePropStr)) {            
            obj[namePropStr] = obj[namePropStr] + 1;
        } else {            
            Object.defineProperty(obj, namePropStr, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 1
            });
        }
    }
    return obj;        
}
//let second = findTipes(8, 'hello', 'world', null, 7, 14, true);

//Task 2
function consOutput (el) {
    console.log(el);
}
function executeforEach (mass, callback) {
    for (let i = 0; i < mass.length; i++) {
        callback(mass[i]);
    }    
}
//executeforEach([4, 5, 6], consOutput);

//Task 3
function plus3 (el) {
    const three = 3;
    return el + three;
}
function mapArray (arr, foo) {
    let newarr = [];    
    executeforEach(arr, (counter) => newarr.push(foo(counter)) );      
    return newarr;
}
//let arr3 = mapArray([2, 5, 8, 12], plus3);

//Task 4
function more3 (el) {
    const three = 3;
    return el > three;
}
function filterArray (arr, foo) {
    let newarr = [];    
    executeforEach(arr, function(counter) {
        if (foo(counter)) {
            newarr.push(counter);
        } 
    })  
    return newarr;
}
//let arr4 = filterArray([1, 2, 5, 8, 11], more3);

//Task 5
function showFormattedDate(dateStr) {
    let dateP = new Date(Date.parse(dateStr));    
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    return `Date: ${dateP.toLocaleDateString('en-GB', options)}`;    
}
let ex5 = showFormattedDate(new Date('2019-01-27T01:10:00'));
let example5 = showFormattedDate(new Date('1987-08-20T01:10:00'));

//Task 6
function canConvertToDate(strDate) {
    let dateCan = new Date(Date.parse(strDate));
    console.log(dateCan);    
    if (!Date.parse(strDate)) {
        return false;
    } else {
        return true;
    }
}
//let first6 = canConvertToDate('2016-03-18T00:00:00');
//let second6 = canConvertToDate('2016-13-18T00:00:00');

//Task 7 
function daysBetween (date1, date2) {
    const sec = 1000;
    const min = 60;
    const hour = 60;
    const day = 24;
    let firstDate = new Date(date1).getTime();
    let secondDate = new Date(date2).getTime();    
    let msDiff = Math.abs(firstDate - secondDate);
    let daysDiff = Math.round(msDiff / (sec * min * hour * day));
    return daysDiff;
}
let seven1 = daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));
let seven2 = daysBetween(new Date('2019-03-18T00:00:00'), new Date('2019-05-20T00:00:00'));

//Task 8
let arrForTask8 = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getAmountOfAdultPeople(enterData) {
    const adulthood = 6570;
    let today = new Date().toISOString();    
    let count = 0;
    filterArray(enterData, function(i) {
        if (daysBetween(new Date(i.birthday), new Date(today)) > adulthood) {
            count = count + 1;
        }
    });    
    return count;    
}
let t8 = getAmountOfAdultPeople(arrForTask8);

//Task 9
let objForTask9and10 = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
}
function keys (arr) {
    let mas = [];
    for (let key in arr) {
        mas.push(key);
    }
    return mas;
}
let t9 = keys(objForTask9and10);

//Task 10
function values (arr) {
    let mas = [];
    for (let key in arr) {        
        mas.push(arr[key]);
    }
    return mas;
}
let t10 = values(objForTask9and10);