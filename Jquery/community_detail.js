

// ----------체크박스-----------------

// 체크박스 선택하면 위에 표시해주돌갷주는 친구
function getCheckboxValue() {
    // 선택된 목록 가져오기
    const query = 'input[name="hash_name"]:checked';
    const selectedEls =
        document.querySelectorAll(query);
        // 위에서 담아준 쿼리라는 것을 찾는것

    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach((el) => {
        result += el.value + ' ';
    });

    // 출력
    document.getElementById('hash_result').innerText
        = result;
}



// 일정 숫자 이상 클릭하면 선택 완료구문 뜨면서 멈추게 하는거
function checkStr() {
    var vCnt = 0;
    let list = [];
    for (var i = 0; i < document.hashtag_form.elements.length; i++) {
        if (document.hashtag_form.elements[i].name == 'hash_name') {
            if (document.hashtag_form.elements[i].checked == true) {
                vCnt++;
                list.push(i);
            }
        }
    }

    if (vCnt > 2) {

        alert(`💥 세개 선택 완료되었습니다 💥`);
        // 마지막꺼는 리스트에서 뺌

        // prop 은 지정한 선택자를 가진 첫번째 요소의 속성값을 가져오거나 속성값 추가

        return;
    }
}


// 리셋버튼 누르면 실행되는거
function reset() {

    $(".hash_check").prop("checked", false);
    $(".hash_check").prop("disabled", false);
}
// ----------체크박스 끝---------------








