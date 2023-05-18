import logo from './logo.svg';
import './App.css';

const arr = [1,2,3,4];
//배열 내장함수. 1. forEach
arr.forEach( (el) => console.log(el))
arr.forEach(function (elm) {
  console.log(elm *2)
})

//배열 내장함수 2.map : 배열을 돌면서 함수를 실행하여 새로운 배열을 리턴함
const newArr = [];
arr.forEach( (el) => newArr.push((el * 2) ));
console.log(newArr)

const newArr1 = arr.map( (item) => {return item * 2})
console.log(newArr1, "newArr1")

//배열 내장함수 3. includes : 주어진 배열에, 전달받은 인자와 일치하는 값이ㅡ 존재하는지 확인
let number = 3;
arr.forEach ( (each , index) => {
  if(each === number) {
    console.log( true, index )
  }
})
console.log(arr.includes(number)) // => true

//배열 내장함수 4. indexOf :  주어진 배열에, 전달받은 인자와 일치하는 값이 존재할 때 그 인덱스를 반환함
console.log(arr.indexOf(number), "indexOf")

//배열 내장함수. findIndex() : 객체 배열에서 원하는 속성을 갖는 요소의 배열의 인덱스를 찾기
// 찾는 요소의 첫번째 결과가 인덱스가 도출됨
const obArr = [
  { num:1, color: "red"},
  { num:2, color: "black"},
  { num:3, color: "blue"},
  { num:4, color: "green"},
  { num:5, color: "green"}
];
const obArr1 = [
  { num:6, color: "purple"},
  { num:7, color: "lightpink"}
];
console.log( obArr.findIndex( (el) =>
  el.color === "green"
), "findIndex")
console.log( obArr.findIndex( (el) => {
    return el.color === "green"
  }
), "findIndex NOT Arrow Function")


const idx = obArr.findIndex( (el) => {
    return el.color === "green"
  }
);

console.log(idx)

// 배열 내장 함수 5. find : 조건과 일치하는 인덱스의 엘리먼트를 가져옴
const element = obArr.find( (el) =>
     el.color === "green"

);

console.log( element )

// 6. filter : 전달한 콜백 함수가 트루를 반환하는 모든 요소를 배열로 반환함

console.log(obArr.filter(
  (el) => el.color === "green"
))


// 배열 내장함수 7. slice(시작점, 끝점) // 끝점 -1 개까지 자른다
console.log( obArr.slice(0,2), "slice")

//배열 내장함수 8. 두개의 배열 붙이기
console.log(obArr.concat(obArr1))

// 9. sort() 배열 정리 : 원본배열의 순서를 정리함
let chars = ["나", "가", "다"]
chars.sort();

//  10.sort(비교인자)
let nums = [ 0, 1,3,2,10,30, 20];
nums.sort();
console.log(nums, " : not compare")
// 오름차순 정렬
const compare = (a,b) => {
  //1. 같다
  //2. 크다
  //3. 작다
  if (a>b){return 1}
  if (a<b){return -1}
  if (a===b){return 0}
}
nums.sort(compare)
console.log(nums, " : compare")

// 배열 모든 요소를 문자열로 합이기
const chrArr = ["이정환", "님", "안녕하세요", "또 오셨군요"];
console.log(chrArr.join()) // 기본: ,로 연결됨  이정환,님,안녕하세요,또 오셨군요
console.log(chrArr.join(" ")) // 공백설정시:  이정환 님 안녕하세요 또 오셨군요

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
