/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const handbag = {
  color: 'silver',
  size: '40 cm',
  pocketNum: 3,
  strapLength: {
    left: 26,
    right: 26,
  },


}

console.log("Handbag: ", handbag);
console.log("Size: ", handbag);
console.log("Length: Left:"+ handbag.strapLength.left+ " Right: "+handbag.strapLength.right);