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

 $('.third').on('click', function () { 
    var obj = document.createElement("audio");
        obj.src = "son1.mp3"; 
        obj.play(); 
});

$('.card').on('click', function () { 
    var obj = document.createElement("audio");
        obj.src = "son2.mp3"; 
        obj.play(); 
});