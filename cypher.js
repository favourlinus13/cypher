let text = "abcdefghijklmnopqrstuvwxyz";
const normal = text.split("");
const normalReverse = text.split("").reverse();

// ENCRYPT FUNCTION

function encrypt(input) {
  if (input.split(" ").length > 1) {
    console.log("greater than one");
  } else {
    let inputArray = input.toLowerCase().split("");
    let output = [];

    for (let i = 0; i < inputArray.length; i++) {
      let count = inputArray[i];
      let match = normal.findIndex((item) => item === count);

      output.push(normalReverse[match]);
    }

    return output.join("");
  }
}

// DECRYPT FUNCTION
function decrypt(input) {
  if (input.split(" ").length > 1) {
    console.log("greater than one");
  } else {
    let inputArray = input.toLowerCase().split("");
    let output = [];

    for (let i = 0; i < inputArray.length; i++) {
      let count = inputArray[i];
      let match = normalReverse.findIndex((item) => item === count);

      output.push(normal[match]);
    }

    return output.join("");
  }
}


//ENCRYPT OR DECRYPT ANY SENTENCE OR WORD

function longText(input, encryptOrDecrypt) {
  let inputArray = input.toLowerCase().split(" ");
  let outputArray = inputArray.map((item) => {
    return encryptOrDecrypt(item);
  });
  let result = `\"${outputArray.join(" ")}\"`;

  console.log(result);
}

//longText("hxlgg fhvw gl yv z mznv uiln z blfmt nzm", decrypt);


