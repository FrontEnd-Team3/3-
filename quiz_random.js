/*
과제
로또 번호 뽑기

1~45 까지 랜덤한 숫자 7자리 배열
*/

const arr = [];
function lotto() {
  for (let i = 0; i < 7; i++) {
    arr.push(Math.floor(Math.random() * 45) + 1);
  }
  return console.log(arr);
}
lotto();
