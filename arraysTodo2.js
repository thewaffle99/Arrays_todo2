arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2 = [16, 12, 35];
shiftBy = 3;
min = 3;
max = 6;

function reverseArray(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// console.log(reverseArray(arr));

function rotateArray(arr, shiftBy) {
  if (shiftBy >= 0) {
    for (var x = 0; x < shiftBy; x++) {
      let temp = arr[arr.length - 1];
      for (var i = arr.length - 1; i > -1; --i) {
        if (i >= 1) {
          arr[i] = arr[i - 1];
        } else {
          arr[i] = temp;
        }
      }
    }
    return arr;
  } else {
    for (var x = 0; x < shiftBy; x++) {
      let temp = arr[arr.length - 1];
      for (var i = arr.length - 1; i > -1; --i) {
        if (i >= 1) {
          arr[i] = arr[i - 1];
        } else {
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
}

// console.log(rotateArray(arr, shiftBy));
//take arr
// temp var for moving variables
// take negative values

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// shiftBy = 3;
// min = 3;
// max = 6;

function filterRange(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      for (let x = i + 1; x < arr.length; x++) {
        arr[x - 1] = arr[x];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
  //loop through the arr
  //compare the num in arr to min if less than delete
  //compare to the max if greater delete
}

// console.log(filterRange(arr, min, max));

function concatMyself(arr, arr2) {
  temp = [...arr, ...arr2];
  return temp;
}

console.log(concatMyself(arr, arr2));
