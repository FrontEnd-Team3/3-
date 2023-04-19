/*
goals
2. 재료에 이미 있는 value값을 재료명 input에 입력할시 alert("이미 존재하는 재료입니다") 
*/

const $form = document.querySelector("#ingredient-form");
const $input1 = document.getElementsByName("ingredient");
const $input2 = document.getElementsByName("weight");
const $table = document.querySelector("table");

function AddMaterial(e) {
  e.preventDefault();
  let inputvalue1 = $input1[0].value;
  let inputvalue2 = $input2[0].value;
  if (inputvalue1 !== "" && inputvalue2 !== "") {
    const $tr = document.createElement("tr");
    $table.appendChild($tr);
    $tr.innerHTML = `
    <td class="material td1">${inputvalue1}</td>
    <td class="td2">${inputvalue2}</td>
    <td><input type="button" value="삭제"></td>
    `;
    const $deletebutton = document.querySelectorAll("td>input");
    for (let i = 0; i < $deletebutton.length; i++) {
      $deletebutton[i].addEventListener("click", deletetr);
    }
  }
  $input1[0].value = "";
  $input2[0].value = "";
}
$form.addEventListener("submit", AddMaterial);

function deletetr(e) {
  e.target.parentElement.parentElement.remove();
}
const $submitbutton = document.querySelector("#submit_button");
const $ul = document.querySelector("#ingredient-list");

function AddLiTag() {
  const $td1 = document.querySelectorAll(".td1");
  const $td2 = document.getElementsByClassName("td2");
  for (let i = 0; i < $td1.length; i++) {
    const $li = document.createElement("li");
    $ul.appendChild($li);
    $li.innerText = `${$td1[i].innerText} : ${$td2[i].innerText}`;
    // 제출했을때 $td1.length만큼 추가되는 것이 아니라 $td1.length만큼 수정되게끔 해야댐 여기 수정!!!!
  }
}

$submitbutton.addEventListener("click", AddLiTag);
