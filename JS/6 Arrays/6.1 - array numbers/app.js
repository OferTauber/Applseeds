// Create array with numbers :
// const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array.\

const arr = [1, 7, 3, 0, -5, 7, 3, 9];

const printArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printArr(arr);
