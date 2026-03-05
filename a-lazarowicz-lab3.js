// Adam Lazarowicz
// ITMD 441

// Exercise #1
function minMaxAverage(numbers) {
  let total = numbers.length;
  let min = numbers[0];
  let max = numbers[0];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {

    sum += numbers[i];

    if (numbers[i] < min) {
        min = numbers[i];
    }

    if (numbers[i] > max) {
        max = numbers[i];
    }

  }

  let average = sum / total;

  console.log("Total Numbers:", total,
                "Min Value:", min,
                "Max Value:", max,
                "Average:", average);
}

console.log("\nExercise #1\n");

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 8, 4, 5, 17, 12, 2, 9]);
minMaxAverage([10, 20, 30, 40, 50, 60]);

// Exercise #2
function countVowels(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    count++;
    }
  }
  
  return count;

}
console.log("\nExercise #2\n");

console.log("Soccer:", countVowels("Soccer"), "vowels");
console.log("Philanthropy:", countVowels("Philanthropy"), "vowels");
console.log("Hello World:", countVowels("Hello World"), "vowels");

// Exercise #3
function sortNumbers(arr) {
  return arr.slice().sort(function(a, b) {
    return a - b;
  });
}
console.log("\nExercise #3\n");

let arr1 = [10, 6, 8, 2];
console.log("Original Array:", arr1);
console.log("Sorted Array:", sortNumbers(arr1));

let arr2 = [14, 11, 21, 18];
console.log("Original Array:", arr2);
console.log("Sorted Array:", sortNumbers(arr2));

let arr3 = [25, 50, 75, 100];
console.log("Original Array:", arr3);
console.log("Sorted Array:", sortNumbers(arr3));

//Exercise #4
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  console.log(celsius.toFixed(1) + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit");
}
console.log("\nExercise #4\n");

celsiusToFahrenheit(35);
celsiusToFahrenheit(-10);
celsiusToFahrenheit(20);