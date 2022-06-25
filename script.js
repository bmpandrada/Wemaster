
$(document).ready(function () {
  //THIS IS FOR MENU TOGGLE
  //MENU TAB WILL APPEAR AFTER MINIMIZING
  $(".menu-btn").click(function () {
    $(this).toggleClass("active");

    $(".navbar .menu").toggleClass("active");
  });

  //THIS IS FOR AFTER CLICK MENU//
  $(".navbar .menu").on("click", (event) => {
    $(event.currentTarget).toggleClass("active");
    $(this).find(".menu-btn").toggleClass("active");
  });

  $(window).scroll(function () {
    //-------------------------///
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});
