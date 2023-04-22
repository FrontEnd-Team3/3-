import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
0. button을 눌렀을때 이벤트 발생으로 확인
1. #user-name 인풋에 value와 RESERVATION_LIST.name의 값이 일치하는게 있는지 filter로 확인
2. #user-phone 인풋에 value와 RESERVATION_LIST.phone의 값이 일치하는게 있는지 filter로 확인?
3. 예외상황 // 없을 경우 alert로 '일치하는 항목이 없습니다', console.log('일치하는 항목이 없습니다')
4. 모두 일치하는 경우 // #reservation-number의 p태크에 일치하는 정보의 RESERVATION_LIST.number가 
innerText로 추가됨
*/


const formBtn = document.querySelector('form > button')

formBtn.addEventListener('click', function(e){
    e.preventDefault();
    let nameValue = document.getElementsByName('user-name')[0].value
    console.log(nameValue)
    let phoneValue = document.getElementsByName('user-phone')[0].value
    console.log(phoneValue)
    let inputValueFind = RESERVATION_LIST.find(res => res.name === nameValue)
    console.log(inputValueFind)
    if(inputValueFind.name === nameValue && inputValueFind.phone === phoneValue){
        console.log(inputValueFind.number)
        document.querySelector('#reservation-number').innerText = inputValueFind.number
    } else{
        alert('일치하는 항목이 없습니다')
        console.log('일치하는 항목이 없습니다')
    }
})
