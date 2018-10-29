//圈圈
function quan(e){
    var ctx = e.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth=2;
    ctx.arc(64, 64, 63, 1 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(54, 52);
    ctx.lineTo(54, 76);
    ctx.lineTo(74, 64);
    ctx.closePath();
    ctx.stroke();
}
var a=document.getElementsByClassName("c3")[0];
var b=document.getElementsByClassName("c3")[1];
quan(a);
quan(b);

$(".canvas-rect").mouseenter(function(){
    var i=this.id;
    var c3 = document.getElementsByClassName("c3")[i];
    var ctx = c3.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth=2;
    ctx.arc(64, 64, 63, 1 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(54, 52);
    ctx.lineTo(54, 76);
    ctx.lineTo(74, 64);
    ctx.closePath();
    ctx.stroke();
    function startcircle() {
        function circle(a, b) {
            ctx.beginPath();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth=2;
            ctx.arc(64, 64, 63, a * Math.PI, b * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(54, 52);
            ctx.lineTo(54, 76);
            ctx.lineTo(74, 64);
            ctx.closePath();
            ctx.stroke();
        }
        var a = 1, b = 2;
        var t = setInterval(() => {
            ctx.clearRect(0, 0, 128, 128);
            a += 0.01;
            b += 0.018;
            circle(a, b);
            if (b - a > 2) {
                //console.log(a, b);
                clearInterval(t)
            }
        }, 2)
    }
    function endcircle() {
        function circle(a, b) {
            ctx.beginPath();
            ctx.strokeStyle = "#fff";
            ctx.arc(64, 64, 63, a * Math.PI, b * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(54, 52);
            ctx.lineTo(54, 76);
            ctx.lineTo(74, 64);
            ctx.closePath();
            ctx.stroke();
        }
        var a = 2.26, b = 4.27;
        var t = setInterval(() => {
            ctx.clearRect(0, 0, 128, 128);
            a -= 0.01;
            b -= 0.018;
            circle(a, b)
            if (a < 1.01) {
                //console.log(a, b);
                clearInterval(t)
            }
        }, 2)

    }
    c3.onmouseenter = startcircle;
    c3.onmouseleave = endcircle;
});
//地图
$(".locations").on("mouseover",".race", function () {
    var i= $(this).index();
    $(".inner").removeClass("inbot");
    $(this).find(".inner").addClass("inbot");
    $(".round").removeClass("roundcolor");
    $(this).find(".round").addClass("roundcolor");
    $(".dot").removeClass("highlighted");
    $(`.dot:eq(${i})`).addClass("highlighted");
});

//倒计时
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;

    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
var severTime =getNowFormatDate();
var endTime ='2018-12-15 8:00';
var dateFinal;//结束时间
var curTime;//当前时间
function getTime() {
    var severNow = new Date(severTime).getTime();//服务器时间
    var dateNow = new Date().getTime();  //获取系统本地当前时间
    if(isiOS){
        var severNow = new Date(severTime.replace(/-/g,'/')).getTime();
    }
    D_value = severNow-dateNow;//本地与服务器的差值
    var intervalDate = setInterval(function(){
        countDown(endTime);
    },1000);
}

//倒计时
function countDown(time){
    dateFinal = new Date(time).getTime();//设置倒计时到达时间
    curTime = new Date().getTime() + D_value;

    if(isiOS){ //兼容IOS
        dateFinal = new Date(time.replace(/-/g,'/')).getTime();//设置倒计时到达时间
        curTime = new Date().getTime() + D_value;
    }
    var dateSub = dateFinal - curTime  ;  //计算结束时间与开始时间差值，单位毫秒

    var day = hour = minute = second = dayBase = hourBase = minuteBase = secondBase = 0;  //初始化各个数值
    dayBase = 24 * 60 * 60 * 1000;  //计算天数的基数，单位毫秒。1天等于24*60*60*1000毫秒
    hourBase = 60 * 60 * 1000;  //计算小时的基数，单位毫秒。1小时等于60*60*1000毫秒
    minuteBase = 60 * 1000;  //计算分钟的基数，单位毫秒。1分钟等于60*1000毫秒
    secondBase = 1000;  //计算秒钟的基数，单位毫秒。1秒钟等于1000毫秒
    day = Math.floor(dateSub / dayBase);  //计算天数，并取下限值。如 5.9天 = 5天
    hour = Math.floor(dateSub % dayBase / hourBase) ;   //计算小时，并取下限值。如 20.59小时 = 20小时
    minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);   //计算分钟，并取下限值。如 20.59分钟 = 20分钟
    second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);  //计算秒钟，并取下限值。如 20.59秒 = 20秒
    $(".days").children(".value").html(toDouble(day));
    $(".hours").children(".value").html(toDouble(hour));
    $(".minutes").children(".value").html(toDouble(minute));
}
//当小时，分钟和秒钟小于 10 的时候会显示为个位数，比较难看，需要在前面加 0。
function toDouble(num){
    if(num < 10){
        return '0'+ num;
    }else{
        return '' + num;
    }
}

getTime();


//人物
$(".figure").mouseover(function(){
    $(this).find(".yichu").css("transform","scale(1.1)");
    $(this).find(".fudong").css("transform","translateY(-33px)");
    $(this).find(".figure_over").children("span").css("opacity","1");
    $(this).find(".figure_over").children("span").addClass("xiabiao");
    $(this).siblings().find(".figure_img").addClass("renwub");
});
$(".figure").mouseout(function(){
     $(this).find(".yichu").css("transform","scale(1)");
    $(this).find(".figure_text").css("transform","translateY(0)");
    $(this).find(".figure_over").children("span").css("opacity","0");
    $(this).find(".figure_over").children("span").removeClass("xiabiao");
    $(this).siblings().find(".figure_img").removeClass("renwub");
});
$(".scrollbox-close-btn").on("click",function () {
    $(this).parent(".figure").removeClass("scrollbox-open");
    //$(this).parents(".figure").removeClass("scrollbox-open");
    //$(this).parents(".figure").find(".scrollbox-content").css("display","none");
    //$(this).parents(".figure").find(".figure_over").css("display","block");
    //$(this).parents(".figure").find(".figure_text").removeClass("scrollbox-title-bigger");
    //$(this).parents(".figure").find(".figure_text").addClass("fudong");
    //$(this).parents(".figure").find(".scrollbox-intro").css("transform","translate(0,0) matrix(1, 0, 0, 1, 0, 0)");
    //$(this).parents(".figure").find(".figure_img").css("transform","translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)");
    //$(this).parents(".figure").find(".scrollbox-content").css("transform","translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)");
    //$(this).parents(".figure").find(".figure_word").css("transform","matrix(1, 0, 0, 1, 0, 134.13)");
});
$(".figure").click(function(){
   //滚动条跳转
    $(this).siblings().find(".figure_img").addClass("yichu");
    $(this).find(".figure_img").removeClass("yichu");
    var target_top = $(".figures").offset().top;
    $("html,body").animate({scrollTop: target_top-60}, 1000);  //带滑动效果的跳转
    //滚动条消失

    //打开，关闭
    $(this).addClass("scrollbox-open");
    $(this).siblings().removeClass("scrollbox-open");
    //显示内容，隐藏内容
    $(this).siblings().find(".scrollbox-content").css("display","none");
    $(this).find(".scrollbox-content").css("display","block");
    //显示X图标
    //$(this).siblings().find(".scrollbox-close-btn").css("opacity","0");
    //$(this).find(".scrollbox-close-btn").css("opacity","1");
    //隐藏“车手简介”
    $(this).siblings().find(".figure_over").css("display","block");
    $(this).find(".figure_over").css("display","none");
    //放大name，删除浮动类名
    $(this).siblings().find(".figure_text").removeClass("scrollbox-title-bigger");
    $(this).find(".figure_text").addClass("scrollbox-title-bigger");
    $(this).siblings().find(".figure_text").addClass("fudong");
    $(this).find(".figure_text").removeClass("fudong");
    //调整背景位置
    $(this).siblings().find(".scrollbox-intro").css("transform","translate(0,0) matrix(1, 0, 0, 1, 0, 0)");
    $(this).find(".scrollbox-intro").css("transform","translate(0%, -50%) matrix(1, 0, 0, 1, 0, 0)");
    //缩小图片
    $(this).siblings().find(".figure_img").css("transform","translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)");
    $(this).find(".figure_img").css("transform","translate(0%, 25%) matrix(1, 0, 0, 1, 0, 0)" );
    //调整文字位置
    $(this).siblings().find(".scrollbox-content").css("transform","translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)");
    $(this).find(".scrollbox-content").css("transform","translate(0%, -31%) matrix(1, 0, 0, 1, 0, 0)");
    //调整标题位置
    $(this).siblings().find(".figure_word").css("transform","matrix(1, 0, 0, 1, 0, 134.13)");
    $(this).find(".figure_word").css("transform","matrix(1, 0, 0, 1, 0, 134.13)");
    //删除透明遮罩
    $(this).siblings().removeClass("zhezhao");
    $(this).addClass("zhezhao");
});
////X按钮

    $(".scrollbox-close-btn").on("mouseover", function () {
        $(this).find(".close-button__message").css("width","70px");
        $(this).find(".close-button__message>span").css("opacity","1");
    });
$(".scrollbox-close-btn").on("mouseout", function () {
    $(this).find(".close-button__message").css("width","0px");
    $(this).find(".close-button__message>span").css("opacity","0");
});
//点击close

