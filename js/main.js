//ローディング画面
$(function () {
  var h = $(window).height();

  $('#wrap').css('display', 'none');
  $('#loader-wrap ,#loading').height(h).css('display', 'block');
});

$(window).on(`load`, function () { //全ての読み込みが完了したら実行
  $('#loader-wrap').delay(1500).fadeOut(400);
  $('#loading').delay(1500).fadeOut(300);
  $('#wrap').css('display', 'block');
});


//5秒たったら強制的にロード画面を非表示
$(function () {
  setTimeout('stopload()', 8000);
});



//ハンバーガーメニュー
$(function () {
  $('.Toggle').click(function () {
    $('.Toggle, .NavMenu').toggleClass('active');
  });
});

//ABOUT
$(function () {
  $(".en-button").on("click", function () {
      $(this).next().slideToggle();
  });

});

//CONTACT
const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
  alert('サンプルページの為、送信できません！');
});
