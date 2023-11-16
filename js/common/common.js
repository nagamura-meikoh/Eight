//ハンバーガーメニュー
$(function () {
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .nav').toggleClass('show');
      });
})
// メニュー項目配下のリンククリック時
$(function () {
    $('.nav_menu_li a').on('click', function(event) {
        $('.nav_toggle').trigger('click');
    });
})