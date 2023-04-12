/* 
레시피 재료 추가하기
*/

const $form = document.querySelector("#ingredient-form");
const $addBtn = document.querySelector("#ingredient-form > button");
$addBtn.setAttribute("type", "submit");
const $submitBtn = document.querySelector("#submit_button");
const $resultArea = document.querySelector("#ingredient-list");

let nameArr = [];
let weightArr = [];

$form.addEventListener("submit", function (e) {
  e.preventDefault();
  const $inputName = $form.querySelectorAll("input")[0].value;

  if (nameArr.includes($inputName)) return alert("이미 존재하는 재료입니다.");

  const $inputWeight = $form.querySelectorAll("input")[1].value;

  // 재료, 무게 입력 시 테이블에 데이터 추가
  const $table = document.querySelector("table");
  const newTr = $table.appendChild(document.createElement("tr"));
  newTr.innerHTML = `<td class="name">${$inputName}</td>
  <td class="weight">${$inputWeight}</td>
  <td><button type="button" class='delete-btn'>삭제</button></td>`;

  nameArr.push($inputName);
  weightArr.push($inputWeight);

  const $deleteBtn = document.querySelectorAll(".delete-btn");
  $deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const targetName = e.target.parentNode.parentNode.firstChild.textContent;
      const deletedIndex = nameArr.indexOf(targetName);
      nameArr = nameArr.filter((el) => el !== targetName);
      weightArr = weightArr.filter((_, index) => index !== deletedIndex);
      e.target.parentNode.parentNode.remove();
    });

    let resultArr = [];

    $submitBtn.addEventListener("click", function () {
      const newNameArr = document.querySelectorAll(".name");
      const newWeightArr = document.querySelectorAll(".weight");

      for (let i = 0; i < nameArr.length; i++) {
        resultArr.push({
          name: newNameArr[i].textContent,
          weight: newWeightArr[i].textContent,
        });
      }
      const result = resultArr
        .map((el) => `<li>${el.name} : ${el.weight}</li>`)
        .join("");
      $resultArea.innerHTML = result;
      resultArr = [];
    });
  });
});
