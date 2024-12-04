let str = " doo, doo, doo, doo, doo, doo.";
let arr = [
  "Baby shark",
  "Mommy shark",
  "Daddy shark",
  "Grandma shark",
  "Grandpa shark",
  "Let's go hunt",
  "Run away",
  "Safe at last",
  "It's the end",
];

arr.map((i) => {
  for (let j = 1; j < 5; j++) {
    if (j <= 3) {
      console.log(i + "," + str);
    } else {
      console.log(i + "!");
    }
  }
});
// for (let i = 0 ; i < arr.length-1 ; i++) {
//     for (let j = 1 ; j < 5 ; j++) {
//         if(j<= 3) {
//             console.log(arr[i] + "," + str)
//         } else {
//             console.log(arr[i] + "!")
//         }
//     }
// }
// Baby shark, doo, doo, doo, doo, doo, doo.

// Baby shark, doo, doo, doo, doo, doo, doo.

// Baby shark, doo, doo, doo, doo, doo, doo.

// Baby shark!

// Mommy shark, doo, doo, doo, doo, doo, doo.

// Mommy shark, doo, doo, doo, doo, doo, doo.

// Mommy shark, doo, doo, doo, doo, doo, doo.

// Mommy shark!

// Daddy shark, doo, doo, doo, doo, doo, doo.

// Daddy shark, doo, doo, doo, doo, doo, doo.

// Daddy shark, doo, doo, doo, doo, doo, doo.

// Daddy shark!

// Grandma shark, doo, doo, doo, doo, doo, doo.

// Grandma shark, doo, doo, doo, doo, doo, doo.

// Grandma shark, doo, doo, doo, doo, doo, doo.

// Grandma shark!

// Grandpa shark, doo, doo, doo, doo, doo, doo.

// Grandpa shark, doo, doo, doo, doo, doo, doo.

// Grandpa shark, doo, doo, doo, doo, doo, doo.

// Grandpa shark!

// Let's go hunt, doo, doo, doo, doo, doo, doo.

// Let's go hunt, doo, doo, doo, doo, doo, doo.

// Let's go hunt, doo, doo, doo, doo, doo, doo.

// Let's go hunt!

// Run away, doo, doo, doo, doo, doo, doo.

// Run away, doo, doo, doo, doo, doo, doo.

// Run away, doo, doo, doo, doo, doo, doo.

// Run away!

// Safe at last, doo, doo, doo, doo, doo, doo.

// Safe at last, doo, doo, doo, doo, doo, doo.

// Safe at last, doo, doo, doo, doo, doo, doo.

// Safe at last!

// It's the end, doo, doo, doo, doo, doo, doo.

// It's the end, doo, doo, doo, doo, doo, doo.

// It's the end, doo, doo, doo, doo, doo, doo.
