// for (let i = ; [조건문]; [증감문]) {

//   }

// i++;
// i = i + 1;
// i += 1;

// for (let i = 0; i < 10; i++) {
//   console.log(i, "블체스 만세");
// }

// i = 0 , j = 0
for (let i = 0; i < 15; i++) {
  let star = ""; //별이란 변수에는 아무것도 없음
  for (let j = 0; j < 15; j++) {
    if (j < i) {
      star += "*";
    }
  }
  console.log(star);
}
