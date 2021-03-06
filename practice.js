console.log("Hi, Bodhi!");

let object1 = {
  color1: "blue",
  color2: "red",
  color3: "yellow"
};

console.log(Object.keys(object1));
// ['color1', 'color2', 'color3']
console.log(Object.values(object1));
// ['blue', 'red', 'yellow']
console.log(Object.values(object1)[1]);
// red
console.log(Object.values(object1).length);
// 3

let nums = [1, 2, 3, 4, 5, 6];

if (nums[0] == 1) {
  let i = 0;
  let innerArray = [];

  for (; i < Object.values(object1).length; i++) {
    values = Object.values(object1)[i];
    keys = Object.keys(object1)[i];
    let objectElement = [`${keys}, ${values}`];
    innerArray.push(objectElement);
  }
  console.log(innerArray);
}

let nums2 = [1, 1, 2, 3, 3];

if (nums2[1] == 1) {
  let rString = "";
  let rString2 = "";
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] == nums2[i - 1] || nums2[i] == nums2[i + 1]) {
      rString = nums2[i];
    } else rString2 = nums2[i];
  }
  console.log(rString2);
}

const unSorted = [9, 7, 12, 11];
console.log(unSorted);
// [9, 7, 12, 11]
unSorted.unshift(5);
console.log(unSorted);
// [5, 9, 7, 12, 11]
unSorted.push(1);
console.log(unSorted);
// [5, 9, 7, 12, 11, 1]
unSorted.splice(0, 1, 3);
console.log(unSorted);
unSorted.splice(1, 1, 7);
unSorted.splice(2, 0, 9);
console.log(unSorted);

const unSorted2 = [5, 3, 3, 4, 2, 7];
let uniq = [...new Set(unSorted2)];
console.log(uniq);

const numbers3 = [5, 3, 15, 12, 18, 16];
console.log(numbers3);
numbers3.splice(1, 0, 4);
console.log(numbers3);
numbers3.splice(1, 0, 16);
console.log(numbers3);

if (3 > 1) {
  let i = 0;
  let uniq3 = "";
  for (; i < numbers3.length; i++) {
    if (numbers3[i] < numbers3[i - 1]) {
      console.log("Hello");
      numbers3.splice(numbers3[i - 1], 0, numbers3[i]);
    }
  }
  console.log(numbers3);
}

let rTest = [1, 3, 2];
rTest.splice(1, 0, rTest[2]);
console.log(rTest);

if (37 > 34) {
  let i = 0;
  let j = i + 1;
  for (; i < numbers3.length; i++) {
    for (; j < numbers3.length; j++) {
      if (i > j) {
      }
    }
  }
}
b = 0;
console.log;
a = 1;
b = a;
console.log(b);
b = 2;
console.log(b);

const robots = [
  "Green Egg",
  "Hank-44",
  "Warren-21",
  "Mellon-Tech",
  "Eggplant-Head"
];

let robot1 = robots[0];
robots[0] = robots[3];
console.log(robots[0]);
robots[3] = robot1;
console.log(robot1);

const r1 = [2, 1, 11, 7, 4, 5];

console.log(robots[0]);
console.log(robots[3]);

if (robots[3] == "Green Egg") {
  let i = 0;
  for (; i < r1.length; i++) {
    if (r1[i] > r1[i + 1]) console.log(true);
    else console.log(false);
  }
}

console.log(robots[1]);
// Hank-44
console.log(robots[2]);
// Warren-21
robots[1] = robots[2];

console.log(robots[1]);
// Warren-21
console.log(robots[2]);

const r2 = [4, 2, 1, 3];
r2.splice(0, 0, r2[1]);

console.log(r2);
console.log("--------------------------------");
console.log("---------------------------------");

const moneyBags = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7]
];

if (9 > 2) {
  moneyBags.forEach(function (money1) {
    console.log(money1);
    let sum = 0;
    let sumArray = [];
    for (let i = 0; i < money1.length; i++) {
      let money2 = money1[i];
      sum = sum + money2;
      sumArray.push(sum);
    }
    console.log(sumArray);
    let max = sumArray[0];
    for (let j = 0; j < sumArray.length; j++) {
      if (sumArray[j] > max) {
        max = sumArray[j];
      }
    }
    console.log(max);
  });
}

console.log("--------------------------------");
console.log("---------------------------------");

let scoobyDoo = {
  name: "Scooby Doo",
  bestFriend: "Shaggy",
  vehicle: "Mystery Van"
};
console.log(Object.keys(scoobyDoo));
// ['name', 'best friend', 'vehicle']
console.log(Object.values(scoobyDoo));
// ['Scooby Doo', 'Shaggy', 'Mystery Van']
console.log(Object.values(scoobyDoo).length);
// 3
let scooby2 = Object.values(scoobyDoo).length;
console.log(scooby2);
Object.assign(scoobyDoo, { career: "Mystery Solver" });
console.log(scoobyDoo);

if (44 > 42) {
  let i = 0;
  let keys = "";
  let values = "";
  let newObject = {};
  for (; i < scooby2; i++) {
    keys = Object.keys(scoobyDoo);
    values = Object.values(scoobyDoo);
    newObject[keys] = values;
  }
  console.log(newObject);
}

let a1 = "newKey";
let b1 = {};
b1[a] = 20;
console.log(b1);

const crashBandicoot = {
  name: "Crash Bandicoot",
  species: "Bandicoot",
  favoriteThing: "Cart Racing"
};

console.log(crashBandicoot);

function addKeyValue(key, value, object) {
  let newPair = { [key]: value };
  Object.assign(object, newPair);
  console.log(object);
}

addKeyValue("rival", "Cortex", crashBandicoot);
// added new key value pair to crashBandicoot

const roboClones = [
  "Hank-44",
  "Mellon-Tech",
  "Warren-21",
  "Warren-21",
  "Mellon-Tech",
  "Eggplant-Head",
  "Hank-44"
];

console.log(roboClones[1]);
// Mellon-Tech
const bandicoot = [
  "Crash Bandicoot",
  "Cortex",
  "Spyro",
  "Dingodile",
  "Shifty",
  "N. Ginn",
  "Tiny Tiger",
  "Crunch Bandicoot"
];

console.log(bandicoot);

if (bandicoot[1] == "Cortex") {
  let i = 0;
  for (; i < bandicoot.length; i++) {
    if (i <= 4) {
      console.log(`${bandicoot[i]} is an awesome
          character`);
      // Crash Bandicoot is an awesome character
      // Cortex is an awesome character
      // Spyro is an awesome character
      // Dingodile is an awesome character
      // Shifty is an awesome character
    }
  }
}

console.log(bandicoot[3]);
// Dingodile

if (bandicoot[3] == "Dingodile") {
  let a2 = 3;
  let b2 = 5;
  let c2 = "";

  c2 = a2;
  // remember assignment happens with variable on the
  // left and value on the right
  console.log(c2);
  // 3
  console.log(a2);
  // 3
  a2 = b2;
  console.log(a2);
  // 5
  b2 = c2;
  console.log(b2);
  // 3
}

let t1 = [37, 44];
let t2 = [25, 16];
let t3 = [9, 2];
let t4 = [62, 49];
let t6 = [307, 224];
let t7 = [33, 45, 6];

function switchingValues(array2) {
  let i = 0;
  let temporary = 0;
  for (; i < array2.length; i++) {
    if (array2[i] > array2[i + 1]) {
      temporary = array2[i];
      array2[i] = array2[i + 1];
      array2[i + 1] = temporary;
    }
  }
  console.log(array2);
}

switchingValues(t1);
// [37, 44]
switchingValues(t2);
// [16, 25]
switchingValues(t3);
// [2, 9]
switchingValues(t4);
// [49, 62]
switchingValues(t6);
// [224, 307]
switchingValues(t7);
// [33, 6, 45]
// this great to know but is important to know that
// without the other code it will only make one switch

// Types of Triangles

// By Side
// Equilateral - 3 equal sides, all angles are 60 degrees
// Isosceles - 2 equal sides, 2 equal angles
// Scalene - no equal sides, no equal angles

// By Angle
// Right - 1 angle = 90 degrees
// Acute - all angles less than 90 degrees
// Obtuse - 1 angle greater than 90 degrees

const triangles = [
  {
    name: "triangle-1",
    sideLengths: [4, 4, 9],
    angles: [70, 70, 40]
  },
  {
    name: "triangle-2",
    sideLengths: [11, 11, 11],
    angles: [60, 60, 60]
  },
  {
    name: "triangle-3",
    sideLengths: [12, 14, 16],
    angles: [90, 50, 40]
  }
];

function equilateralTester(array1) {
  let t = 0;
  let testTri = "";
  let rString = "";
  for (; t < array1.length; t++) {
    testTri = array1[t];
    if (
      testTri.angles[0] == testTri.angles[1] &&
      testTri.angles[1] == testTri.angles[2] &&
      testTri.angles[0] == testTri.angles[2]
    ) {
      rString = `${testTri.name} is an Equilateral Triangle`;
    }
    console.log(rString);
  }
}

equilateralTester(triangles);
// triangle-2 is an Equilateral Triangle

const trapezoids = [
  {
    name: "trapezoid-1",
    aBase: 4,
    bBase: 9,
    height: 5
  },
  {
    name: "trapezoid-2",
    aBase: 12,
    bBase: 34,
    height: 10
  },
  {
    name: "trapezoid-3",
    aBase: 20,
    bBase: 30,
    height: 22
  }
];

function trapezoidArea(array1) {
  let i = 0;
  let trapezoid = "";
  let area = 0;

  for (; i < array1.length; i++) {
    trapezoid = array1[i];
    area = ((trapezoid.aBase + trapezoid.bBase) / 2) * trapezoid.height;
    console.log(`The area of ${trapezoid.name} 
        is ${area}`);
  }
}

trapezoidArea(trapezoids);
// The area of trapezoid-1 is 32.5
// The area of trapezoid-2 is 230
// The area of trapezoid-3 is 550

console.log("a" < "b");
// true
console.log("z" > "v");
// true
console.log("m" > "q");
// false
console.log("n" == "n");
// true
console.log("e" == "f");
// false

console.log(bandicoot.indexOf("Dingodile"));
// 3
console.log(bandicoot[3]);
// Dingodile
console.log(bandicoot[1]);
// Cortex

if (bandicoot[3] == "Dingodile") {
  let crash1 = bandicoot
    .filter(function (crash2) {
      return crash2 == "Dingodile";
    })
    .map(function (crash3) {
      return crash3;
    });
  console.log(crash1);
  // ['Dingodile']
}

if (bandicoot[1] == "Cortex") {
  let crash1 = bandicoot
    .filter(function (crash2) {
      return crash2 == "Crunch Bandicoot";
    })
    .map(function (crash3) {
      return crash3;
    });
  console.log(crash1);
  // ['Crunch Bandicoot']
}

console.log(bandicoot[0].includes("Bandicoot"));
// true
console.log(bandicoot.indexOf("Crunch Bandicoot"));
// 7
console.log(bandicoot.indexOf("Rogue Trooper"));
// -1

if (bandicoot[7] == "Crunch Bandicoot") {
  let i = 0;
  const newBandicoot = [];
  let crash1 = "";
  for (; i < bandicoot.length; i++) {
    crash1 = bandicoot[i];
    if (crash1.includes("Bandicoot")) {
      newBandicoot.push(crash1);
    }
  }
  console.log(newBandicoot);
  // ['Crash Bandicoot', 'Crunch Bandicoot']
}

const zeroOne = [1, 2, 0, 3, 0, 9];

if (bandicoot[0] == "Crash Bandicoot") {
  let i = 0;
  let min = zeroOne[0];
  for (; i < zeroOne.length; i++) {
    if (zeroOne[i] < min) {
      min = zeroOne[i];
    }
  }
  console.log(min);
  // 0
}

if (bandicoot[1] == "Cortex") {
  let i = 0;
  let min = zeroOne[0];
  let newZero = [];
  let index = zeroOne.indexOf(min);
  let z1 = "";
  for (; i < zeroOne.length; i++) {
    z1 = zeroOne[i];
    if (z1 < min) {
      min = z1;
    }
    while (zeroOne.length != 0) {
      newZero.push(min);
      zeroOne.splice(index, 1);
    }
  }
  console.log(newZero);
  console.log(zeroOne);
  console.log(min);
}

const test4 = [1, 2, 3, 4, 5];
test4.splice(1, 1);
console.log(test4);
// [1, 3, 4, 5]
test4.splice(1, 0, 2);
console.log(test4);
// [1, 2, 3, 4, 5]
test4.splice(test4.length, 0, 6);
console.log(test4);
// [1, 2, 3, 4, 5, 6]

console.log(bandicoot[4]);
// Shifty
console.log(bandicoot[4 + 1]);
// N. Ginn

const rogueTrooper = {
  name: "Rogue Trooper",
  army: "The Southers",
  rank: "Genetic Infantryman"
};

let rogueTrooper2 = {
  planet: "Nu Earth"
};

Object.assign(rogueTrooper, rogueTrooper2);
// adds key-value pair to object

console.log(rogueTrooper);

function keyValue2(key, value, object) {
  let newPair = { [key]: value };
  Object.assign(object, newPair);
  console.log(object);
}

keyValue2("adversary", "The Norts", rogueTrooper);

/* 

{name: 'Rogue Trooper', army: 'The Southers', 
rank: 'Genetic Infantryman', planet: 'Nu Earth', 
adversary: 'The Norts'}

*/

keyValue2("combatZone", "The Quartz Zone", rogueTrooper);
// {combatZone: "The Quartz Zone"} added to rogueTrooper
keyValue2("friends", ["Gunnar", "Helm", "Bagman"], rogueTrooper);
// friends: (3) ['Gunnar', 'Helm', 'Bagman']

console.log(rogueTrooper.friends);
// ['Gunnar', 'Helm', 'Bagman']
console.log(rogueTrooper.friends[0]);
// Gunnar
console.log(rogueTrooper.friends[1]);
// Helm
console.log(rogueTrooper.friends[2]);
// Bagman

const reverseNums = [37, 67, 21, 45, 917];
let crash2 = "bandicoot";
// crarsh2 = crash2.reverse();
console.log(crash2);

if (bandicoot[1] == "Cortex") {
  let i = 0;
  const reverse2 = [];
  for (; i < reverseNums.length; i++) {
    let reverse = reverseNums[i];
    reverse = reverse.toString();
    reverse = reverse.split("");
    reverse = reverse.reverse();
    reverse = reverse.join("");
    reverse = parseInt(reverse);
    console.log(reverse);
    reverse2.push(reverse);
  }
  console.log(reverse2);
  // [73, 76, 12, 54, 719]
}

console.log(bandicoot[2]);
// Spyro
console.log(bandicoot[3]);
// Dingodile

const numsDuplicate = [1, 1, 37, 44, 44, 45, 75, 75, 76];

const rogueDuplicate = [
  "Rogue Trooper",
  "Rogue Trooper",
  "Gunnar",
  "Helm",
  "Helm",
  "Bagman",
  "Bagman"
];

function removeDuplicates(array) {
  let array2 = [...new Set(array)];
  console.log(array2);
}

removeDuplicates(numsDuplicate);
// [1, 37, 44, 45, 75, 76]
removeDuplicates(rogueDuplicate);
// ['Rogue Trooper', 'Gunnar', 'Helm', 'Bagman']
console.log(numsDuplicate);
// [1, 1, 37, 44, 44, 45, 75, 75, 76]
console.log(rogueDuplicate);

if (bandicoot[0] == "Crash Bandicoot") {
  let i = 9;
  let countDown = [];
  while (i > 0) {
    countDown.push(i);
    i--;
  }
  console.log(countDown);
  // [9, 8, 7, 6, 5, 4, 3, 2, 1]
}

if (bandicoot[1] == "Cortex") {
  let i = 9;
  let countDown = [];
  while (i > 0) {
    if (i % 2 == 0) {
      countDown.push(i);
    }
    i--;
  }
  console.log(countDown);
  // [8, 6, 4, 2]
}

console.log(bandicoot[2]);
// Spyro

if (bandicoot[2] == "Spyro") {
  let i = 0;
  let noDuplicates = [];
  while (i < numsDuplicate.length) {
    if (numsDuplicate[i] != numsDuplicate[i + 1]) {
      noDuplicates.push(numsDuplicate[i]);
    }
    i++;
  }
  console.log(noDuplicates);
}

function removeDuplicates2(array1) {
  array1.sort();
  let i = 0;
  let noDuplicates = [];
  while (i < array1.length) {
    if (array1[i] != array1[i + 1]) {
      noDuplicates.push(array1[i]);
    }
    i++;
  }
  console.log(noDuplicates);
}

removeDuplicates2(numsDuplicate);
// [1, 37, 44, 45, 75, 76]

removeDuplicates2(rogueDuplicate);
// ['Bagman', 'Gunnar', 'Helm', 'Rogue Trooper']

removeDuplicates2(roboClones);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']

console.log("Hammerhead" < "Wibaux");
// true
let unSort = [37, 55, 23, 11];

console.log(bandicoot[6]);
// Tiny Tiger
if (bandicoot[6] == "Tiny Tiger") {
  let i = 0;
  let temp = 0;
  while (i < unSort.length) {
    if (unSort[i] > unSort[i + 1]) {
      temp = unSort[i];
      unSort[i] = unSort[i + 1];
      unSort[i + 1] = temp;
    }
    i++;
  }
  console.log(unSort);
}

console.log(bandicoot[5]);
// N. Ginn

console.log(bandicoot[4]);
// Shifty

console.log(bandicoot[3]);
// Dingodile

console.log(parseInt("7-"));
// 7

const timberTron = ["Timber-Tron", "Io_Timber", "Tim"];

if (timberTron[0] == "Timber-Tron") {
  let commonString = timberTron[0];
  let i = 1;
  for (; i < timberTron.length; i++) {
    while (!timberTron[i].includes(commonString)) {
      commonString = commonString.substring(0, commonString.length - 1);
    }
  }
  console.log(commonString);
  // Tim
}

function commonSubstring(array1) {
  if (array1.length < 2) console.log("Not Enough Elements");
  let commonStr = array1[0];
  let i = 1;
  for (; i < array1.length; i++) {
    while (!array1[i].includes(commonStr)) {
      commonStr = commonStr.substring(0, commonStr.length - 1);
      if (commonStr.length == 0) console.log("No Common Substring");
    }
  }
  console.log(commonStr);
}

commonSubstring(timberTron);
// Tim

const emptyArray = [];

commonSubstring(emptyArray);
// Not Enough Elements

commonSubstring(robots);
// No Common Substring

commonSubstring(bandicoot);
// No Common Substring

const duplicates = [1, 1, 2, 2, 3, 3, 4, 4];

if (bandicoot[3] == "Dingodile") {
  let i = 0;
  for (; i < duplicates.length; i++) {
    if (duplicates[i] == duplicates[i - 1]) {
      duplicates.splice(i, 1);
    }
  }
  console.log(duplicates);
  // [1, 2, 3, 4]
}

console.log("-------------------------");
console.log(numsDuplicate);

function removeDuplicates3(array) {
  array.sort();
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] == array[i - 1]) {
      array.splice(i, 1);
    }
  }
  console.log(array);
}

const replicas1 = [2, 2, 4, 4, 6, 6];

const replicas2 = [12, 12, 25, 25, 24];

const replicas3 = [3, 9, 3, 12, 4, 12];

const replicas4 = [34, 22, 23, 22, 34, 12, 12, 9];

removeDuplicates3(replicas1);
// [2, 4, 6]

removeDuplicates3(replicas2);
// [12, 24, 25]

removeDuplicates3(replicas3);
// [12, 3, 4, 9]

removeDuplicates3(replicas4);
// [12, 22, 23, 34, 9]

console.log(replicas4.sort());

const replicas5 = [34, 22, 23, 22, 34, 12, 12, 9];
console.log(replicas5.sort());
// [12, 12, 22, 22, 23, 34, 34, 9]
// not sure why 9 is not sorted

const letters1 = ["a", "z", "r", "f", "g", "b", "v"];
console.log(letters1.sort());
// ['a', 'b', 'f', 'g', 'r', 'v', 'z']
