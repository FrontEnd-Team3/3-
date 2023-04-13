import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

function AddOptionList() {
  const $select = document.querySelector("#bank-selector");
  let objectKey = null;
  for (objectKey in BANK_LIST) {
    const $CreateOption = document.createElement("option");
    $CreateOption.innerText = BANK_LIST[objectKey];
    $select.appendChild($CreateOption);
  }
}
AddOptionList();
