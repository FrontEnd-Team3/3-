const lotto = [];
for (let i = 0; i < 7; i++){
  let num = Math.floor(Math.random() * 45) + 1;
  // console.log(num);
  lotto.push(num);
}
lotto.sort(function(a,b){
  return a - b;
});

console.log(`로또 당첨 번호는 ${lotto} 입니다.`)