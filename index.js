function hasTargetSum(array, target) {
  if (array.length < 2) {
    return false;
  }
  array = array.sort((a, b) => a - b);

  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let sum = array[start] + array[end];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n * log(n)), where n is the length of the array.
  This is because the function sorts the array in ascending order using the Array.prototype.sort() method, 
  which has a time complexity of O(n * log(n)). Then, it iterates over the sorted array using two pointers,
  which has a time complexity of O(n), as the pointers will move towards each other at most n times. 
  The overall time complexity of the function is the time complexity of sorting the array plus the time 
  complexity of iterating over the sorted array, 
  which is O(n * log(n)) + O(n) = O(n * log(n)).
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
  // Return false if the array has fewer than 2 elements
  if (array.length < 2) {
    return false;
  }

  // Sort the array in ascending order
  array = array.sort((a, b) => a - b);

  // Use two pointers to iterate over the sorted array
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    // Calculate the sum of the elements at the pointers
    let sum = array[start] + array[end];

    // Return true if the sum is equal to the target
    if (sum === target) {
      return true;
    }

    // Move the pointers towards each other
    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  // Return false if the for loop has completed without returning true
  return false;
}

*/

/*
  Add written explanation of your solution here
    hasTargetSum() function takes an array and a target value as arguments, 
    and returns true if at least one pair of elements in the array has a sum of the target value.
    It first checks if the array has fewer than 2 elements, and if so, it returns false. 
    Then, it sorts the array in ascending order, using the Array.prototype.sort() method. 
    Next, it uses two pointers to iterate over the sorted array,
    calculating the sum of the elements at the pointers and moving the pointers towards each other 
    until the sum is equal to the target or the pointers meet.
    Finally, it returns true if the for loop has completed without returning true,
    indicating that no pair of elements in the array has a sum of the target value.
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
