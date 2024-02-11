처음에는 반복문을 어떻게 이용해야할지 감을 잡지 못해서 이런식으로

ember.addEventListener("click", function () {
setBgColor();
setImage();
});
wade.addEventListener("click", function () {
setBgColor();
setImage();
});
clod.addEventListener("click", function () {
setBgColor();
setImage();
});

gale.addEventListener("click", function () {
setBgColor();
setImage();
});
이벤트리스너를 여러개 만들었는데 만들고 보니 공통적인 내용이 포함되서
그부분을 반복문으로 돌리면 되겠다고 생각이들어 반복문을 만들어 보았습니다.

함수같은경우도 각 요소마다 setBgColor(); setImage(); 함수를 각각 만들어보니
양이 많아져서 이것도 반복문안에 넣을수 있을까 하고 넣어보았습니다.

아직 반복문에 익숙하지않아서 이렇게 만져보고 해보니 어떻게 몇몇부분은 동작하는데
맞는지 모르겠습니다..이번에도 완성을 하지 못했네요 선생님죄송합니다.. 보충수업까지 해주시고 열성적으로 알려주신거에
비해 실력이 부족합니다.. 더 노력하겠습니다.
