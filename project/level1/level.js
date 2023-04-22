import { BANK_LIST, ACCOUNT_FORM } from './account.js';

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);


const bank_value = Object.values(BANK_LIST);
console.log(bank_value)
const account_form = Object.values(ACCOUNT_FORM)
console.log(account_form)

let bankSelect = document.querySelector('#bank-selector')

//1. #bank-selector에 옵션값에 bank_value 값을 넣음
//2. 그걸 inser...HTML로 넣어줌


for(let i=0; i<bank_value.length; i++){
    let tem = `<option>${bank_value[i]}</option>`
    console.log(tem)
    bankSelect.insertAdjacentHTML('beforeend', tem)
}


let inputValue = document.querySelector('#account-input')
let inputBtn = document.querySelector('#account-send-form > button')
console.log(inputBtn)
inputBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(inputValue.value.length<12){
        console.log(inputValue.value.length)
        return alert('12자리 모두 입력해주세요')
    } else if(!/^[0-9]+$/.test(inputValue.value)) {
        return alert('숫자만 입력해주세요')
    } 
    else {
        let newAccountF = account_form[0].split('-')
        console.log(newAccountF)
        newAccountF[0] = inputValue.value.slice(0,2)
        newAccountF[1] = '********'
        newAccountF[2] = inputValue.value.slice(10, 12)
        let 템플릿2 = `<li>${bankSelect.value} : ${newAccountF.join('-')}</li>`
        console.log(bankSelect.value)
        console.log(inputValue)
        document.querySelector('#account-list').insertAdjacentHTML('beforeend', 템플릿2)   
    }
})