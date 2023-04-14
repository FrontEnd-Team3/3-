import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

const $select = document.querySelector("#bank-selector");

function AddOptionList() {
  let objectKey = null;
  for (objectKey in BANK_LIST) {
    const $CreateOption = document.createElement("option");
    $CreateOption.innerText = BANK_LIST[objectKey];
    $select.appendChild($CreateOption);
  }
}
AddOptionList();

const $form = document.getElementById("account-send-form");
const $input = document.getElementById("account-input");
const $ul = document.getElementById("account-list");

const createli = function (text) {
  if (text.length - 7 !== 12) {
    return alert("숫자 다시 입력해요");
  }
  if (text !== "") {
    const $li = document.createElement("li");
    $ul.appendChild($li);
    $li.innerText = text;
  }
};

const FormSubmit = function (e) {
  e.preventDefault();
  const $SelectValue = $select.value;
  const changestar = $input.value;

  const liputvalue = `${$SelectValue} : ${changestar}`;
  createli(liputvalue);
  $input.value = "";
};

$form.addEventListener("submit", FormSubmit);
