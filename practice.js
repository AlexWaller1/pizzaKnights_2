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
  for (let i = 1; i < nums2.length - 1; i++) {
    if (nums2[i] == nums2[i - 1] || nums2[i] == nums2[i + 1]) {
      rString = nums2[i];
    } else rString2 = nums2[i];
  }
  console.log(rString2);
}
