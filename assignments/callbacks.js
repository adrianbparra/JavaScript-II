// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr)
}
function length(arr) {
 return  arr.length;
}
console.log(getLength(items, length));


function last(arr, cb ) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
function calcLast(items) {
  return items[items.length -1];
}
console.log(last(items, calcLast));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  var price = x + y;
  return cb(price);
}

let cashTotal = sumNums(4, 2, (price) => `The total passed over is: ${price}`);
console.log(cashTotal);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  var total = x * y;
  return cb(total);
}

let multipleTotal = multiplyNums(3, 4, (total) => `The total multiplied is: ${total}`)
console.log(multipleTotal);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  var boolTest = list.includes(item);
  return cb(boolTest);
  
}

function test(bool) {
  if (bool) {
    return "The item was found!"
  } else {
    return "The item was not found"
  }
}

console.log(contains("Notebook",items, test));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicateRemoved = [];


  for(let x = 0; x < array.length; x++) {
    if (!duplicateRemoved.includes(array[x])) {
      duplicateRemoved.push(array[x]);
    }
  }
  return cb(duplicateRemoved)
}

function newDuplicateFree(arr) {
  return `The new duplicate free array is ${arr}`
}

console.log(removeDuplicates(items, newDuplicateFree))

