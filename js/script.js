const $container=$('.gallery');     //변하지않는애 이미지들을 감사는 갤러리
const $loadMoreBtn=$('.load-more');     //변하지않는애 더보기버튼
let $addItemCount=8;     //누를떄마다 추가됐으면좋겠다 하는 숫자를 써넣는다
let $added=0;     //대입연산자:처음보이는 것 리스트 항목 모두 로드하면 버튼이 사라지게 할 용도
let $allData=[]; //배열구조

//$.getJSON('파일경로',할일);
$.getJSON('./data/content.json',function(data){ //데이타라는 매개 변수를 준다.
    initGallery(data)

});
$('.gallery').masonry({
    // options
    itemSelector: '.gallery-item',
    columnWidth: 210
  });
function initGallery(data){
    $allData=data;
   // console.log($allData);
   addItem()
   $loadMoreBtn.click(function(){
    addItem();


   });
}
function addItem(){
    let elements=[];
    let slicedDate;
    slicedDate=$allData.slice($added, $added += $addItemCount);
    $.each(slicedDate, function(idx, item){
        let itemHTML=
        '<li class="gallery-item">' + 
            '<a href="'+item.images.large+'">' +
                '<figure>' +
                    '<img src="'+item.images.thumb+'" alt="'+item.title+'">'+
                    '<figcaption>'+item.title+'</figcaption>'+
                '</figure>'+
            '</a>'+
        '</li>';
        elements.push($(itemHTML).get(0))
    })
    $container.append(elements);
    $added += slicedDate.length;

    if($added < $allData.length){
        $loadMoreBtn.show()

    }else{
        $loadMoreBtn.hide()

    }
    $container.imagesLoaded( function() {
       $container.mesonry('appended',elements);
      });
      

}