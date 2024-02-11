/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const visual = document.querySelector("#mainVisual");
const nameText = document.querySelector(".nickName");

const ember = document.querySelector("#btn-one");
// const emberImage = document.querySelector("#emberImg");

const wade = document.querySelector("#btn-two");
// const wadeImage = document.querySelector("#wadeImg");

const clod = document.querySelector("#btn-three");
// const clodImage = document.querySelector("#clodImg");

const gale = document.querySelector("#btn-four");
// const galeImage = document.querySelector("#galeImg");  굳이 필요없음

const elemental = [ember, wade, clod, gale];

for (let i = 0; i < elemental.length; i++) {
  const button = elemental[i];
  button.addEventListener("click", function () {
    setBgColor(i);
    setImage(i);
    setNameText(i);
  });
}

function setBgColor(i) {
  document.querySelector(
    "body"
  ).style.background = `linear-gradient(to bottom, ${data[i].color})`;
}

function setImage(i) {
  visual.innerHTML = `<img src="./assets/${data[i].name}.jpeg" alt="${data[i].alt}" />`;
}

function setNameText(i) {
  nameText.innerHTML = data[i].textContent = data[i].name;
}

//반복문으로 만들어보기

// ember.addEventListener("click", function () {
//   setBgColor();
//   setImage();
// });
// wade.addEventListener("click", function () {
//   setBgColor();
//   setImage();
// });
// clod.addEventListener("click", function () {
//   setBgColor();
//   setImage();
// });

// gale.addEventListener("click", function () {
//   setBgColor();
//   setImage();
// });
