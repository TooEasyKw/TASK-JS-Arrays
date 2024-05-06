/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
}

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
}

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
}

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
}

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
}

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  // Your code here
}

function isArrayLengthOdd(numbers) {
  return numbers.length % 2 !== 0;
}

function isArrayLengthEven(numbers) {
  return numbers.length % 2 === 0;
}

function addLailaToArray(instructors) {
  return [...instructors, "Laila"];
}

function eliminateTeam(teams) {
  return teams.pop();
}

function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 !== 0) return [];
  const halfIndex = fruits.length / 2;
  return fruits.slice(halfIndex);
}

function youGottaCalmDown(shout) {
  const exclamationIndex = shout.indexOf("!");
  if (exclamationIndex === -1) return shout;
  return shout.slice(0, exclamationIndex + 1);
}

console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));

console.log(addLailaToArray(["Mshary", "Hasan"]));
console.log(addLailaToArray(["John"]));
console.log(addLailaToArray([]));

let teams1 = ["Brazil", "Germany", "Italy"];
let teams2 = ["Spain"];
let teams3 = [];
console.log(eliminateTeam(teams1));
console.log(teams1);
console.log(eliminateTeam(teams2));
console.log(teams2);
console.log(eliminateTeam(teams3));
console.log(teams3);

console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "blueberry",
  ])
);
console.log(secondHalfOfArrayIfItIsEven([]));
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange"]));

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));
console.log(youGottaCalmDown("No exclamations"));
