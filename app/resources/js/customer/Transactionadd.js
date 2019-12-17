// 订单日期不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#time").val() == '') {
            $("#message").html("订单日期不能为空");
            event.preventDefault();
        }
        else{
            $("#message").html("");
        }
    });
});
// 订单金额不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#didian").val() == '') {
            $("#message_1").html("订单金额不能为空");
            event.preventDefault();
        }else{
            $("#message_1").html("");
        }
    });
});
// 订单金额只能为整数
$(function () {
    $('#youzheng').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
