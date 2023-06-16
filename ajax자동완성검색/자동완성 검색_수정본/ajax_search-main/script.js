function search(target){
    $.ajax({
        type: 'GET',
        // 어디에서 받아올껀지 데이터를

        dataType: 'JSON',
        // 내가 받아올 데이터 
        url: `asset/movie.json`,

        // 에러가날 경우에
        error: function(err){
            console.log(err);
        },
        //성공할경우에
        success: function(data){
            // 내가 입력한 글자 체크해줌
            var checkWord = $("#movieInput").val();
            console.log(checkWord);
            movieList = $("#movieList");
            movieList.empty();

            data.forEach((movie)=>{
                // 만약에 src가 내가입력한 글자(checkWord)에 입력되어있는데에 포함되어있으면
                if(movie['src'].includes(checkWord)){
                    // 연관검색에 뜨는 정보임 (이거 클릭하면 정보를 여기 안에 든거를 자동완성에 출력을 해주겠다~)
                    movieList.append(`
                    <span style="cursor: pointer;" onclick="select(this);"> ${movie['src']} </span> <br/>`);
                }
            })
        }
    })
}    

/* <img style="cursor: pointer;" onclick="select(this);" src = "/ajax_search-main/${movie['src']}.jpg "> <br/> */

const list = [];
function select(target){

    const selected = document.getElementById("selected");
    // 비어있는  div에 innertext를 출력시킬꺼야 target의 이너텍스트를 타겟은 위의 전체 함수에서
    // 받아온 친구인듯 
    console.log(selected);

    // selected.innerHTML += ``;
    selected.innerHTML += `<div style = "float : left;">
                            <img src ="/ajax_search-main/${target.innerText}.jpg" style ="width : 250px;height : 300px; margin-right : 20px;">
                            <div>${target.innerText}</div> 
                            </div>`;
    list.push(target.innerText);
    console.log(list);
}



