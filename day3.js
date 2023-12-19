// object Big O
// object is an collection of key-valur pairs
// inserting deleting and accesing the data will be constant time complexity O(1)
// searching in the object will be linear O(n)
const object1 = {
  firstName: "Ajay",
  lastName: "shukla"
};
// object1.keys() object1.values() and object1.entries will be O(n) linear time complexity
console.log(object1);

// Array Big O
// Array is an ordered collection of values
//* insert or remove from the end of an array will be constant O(1)
// accesing in an array will be O(1)
//* insert or remove from the beginning of an array will be linear O(n)
// searching in an array will be O(n)

const odd = [1, 3, 5, 7, 9];
//# methods 
//* push/pop with be constant O(1)
//* shift, unshift, concat. slice, splice will be linear O(n)
//* forEach, map, filter and reduce is also linear O(n)
console.log(odd);