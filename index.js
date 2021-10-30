//--Heap algorithm
const getPermutations = (arr) => {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

//- main task
const objectJson = {
  urlObject: [
    "c2RlJTQwZ21haWwuY29tLVhqS0dsSTdSYXNYRHhZeGwmZW50cn",
    "lwUUxTZS1nQUx1eFBKanJPVEZ2MnpCX0FSQVFBbEtGRHlYdTVS",
    "kuMTk1NDA1MDMwND1tYXN1bS5zZGVAZ21haWwuY29t",
    "b2xHcGxablNvLUw2akFBL3ZpZXdmb3JtP3VzcD1wcF91cmwmZW",
    "50cnkuMTAxMzkwOTE1PVVia0hzbmlPSGRieW5WODUtbWFzdW0u",
  ],
};
const rootUrl = "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQU";
const finalEncodedData = getPermutations(objectJson.urlObject).map((itemArray) => {
  itemArray.unshift(rootUrl);
  return itemArray;
});

//--getting all possible decoded link
finalEncodedData.map((item) => {
  const decodeData = new Buffer(item.join(), "base64");
  const websiteLink = decodeData.toString();
  console.log(websiteLink);
});
