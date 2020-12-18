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

$('.card').click(function (e) { 
    var obj = document.createElement("audio");
        obj.src = "son.mp3"; 
        obj.play(); 
});

$('.btn').click(function (e) { 
    var obj = document.createElement("audio");
        obj.src = "son.mp3"; 
        obj.play(); 
});