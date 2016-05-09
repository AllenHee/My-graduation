export default function poolCtrl() {
  $('.whiteCir').on('click', function () {
    $('.current').find('.whiteCir').css('animation', 'whiteCirShow 0.5s forwards');
    $('.current').find('.ap_cont_item_detail').animate({height: 0}, 500);
    $('.current').animate({height: '30px'}, 500);
    var that = $(this);
    var index = that.parent('.ap_cont_item').index();
    that.css('animation', 'whiteCirHide 0.5s forwards');
    setTimeout(function () {
      // that.parent('.ap_cont_item').animate({ height: '116px' }, 500);
      that.parent('.ap_cont_item').addClass('c');
      that.parent('.ap_cont_item').find('.ap_cont_item_detail').animate({ height: '116px' }, 500);
      $('.ap_cont_item').removeClass('current').eq(index).addClass('current');
    }, 500);
  })
}
