import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

const $bankSelector = document.getElementById("bank-selector");
const $accountNumberInput = document.querySelector("p > input");
const $accountNumbers = document.querySelector("ul");
const addAccount = function () {
  const account = $accountNumberInput.value;
  $accountNumberInput.value = null;
  if (account.length < 12) return alert("계좌번호 길이가 12자가 아닙니다.");
  const maskedAccount = "**" + account.slice(2, -2) + "**";
  let result = Array.from(ACCOUNT_FORM[$bankSelector.value]);
  let j = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "0") result.splice(i, 1, maskedAccount[j++]);
  }
  $accountNumbers.innerHTML += `<li>${
    BANK_LIST[$bankSelector.value]
  } : ${result.join("")}</li>`;
};
$accountNumberInput.addEventListener("input", () => {
  $accountNumberInput.value = $accountNumberInput.value.replace(/[^0-9]/g, "");
});

Object.keys(BANK_LIST).forEach((key) => {
  $bankSelector.innerHTML += `<option value="${key}">${BANK_LIST[key]}</option>`;
});
