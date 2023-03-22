let BLOCKCHAIN_SCORE = 10;
let FRONTEND_SCORE = 50;

let TOTAL_SCORE = BLOCKCHAIN_SCORE + FRONTEND_SCORE;

if (TOTAL_SCORE > 78) {
  console.log("Great 😎");
} else if (TOTAL_SCORE > 50) {
  console.log("Good 😀");
} else if (TOTAL_SCORE > 30) {
  console.log("Try harder 🙂");
} else {
  console.log("Sad ,.,.., 🥹");
}
