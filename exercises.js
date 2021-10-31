console.log("Hello");

function capitalizeFirstLetter(string1) {
  array1 = string1.split(" ");
  let i = 0;
  let stringConcat = "";
  for (; i < array1.length; i++) {
    let string2 = array1[i];

    string2 = string2.replace(
      string2.charAt(0),
      string2.charAt(0).toUpperCase()
    );

    stringConcat = stringConcat.concat(` ${string2}`);
  }
  console.log(stringConcat);
}

capitalizeFirstLetter("the flock of geese");
// The Flock Of Geese
capitalizeFirstLetter("the pack of dachshunds ran across the field");
// The Pack Of Dachshunds Ran Across The Field
capitalizeFirstLetter("gumby and pokey are great friends with lowbelly.");
// Gumby And Pokey Are Great Friends With Lowbelly.
console.log("---------------------------------------------------------");
console.log("----------------------------------------------------------");

const treeHybrid = {
  name: "Cornelius",
  hybridType: "Tree Hybrid",
  yearsOld: 1
};

const ramHybrid = {
  name: "Stacey",
  hybridType: "Ram Hybrid",
  yearsOld: 1
};

const troutHybrid = {
  name: "Brown",
  hybridType: "Trout Hybrid",
  yearsOld: 1
};

function objectToArray(objectA) {
  let i = 0;
  let objectArray = [];
  let values = "";
  let keys = "";
  let objectElement = "";
  for (; i < Object.values(objectA).length; i++) {
    values = Object.values(objectA)[i];
    keys = Object.keys(objectA)[i];
    objectElement = [keys, values];
    objectArray.push(objectElement);
  }
  console.log(objectArray);
}

objectToArray(treeHybrid);
// [['name', 'Cornelius'],
// ['hybridType', 'Tree Hybrid'],
// ['yearsOld', 1]]

objectToArray(ramHybrid);
// [['name', 'Stacey'],
// ['hybridType', 'Ram Hybrid'],
// ['yearsOld', 1]]

objectToArray(troutHybrid);
// [['name', 'Brown'],
// ['hybridType', 'Trout Hybrid'],
// ['yearsOld', 1]]

console.log("----------------------------------------");
console.log("----------------------------------------");

let nums1 = [1, 2, 2, 3, 3];

let nums2 = [1, 1, 2, 3, 3];

let nums3 = [1, 1, 2, 2, 3];

let nums4 = [37, 23, 23, 35, 35, 16, 16];

function singleAppearance(array1) {
  array1.sort();
  let rString = "";
  let rString2 = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array1[i - 1] || array1[i] == array1[i + 1]) {
      rString = array1[i];
    } else rString2 = array1[i];
  }
  console.log(rString2);
}

singleAppearance(nums1);
// 1
singleAppearance(nums2);
// 2
singleAppearance(nums3);
// 3
singleAppearance(nums4);
// 37

// singleAppearance is O(n) with linear runtime
// the longer the array is the longer it will
// take for function to run

console.log("--------------------------------------------------");
console.log("---------------------------------------------------");

const cartRacers = [
  {
    name: "Neo Cortex",
    cartColor: 0
  },
  {
    name: "Crash Bandicoot",
    cartColor: 2
  },
  {
    name: "Dingodile",
    cartColor: 1
  }
];

const colors = [2, 0, 1, 1, 0, 2, 0, 1, 0, 2, 1, 1];

function sortByColor(array2) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < array2.length; i++) {
      if (array2[i - 1] > array2[i]) {
        done = false;
        let arrange = array2[i - 1];
        array2[i - 1] = array2[i];
        array2[i] = arrange;
      }
    }
  }
  console.log(array2);
}

sortByColor(colors);
