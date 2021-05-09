$(".gif").hide();
$(".mercury").click(function() {
    $(".result").text("Great job!");
    $(".result").css("color", "green");
   
     $(".result").css("text-align", "center");
      $(".jjjh").hide();
    $(".question").hide();
    $(".mercury").hide();
    $(".venus").hide();
    $(".earth").hide();
    $(".mars").hide();
    $(".jupiter").hide();
    $(".saturn").hide();
    $(".uranus").hide();
    $(".neptune").hide();
    $(".gif").show();

});
$(".venus").click(function() {
    $(".result").text("Try again! This is venus.");
    $(".result").css("color", "red");
});
$(".earth").click(function() {
    $(".result").text("Try again! This is earth.");
    $(".result").css("color", "red");
});
$(".mars").click(function() {
    $(".result").text("Try again! This is mars.");
    $(".result").css("color", "red");
});
$(".jupiter").click(function() {
    $(".result").text("Try again! This is jupiter.");
    $(".result").css("color", "red");
});
$(".saturn").click(function() {
    $(".result").text("Try again! This is saturn.");
    $(".result").css("color", "red");
});
$(".uranus").click(function() {
    $(".result").text("Try again! This is uranus.");
    $(".result").css("color", "red");
});
$(".neptune").click(function() {
    $(".result").text("Try again! This is neptune.");
    $(".result").css("color", "red");
});