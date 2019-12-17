
$(function () {

    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    /*用户名不为空并且不能超过30位 */
    $('input[name="username"]').focus(function () {
        $(this).next().text('用户名应该为1-30位之间').removeClass('state1');
    }).blur(function () {
        if ($(this).val().length >= 1 && $(this).val().length <= 30 && $(this).val() != '') {
            $(this).next().text('√').removeClass('state1');
            ok1 = true;
        } else {
            $(this).next().text('请输入用户名').removeClass('state1');
        }
    });
    /*电话不能为空并且不能超过11位 */
    $('input[name="phone"]').focus(function () {
        $(this).next().text('手机号不能为空').removeClass('state1')
    }).blur(function () {
        if ($(this).val().length == 11 && $(this).val() != '') {
            $(this).next().text('√').removeClass('state1')
            ok2 = true;
        } else {
            $(this).next().text('手机应该为11位').removeClass('state1')
        }
        /*客户地区不能为空 */
    });
    $('input[name="diqu"]').focus(function () {
        $(this).next().text('客户地区不能为空').removeClass('state1')
    }).blur(function () {
        if ($(this).val() != '') {
            $(this).next().text('√').removeClass('state1')
            ok2 = true;
        } else {
            $(this).next().text('地区不能为空').removeClass('state1')
        }


    });
});
/*设置只能输入数字 */
$(function () {
    $('#youzheng').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
$(function () {
    $('#dh').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
$(function () {
    $('#cz').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
$(function () {
    $('#yingyezhizhao').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
$(function () {
    $('#zhucezijing').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
$(function () {
    $('#zhucezijing').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});

$(function () {
    $('#nianyingye').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});

$(function () {
    $('#kaihu').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});

$(function () {
    $('#yhzhanghao').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});

$(function () {
    $('#dishui').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
$(function () {
    $('#guoshui').on('input propertychange', function (e) {
        var text = $(this).val().replace(/[^\d]/g, "");
        $(this).val(text)
    })
});
/*设置网址的格式*/

$(document).ready(function(){
$(".yesinput").focus(function(){
 
        });
    $(".yesinput").blur(function(){
        var url=$(this).val();
 
        regExp = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/
        if (url!= "") {
            if(!(regExp.test(url))){
                $('.b').text('URL格式不正确');
                yesbool=false;
            }else{
                $('.b').text('');
            }
        }
    })
});
/*设置客户经理不能为空*/
$(function(){
    $("#submit").click(function(){
 //value=0 为空
 var coun=$("#country").val();
   if(coun == 0) {
 $("#hao").html("客户经理不能为空");
 }else {
    $("#hao").html("");
 }
  
    });
   
 });
 /*设置客户等级不能为空*/
 $(function(){
    $("#submit").click(function(){
 //value=0 为空
 var coun=$("#country").val();
   if(coun == 0) {
 $("#hao1").html("客户等级不能为空");
 }else {
    $("#hao1").html("");
 }
  
    });
   
 });
 /*满意度经理不能为空*/
 $(function(){
    $("#submit").click(function(){
 //value=0 为空
 var coun=$("#country").val();
   if(coun == 0) {
 $("#hao2").html("客户等级不能为空");
 }else {
    $("#hao2").html("");
 }
  
    });
   
 });
 /*信誉度经理不能为空*/
 $(function(){
    $("#submit").click(function(){
 //value=0 为空
 var coun=$("#country").val();
   if(coun == 0) {
 $("#hao3").html("客户等级不能为空");
 }else {
    $("#hao3").html("");
 }
  
    });
   
 });