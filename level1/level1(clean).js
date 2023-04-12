import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

const $select = document.querySelector("#bank-selector");
const bankName = Object.values(BANK_LIST);
const accountFormArr = Object.values(ACCOUNT_FORM);
const $accountList = document.querySelector("#account-list");

let optionHTML = "";
function selectOptions() {
  for (let i = 0; i < bankName.length; i++) {
    optionHTML += `<option value='${bankName[i]}'>${bankName[i]}</option>`;
  }
  $select.innerHTML = optionHTML;
}
selectOptions();

const $input = document.querySelector("#account-send-form");
const $inputAccount = document.querySelector("#account-input");

$input.addEventListener("submit", function (e) {
  e.preventDefault();
  let target = $inputAccount.value;

  if (target.length < 12) {
    alert("12자리를 입력해주세요.");
  } else {
    const $selectedBank = document.querySelector("#bank-selector");

    const inputArr = $inputAccount.value.split("");

    inputArr.splice(2, 8, "*", "*", "*", "*", "*", "*", "*", "*");

    const index = bankName.indexOf($selectedBank.value);
    let targetForm = accountFormArr[index];

    for (let i of inputArr) {
      targetForm = targetForm.replace("0", i);
    }

    const li = $accountList.appendChild(document.createElement("li"));
    li.textContent = `${$selectedBank.value} : ${targetForm}`;
  }
});
