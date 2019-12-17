// 时间不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#time").val() == '') {
            $("#message").html("时间不能为空");
            event.preventDefault();
        }
    });
});
// 地点不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#didian").val() == '') {
            $("#message_1").html("地点不能为空");
            event.preventDefault();
        }else
        {
            $("#message_1").html("");
        }
    });
});
// 概要不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#gaiyao").val() == '') {
            $("#message_2").html("概要不能为空");
            event.preventDefault();
        }
    });
});
$('#time').datetimepicker();