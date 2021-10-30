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
