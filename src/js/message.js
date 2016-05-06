// 相册预览弹出框
$('.album_show_item_img').mouseenter(function () {
  $(this).find('.album_wrap').show();
})
$('.album_show_item_img').mouseleave(function () {
  $(this).find('.album_wrap').hide();
})

// 动态读取相片个数与设置预览ul的宽度
var imgs = $('.album_show_item').length;
$('.slider').css('width', imgs * 590 + 'px');
$('.total').text(imgs);
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
// 点击出现相册预览
var currentImg;
$('.album_show_item_img').on('click', function () {
  currentImg = $(this).parents('.album_show_item').index();
  $('.current').text(currentImg + 1);
  var text = $(this).find('img').attr('data-ttl');
  $('.imgTtl').text(text);
  $('.model').show();
  $('.personImg').hide();
  $('.slider').css('left', - currentImg * 590 + 'px');
})
// 关闭按钮
$('.close').on('click', function () {
  $('.model').hide();
  $('.personImg').show();
})
// 上一张
$('.prev').on('click', function () {
  var left = parseInt($('.slider').css('left'));
  if ($('.slider').is(':animated') || left === 0) {
    return false;
  }
  var ttl = $('.slider').find('li').eq(currentImg - 1).attr('data-ttl');
  $('.imgTtl').text(ttl);
  $('.current').text(parseInt($('.current').text()) - 1)
  $('.slider').animate({ left: left + 590 + 'px' });
  currentImg = currentImg - 1;
})
// 下一张
$('.next').on('click', function () {
  var left = parseInt($('.slider').css('left'));
  if ($('.slider').is(':animated') || left === - 590 * (imgs - 1)) {
    return false;
  }

  var ttl = $('.slider').find('li').eq(currentImg + 1).attr('data-ttl');
  $('.imgTtl').text(ttl);
  $('.current').text(parseInt($('.current').text()) + 1);
  $('.slider').animate({ left: left - 590 + 'px' });
  currentImg = currentImg + 1;
})

$('.album_show').perfectScrollbar();
