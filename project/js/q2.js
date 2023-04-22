/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이가 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

function division(arr, numnum) {
    //1. 배열 arr을 내가 원하는 갯수 numnum으로 분해
    //2. 분해된 요소들을 모두 newDivision에 추가
    //3. newDivision 객체 반환
    const result = Array.from({ length: Math.ceil(arr.length / numnum) }, (_, index) => arr.slice(index * numnum, index * numnum + numnum));
    return result;
    }

console.log(division([1,2,3,4,4,4,5,5,5,5,5,5,5,5,5,5], 5))