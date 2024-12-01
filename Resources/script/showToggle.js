export default function showToggle() {
  $("[show-modal]").click(function () {
    let modal = $(this).attr("show-modal");
    $(`.${modal}`).css("display", "grid");
  });
  $(".close_modal").click(function () {
    $(this).closest(".modal").hide();
  });
  $(".modal").click(function () {
    $(this).hide();
  });
  $(".modal_content").click(function (e) {
    e.stopPropagation();
  });

  $(".sidenav").click(function () {
    $(".sidenav").removeClass("sidenav_active");
  });
  $(".sidenav aside").click(function (e) {
    e.stopPropagation();
  });

  $(".menu_btn").click(function () {
    $(".sidenav").addClass("sidenav_active");
  });
  $(".close_sidenav").click(function () {
    $(".sidenav").removeClass("sidenav_active");
  });

  $(document).click(function () {
    $(".fund_menu").removeClass("menu_active");
  });

  $(".current_page").click(function (e) {
    e.stopPropagation();
    $(".fund_menu").toggleClass("menu_active");
  });

  $(".custom_tab").click(function () {
    let displayType = $(this).attr("data-showType") || "flex";
    let showItem = $(this).attr("data-show");
    let hideItem = $(this).attr("data-hide");
    $(`[data-hide="${hideItem}"]`).removeClass("tab_active");
    $(`[data-show="${showItem}"]`).addClass("tab_active");

    $(`.${hideItem}`).hide();
    $(`.${showItem}`).css("display", displayType);
  });

  $(".vip_next").click(function () {
    let next_ele = $(".vip_active").next();
    if (next_ele.next().length) {
      $(".vip_active").removeClass("vip_active");
      next_ele.addClass("vip_active");
    }
  });
  $(".vip_prev").click(function () {
    let next_ele = $(".vip_active").prev();
    if (next_ele.prev().length) {
      $(".vip_active").removeClass("vip_active");
      next_ele.addClass("vip_active");
    }
  });
}
