//ローディング画面
$(function () {
  var h = $(window).height();

  $('#wrap').css('display', 'none');
  $('#loader-wrap ,#loading').height(h).css('display', 'block');
});

$(window).on(`load`, function () { //全ての読み込みが完了したら実行
  $('#loader-wrap').delay(900).fadeOut(600);
  $('#loading').delay(800).fadeOut(500);
  $('#wrap').css('display', 'block');
});


//5秒たったら強制的にロード画面を非表示
$(function () {
  setTimeout('stopload()', 5000);
});

function stopload() {
  $('#wrap').css('display', 'block');
  $('#loader-wrap').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
}


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