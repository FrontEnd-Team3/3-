/* 
레시피 재료 추가하기
0. 추가 버튼을 눌렀을때 이벤트 발생
1. name="ingredient" 인풋에 입력한 값이 table태그에 HTML 의 2행1열에 추가
2. name="weight" 인풋의 입력한 값이 table태그에 HTML 의 2행2열에 추가
3. table태그에 HTML 의 2행3열에 삭제 버튼 추가
4. 삭제버튼 누르면 해당 table태그 전체 삭제

5. 제출 버튼 눌렀을때 2행1열, 2행2열의 값이 키:값 형태로 #ingredient-list ul에 inser..HTML로 HTML추가
6. 
*/

const $plusBtn = document.querySelector('#ingredient-form > button')

$plusBtn.addEventListener('click', function(e){
    let ingredientInputValue = document.getElementsByName('ingredient')[0].value
    let weightInputValue = document.getElementsByName('weight')[0].value
    console.log(ingredientInputValue)
    console.log(weightInputValue)
    e.preventDefault();
    e.stopPropagation();
    const ingredientInputValueArr = Object.values(ingredientInputValue);
    console.log(ingredientInputValueArr) 

    /* ingredientInputValue의 입력값이 중복되면 등록 x -- 실패 */
    for(let j=0; j<ingredientInputValueArr.length; j++){
        if(ingredientInputValueArr[j] === ingredientInputValue){
            return console.log('nope')
        }
    }

    let 템플릿1 = `<tr class="trtable">
                <td>${ingredientInputValue}</td>
                <td>${weightInputValue}</td>
                <td><button class="deleteBtn" type="button">삭제</button></td>
                 </tr>`
    document.querySelector('table').insertAdjacentHTML('beforeend', 템플릿1)

    const $deleteBtn = document.getElementsByClassName('deleteBtn')
    for(let i=0; i<$deleteBtn.length; i++){
        console.log($deleteBtn.length)
        $deleteBtn[i].addEventListener('click', function(){
        console.log($deleteBtn.length)
        console.log(document.querySelectorAll('.trtable').length)
        console.log(document.querySelectorAll('.trtable')[i])
        document.getElementsByClassName('trtable')[i].innerHTML = ''
        })
    }
})

/* 제출버튼 구현 */
    const submitBtn = document.querySelector('#submit_button')
    submitBtn.addEventListener('click', function(){
        let ingredientList = document.querySelector('#ingredient-list')
        let 템플릿2 = `<p>$</p>`
        ingredientList.innerHTML = '템플릿2'
    })


