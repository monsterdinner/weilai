//var figure=$(".figure");
//   figure.hover(function () {
//      $(this)
//   });

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
    ctx.moveTo(17, 64);
    ctx.lineTo(49, 64);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(64, 17);
    ctx.lineTo(64, 49);
    ctx.stroke();
    function startcircle() {
        function circle(a, b) {
            ctx.beginPath();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth=2;
            ctx.arc(64, 64, 63, a * Math.PI, b * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(17, 64);
            ctx.lineTo(49, 64);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(64, 17);
            ctx.lineTo(64, 49);
            ctx.stroke();
        }
        var a = 1, b = 2;
        var t = setInterval(() => {
            ctx.clearRect(0, 0, 128, 128);
            a += 0.01;
            b += 0.018;
            circle(a, b)
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
            ctx.moveTo(17, 64);
            ctx.lineTo(49, 64);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(64, 17);
            ctx.lineTo(64, 49);
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