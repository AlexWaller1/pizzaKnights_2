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
