let a = 10;
let b = 6;

// Basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// urinary operator
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);


// comparison
console.log(a < b);
console.log(a > b);
console.log(a == b);

let c = "10";
console.log(a == c);
console.log(a === c);

// control flow
let score = 80;
if (score >= 80) {
    console.log("You had A");
} else if (score >=70) {
    console.log("You had B");
} else if (score >= 65) {
    console.log("You had C+");
} else if (score >= 60) {
    console.log("You had C");
} else if (score >= 55) {
    console.log("You had D+");
} else if (score >= 50) {
    console.log("You had D");
} else {
    console.log("You had E");
}


// how switch looks
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const gender = "Male"

switch (gender) {
    case "Male":
        console.log("Go to the male washroom");
        break;
    case "Female":
        console.log("Go to the female washroom");
        break;

    default:
        console.log("No washroom for you.")
        break;
}

for (let count=1; count<10; count++) {
    console.log(count);
}
let count = 1
while (count < 10) {
    console.log(count);
    count++;
}

