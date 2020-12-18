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
    $("body").css({"background-image":"url(http://miam-images.m.i.pic.centerblog.net/o/6d32cf19.jpg)"});
 });

 $('.third').click(function (e) {
    var obj = document.createElement("audio");
        obj.src = "son1.mp3"; 
        obj.play();
 });



$('.card').click(function (e) { 
    var obj = document.createElement("audio");
        obj.src = "son2.mp3"; 
        obj.play(); 
});

$('.btn').click(function (e) { 
    var obj = document.createElement("audio");
        obj.src = "son2.mp3"; 
        obj.play(); 
});
