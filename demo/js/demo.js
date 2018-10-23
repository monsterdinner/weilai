
    var liArr=$(".menu-item");
    liArr.mouseenter(function () {
        $(this).children("ul").css({"display":"block"});
    });
    liArr.mouseleave(function () {
        $(this).children("ul").css({"display":"none"});
    });


