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
