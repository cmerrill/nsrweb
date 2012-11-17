$(function() {
    var supports_html5_storage = function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    var setColors = function (color, duration) {
        $(".coloured-border").animate({
            "border-bottom-color": color
        }, duration);

        $("a").data("color", color);

        if (supports_html5_storage()) {
            window.localStorage.setItem("color", color);
        }
    };

    $(".colour-box").click(function(event) {
        setColors($(this).css("background-color"), 800);
    });

    $("a").not(".social a").hover(function(event) {
        $(this).css("color", $(this).data("color"));
    }, function(event){
        $(this).css("color", "");
    });

    if (supports_html5_storage()) {
        var color = window.localStorage.getItem("color");
        if (color) {
            setColors(color, 1);
        }
    }
});