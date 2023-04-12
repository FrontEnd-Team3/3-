import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

const $submitBtn = document.querySelector("form > button");
const $inputName = document.querySelectorAll("form > p > input")[0];
const $inputPhoneNum = document.querySelectorAll("form > p > input")[1];
const $resultArea = document.querySelector("#reservation-number");

$submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const nameVal = $inputName.value;
  const phoneNumVal = $inputPhoneNum.value;

  const nameArr = RESERVATION_LIST.map((el) => el.name);

  const phoneNumArr = RESERVATION_LIST.filter((el) => el.name === nameVal).map(
    (el) => el.phone
  );

  if (!nameArr.includes(nameVal) || !phoneNumArr.includes(phoneNumVal))
    return alert("일치하는 항목이 없습니다.");

  const result = RESERVATION_LIST.find(
    (el) => el.name === nameVal && el.phone === phoneNumVal
  );

  $resultArea.textContent = result.number;
});
