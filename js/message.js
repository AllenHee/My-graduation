module.exports = function message() {
  // 相册预览弹出框
  $('.album_show_item').mouseenter(function () {
    $(this).find('.album_wrap').show()
  })
  $('.album_show_item').mouseleave(function () {
    $(this).find('.album_wrap').hide();
  })
  
  // 点击切换页面
  $('.threePoint').on('click', 'li', function () {
    if ($(this).hasClass('currentPage')) {
      return false;
    }
    var index = $(this).index();
    if (index === 0) {
      $('.personImg').animate({ opacity: 0 }, 500);
      $('.personMotto').animate({ opacity: 0 }, 500);
      setTimeout(function () {
        $('.personMsg').css('opacity', 0).show().animate({ opacity: 1 }, 500)
        $('.personImg').hide();
        $('.personMotto').hide();
      }, 500)
    }
    if (index === 1) {
      $('.personMsg').animate({ opacity: 0 }, 500);
      $('.personMotto').animate({ opacity: 0 }, 500);
      setTimeout(function () {
        $('.personImg').css('opacity', 0).show().animate({ opacity: 1 }, 500)
        $('.personMsg').hide();
        $('.personMotto').hide();
      }, 500)
    }
    if (index === 2) {
      $('.personImg').animate({ opacity: 0 }, 500);
      $('.personMsg').animate({ opacity: 0 }, 500);
      setTimeout(function () {
        $('.personMotto').css('opacity', 0).show().animate({ opacity: 1 }, 500)
        $('.personImg').hide();
        $('.personMsg').hide();
      }, 500)
    }
  })
  $('.album_show_item').on('click', function () {
    var index = $(this).index();
    var text = $(this).find('img').attr('data-ttl');
    $('.imgTtl').text(text);
    $('.album_wrap').show();
    $('.slider').css('left', )
  })
  
  
}