import { BANK_LIST, ACCOUNT_FORM } from './account.js';

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

/***LV1.** **계좌 번호 파싱 하기**

1. 계좌번호 양식과 은행명은 import 되어 js에 console.log에 찍어두었습니다.
2. 은행을 드롭 박스로 선택할 수 있게 해야하며 양식에 맞추어 계좌번호 12자리를 파싱하면 됩니다. 

단, 앞 2자리와 맨끝 2자리를 제외하면 모두 ********로 나타나야합니다.

3. 어떠한 경우에도 HTML 하드 코딩이 되서는 안되며 계좌번호 12자리가 되지 않는다면 alert를 띄워야합니다.

1. 은행 셀렉박스 리스트 추가
2. 계좌입력 시 저장
3. 계좌번호 1,2번째, 마지막 1,2번째 제외하고 **** 처리
4. 리스트에 은행값, 암호화된 계좌값 출력
*/

/*
1. BANK_LIST 객체 -> bankList 배열로 변환하기
2. bankList for문 돌면서 (bankList 요소 개수만큼 option 추가할거니까!)
  2-1. document.createElement("option")으로 옵션태그 생성
  2-2. option태그에 text값과 value값 properties 추가
  2-3. 해당 option을 selectbox에 append
--------
여기까지 해보고 selectbox박스에 들어가는지 한번 확인해보기 !
*/
const bankList = {...BANK_LIST};
console.log(bankList);

let newbankList = Object.keys(bankList).map(item => bankList[item]);
console.log(newbankList);

const select = document.querySelector("#bank-selector");
const option = document.createElement("option");
console.log(option);

for (let bankOption of newbankList){
  console.log(bankOption);
  option.textContent = bankOption;
  option.value = bankOption;
  select.append(option);
}
