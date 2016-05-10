export default function poolCtrl() {
  $('.whiteCir').on('click', function () {
    var that = $(this);
    var index = that.parent('.ap_cont_item').index();
      $('.ap_cont_item').removeClass('current').eq(index).addClass('current');
  })
  
  
  $('.ap_ul').perfectScrollbar();
}
