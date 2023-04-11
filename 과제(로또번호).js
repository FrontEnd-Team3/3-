/*
과제
로또 번호 뽑기

1~45까지 랜덤한 숫자 7자리의 배열
ex) [1,6,8,41,45,7]

매번 실행마다 다른 로또번호가 나와야합니다
*/

let a = [];
for (let i = 1; i <= 7; i++) {
  let b = Math.floor(Math.random() * 45 + 1);
  a.push(b);
}
console.log(a);
