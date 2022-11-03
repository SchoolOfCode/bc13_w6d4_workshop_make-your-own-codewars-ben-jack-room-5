/* 
👉 Write your kata here!
Nightclub Array

Situation -
You're a nightclub owner and you're having trouble keeping under 18's out. Write a function that removes all of the people under the age of 18.


a = [
  { name: "James", age: 25 },
  { name: "John", age: 17 },
];

b = [{ name: "James", age: 25 }];

*/

// Tests input
const input = [
  {
    name: "Ben",
    age: 25,
  },
  {
    name: "John",
    age: 33,
  },
  {
    name: "Jack",
    age: 17,
  },
];

//👉 Write the function your CodeWarriors will start with below here:
function removeUnderage(array) {
  // code here

  // Loop over the array
  array.forEach((person) => {
    console.log(person);
  });
}

removeUnderage(input);
