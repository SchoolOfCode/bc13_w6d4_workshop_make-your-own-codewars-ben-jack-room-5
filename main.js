/* 
👉 Write your kata here!
Nightclub Array

Situation -
You're a nightclub owner and you're having trouble keeping under 18's out. Write a function that removes all of the people under the age of 18 and return an array of patrons who are legally allowed to partayyyy. 


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
  const correctAge = [];

  // Loop over the array
  array.forEach((person, index) => {
    if (person.age < 18) {
      array.splice(index, 1);
    } else {
      correctAge.push(person.name);
    }
  });
  console.log(correctAge);
  return correctAge;
}

removeUnderage(input);
