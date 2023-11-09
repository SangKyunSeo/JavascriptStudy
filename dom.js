document.documentElement; // html 객체에 접근
document.body; // body 객체에 접근
document.head; // head 객체에 접근
document.body.style.backgroundColor = 'blue'; // body 태그의 스타일에 백그라운드 색을 파란색으로 변경
document.getElementById('first'); // first라는 id를 가진 태그에 접근
document.getElementsByTagName('p'); // p태그 전체 접근
document.getElementsByName('link'); // link라는 클래스이름을 가진 객체 또는 link라는 name을 가진 객체에 접근
document.querySelectorAll('.link'); // link라는 클래스 이름을 가진 객체 접근, All을 빼면 가장 첫번째 객체에 접근
document.querySelector('#first'); // first라는 id를 가진 객체 접근
document.querySelector('h3:nth-of-type(2)'); // h3태그에 접근하는데 2번째 태그에만 접근
nth-of-type(2n); // 2의 배수에 해당하는 부분

/**
 * querySelectorAll 과 getElementsByTagName
 * 전자의 경우 변경 사항이 적용되지 않을 때 있음
 * 후자의 경우 변경 사항이 적용됨
 * 전자의 경우 nodeList 형태로 반환
 * 후자의 경우 HTMLCollection 형태로 반환
 */

const red = document.getElementById('red');
red.parentNode; // id가 red인 태그의 부모 노드에 접근
red.parentElement; // id가 red인 태그의 부모 요소 노드에 접근
document.documentElement.parentNode; // document가 됨
document.documentElement.parentElement; // null
// 즉, parentElement는 요소를 의미하는데 요소는 html태그 같은 것, 즉 태그를 의미함 

const ul = document.getElementById('color');
ul.childNodes; // id가 color인 태그의 자식 노드들. 노드들이라서, text, 공백 모두 다 포함해서 나옴
//nodeList 타입인데 얘는 querySelectorAll과 다른점은 변경사항이 반영됨

ul.children; // id가 color인 태그의 자식들 -> 요소들만 반환함 HTMLCollection (요소 타입의 노드들)
ul.firstChild; // 첫번 째 노드를 가져옴 (text 공백 뭐 이런거 다 포함)
ul.lastChild; // 마지막 노드를 가져옴 (text 공백 뭐 이런거 다 포함)
ul.firstElementChild; // 첫번째의 요소 노드를 가져옴
ul.lastElementChild; // 마지막의 요소 노드를 가져옴

const blue = document.getElementById('blue');
blue.previousSibling; // 형제중 이전 모든 타입의 노드들 (text 공백 뭐 이런거 다 포함)
blue.nextSibling; // 형제중 다음 모든 타입의 노드들 (text 공백 뭐 이런거 다 포함)
blue.previousElementSibling; // 형제중 이전 요소 노드만 
blue.nextElementSibling; // 형제중 다음 요소 노드만

const blueTextNode = blue.firstNode;
blueTextNode.nodeName;
blueTextNode.nodeType;
blueTextNode.nodeValue; // text값 -> text 요소만 값 반환 -> ul태그 뭐 이런거는 null값임
blueTextNode.nodeValue = '파파'; // 값 변경도 가능 -> text 요소만 변경이 가능

ul.textContent; // ul태그의 내용들이 마크업은 사라진채로 반환
ul.innerHTML = '<li>RED</li>'; // 마크업이 적용되면서 ul태그의 안으로 들어감

const newLi = document.createElement('li'); // <li></li> 반환 -> 새로운 요소를 만듬
const textNode = document.createTextNode('pink'); // innerHTML을 사용하지 않고 text 삽입 방법
newLi.appendChild(textNode); // 새로운 요소를 만든 곳에 자식으로 textNode 삽입
ul.appendChild(newLi); // ul 요소의 자식으로 새로 만든 li 요소를 삽입

const newLi2 = document.createElement('li');
const textNode2 = document.createTextNode('green');
newLi2.appendChild(textNode2);
const red2 = docuement.getElementById('color');
li.insertBefore(newLi2, red2); // appendChild와는 다르게 red2라는 요소 이전에(앞에) newLi2 요소를 삽입

ul.appendChild(red2); // red2 요소가 마지막으로 이동함

const newBlack = newLi2.cloneNode(); // 노드 복제, 인자로 true, false가 들어가는데 true면 깊은 복사 -> 자식이 가진 text까지 모두 전달 
ul.appendChild(newBlack);

ul.removeChild(red2); // red2 요소 삭제
ul.removeChild(ul.firstElementChild); // ul 태그의 첫번째 요소 삭제

BBBB.classList.toggle('bg-red'); // id가 BBBB인 요소의 클래스 리스트에 접근해 bg-red라는 클래스가 없으면 삽입하고 있으면 삭제함

ul.addEventListener('click',fn1); // 특정 이벤트가 발생하면 (click), 전달된 함수를 실행함.
document.removeEventListener() // 특정 이벤트 삭제