function updateMultiplication() {
    $.ajax({
        url: "http://localhost:8080/multiplications/random"
    }).then(function (data) {
        // 폼 비우기
        $("#attempt-form").find("input[name='result-attempt']").val("");
        $("#attempt-form").find("input[name='user-alias']").val("");
        // 무작위 문제를 API로 가져와서 추가하기
        $('.multiaplication-a').empty().append(data.factorA);
        $('.multiaplication-b').empty().append(data.factorB);
    });
}

function updateStats(alias) {
    $.ajax({
        url: "http://localhost:8080/results?alias=" + alias
    }).then(function (data) {
        $('#stats-body').empty();
        data.forEach(function (row) {
            console.log(row);
            $('#stats-body').append('<tr><td>' + row.id + '</td>' +
                '<td>' + row.multiplication.factorA + ' x ' + row.multiplication.factorB + '</td>' +
                '<td>' + row.resultAttempt + '</td>' +
                '<td>' + (row.correct === true ? 'YES' : 'NO') + '</td></tr>');
        });
    });
}

$(document).ready(function () {

    updateMultiplication();

    $("#attempt-form").submit(function (event) {
        // 폼 기본 제출 막기
        event.preventDefault();
        
        // 페이지 값 가져오기
        var a = $(".multiaplication-a").text();
        var b = $(".multiaplication-b").text();
        var $form = $(this),
            attempt = $form.find("input[name='result-attempt']").val(),
            userAlias = $form.find("input[name='user-alias']").val();

        // API에 맞게 데이터 조합하기
        var data = {user: {alias: userAlias}, multiplication: {factorA: a, factorB: b}, resultAttempt: attempt};

        // POST를 이용해 데이터 보내기
        $.ajax({
            url: '/results',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf8",
            dataType: "json",
            success: [
                function (result) {
                    console.log(result);
                    if (result.correct) {
                        $('.result-message').empty().append("정답입니다! 축하드려요!");
                    } else {
                        $('.result-message').empty().append("오답입니다. 그래도 포기하지 마세요.");
                    }
                }
            ],
            error: [
                function(error) {
                    alert("Error!");
                }
            ]
        });

        updateMultiplication();

        updateStats(userAlias);
    });
})