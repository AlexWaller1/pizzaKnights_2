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
