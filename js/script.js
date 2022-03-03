const $container=$('.gallery');     //변하지않는애 이미지들을 감사는 갤러리
const $loadMoreBtn=$('.load-more');     //변하지않는애 더보기버튼
let $addItemCount=8;     //누를떄마다 추가됐으면좋겠다 하는 숫자를 써넣는다
let $addde=0;     //대입연산자:처음보이는 것 리스트 항목 모두 로드하면 버튼이 사라지게 할 용도
let $allData=[]; //배열구조

//$.getJSON('파일경로',할일);
$.getJSON('./data/content.json',function(data){ //데이타라는 매개 변수를 준다.
    initGallery(data)

});
function initGallery(data){
    $allData=data;
    console.log($allData)
}