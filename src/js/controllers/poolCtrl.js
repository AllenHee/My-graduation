export default function poolCtrl() {
  $('.whiteCir').on('click', function () {
    // $('.current').find('.whiteCir').css('animation', 'whiteCirShow 0.5s forwards 0.5s');
    // $('.current').find('.ap_cont_item_detail').animate({height: 0}, 500);
    // $('.current').animate({height: '30px'}, 500);
    $(this).css('animation', 'whiteCirHide 0.5s forwards');
    setTimeout(function () {
      $(this).parent('.ap_cont_item').animate({ height: '116px' }, 500);
      $(this).parent('.ap_cont_item').find('.ap_cont_item_detail').animate({ height: '116px' }, 500);
    }, 500);
  })
}
