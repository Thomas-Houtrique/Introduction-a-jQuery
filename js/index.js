$(".btn").click(function(e) {
    $(".first").css({"display":"block"});
});

$(".first").click(function(e) {
    $(".second").css({"display":"block"});
});

$(".second").click(function(e) {
   $(".third").css({"display":"block"});
});

$(".third").click(function(e) {
    $(".card-body").text("happy birthday");
 });

 