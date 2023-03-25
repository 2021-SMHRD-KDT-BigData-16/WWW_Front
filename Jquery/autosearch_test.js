



var files = ['1.png','2.png','3.png'];

var picatureArr=new Array();

 for(var i=0; i<files.length; i++) {

picatureArr[i] = new Image(); // 이미지 객체 생성

picatureArr[i].src = files[i]; // 이미지 미리 로딩

} 


$(function () {	//화면 로딩후 시작
    $("#searchInput").autocomplete({  //오토 컴플릿트 시작
        source: files,	// source는 data.js파일 내부의 List 배열
        focus : function(event, ui) { // 방향키로 자동완성단어 선택 가능하게 만들어줌	
            return false;
        },
        minLength: 1,// 최소 글자수
        delay: 100,	//autocomplete 딜레이 시간(ms)
        //disabled: true, //자동완성 기능 끄기
    });
});