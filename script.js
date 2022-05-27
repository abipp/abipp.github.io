$(window).on("load", function () {
  $(".pKiri").addClass("muncul");
  $(".pKanan").addClass("muncul");
});
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  if (wScroll > $("#projects").offset().top - 300) {
    $("#projects .card").each(function (i) {
      setTimeout(function () {
        $("#projects .card").eq(i).addClass("muncul");
      }, 100 * (i + 1));
    });
  }
});
