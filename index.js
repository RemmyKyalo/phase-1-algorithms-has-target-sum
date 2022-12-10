function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const otherNumber = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === otherNumber) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2), 
  since it contains two nested for loops that each iterate through the elements of the array.
  
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Calculate the number we need to reach the target sum
    const otherNumber = target - array[i];
    // Iterate through the remaining elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // If we find a matching element, return true
      if (array[j] === otherNumber) {
        return true;
      }
    }
  }
  // If we reach this point, no matching elements were found
  // so we return false
  return false;
}

*/

/*
  Add written explanation of your solution here
   The hasTargetSum function takes in an array of numbers and a target sum as its arguments.
   It iterates through each element in the array, and for each element,
   it calculates the number that would need to be added to that element to reach the target sum.
   Then it iterates through the remaining elements in the array to see if any of them match the number calculated in the previous step. 
   If a matching element is found, the function returns true. 
   If the function reaches the end of the array without finding a matching element, 
   it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
