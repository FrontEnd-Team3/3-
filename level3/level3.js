const $form = document.querySelector("#ingredient-form");
const $input1 = document.getElementsByName("ingredient");
const $input2 = document.getElementsByName("weight");
const $table = document.querySelector("table");
const $material = document.getElementsByClassName("material");

function AddMaterial(e) {
  e.preventDefault();
  let inputvalue1 = $input1[0].value;
  let inputvalue2 = $input2[0].value;
  if (inputvalue1 !== "" && inputvalue2 !== "") {
    for (let i = 0; i < $material.length; i++) {
      if ($material[i].innerText === inputvalue1) {
        alert("이미존재하는 재료입니다");
        return ($input1[0].value = ""), ($input2[0].value = "");
      }
    }
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
  $ul.innerHTML = "";
  for (let i = 0; i < $td1.length; i++) {
    const $li = document.createElement("li");
    $ul.appendChild($li);
    $li.innerText = `${$td1[i].innerText} : ${$td2[i].innerText}`;
  }
}

$submitbutton.addEventListener("click", AddLiTag);
