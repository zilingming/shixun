// 姓名不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#name").val() == '') {
            $("#message").html("用户姓名不能为空");
            event.preventDefault();
        }
    });
});
// 手机号不能为空
$(function () {
    $("#yes").bind('click', function (event) {
        if ($("#bgdianhua").val() == '') {
            $("#message_1").html("办公电话不能为空");
            event.preventDefault();
        }
    });
})
// 手机为整数
$(function () {
    $('#shouji').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
window.onload = function () {
    var inpEle = document.getElementById('shouji');
    var myreg = /^1[3458]\d{9}$/;
    inpEle.onblur = function () {
        var inpVal = this.value;
        if (!myreg.exec(inpVal)) {
            alert('请输入正确的手机号')
        } else {
        }
    }
}
// 办公电话为整数
$(function () {
    $('#bgdianhua').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});