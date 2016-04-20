function index() {
    $('.circle_btn').on('click', function () {
        $('.email_input').css('animation', 'email 1s forwards').removeAttr('readonly');
        $('.name_input').css('animation', 'name 1s forwards').removeAttr('readonly');
        $('.message_input').css('animation', 'message 1s forwards').removeAttr('readonly');
        $('.circle_btn').css('animation', 'circle 0.5s forwards');
        setTimeout(function () {
            $('.submit_btn').css('animation', 'submit 0.5s forwards');
        }, 1000)
    })
    $('.self_icon').on('click', function () {
        $('.self_icon').css('animation', 'icon 1s forwards');
        $('.slef_enter').css('animation', 'enter 0.2s forwards');
        $('.self_input').css('animation', 'Pwdinput 0.8s forwards');
    })
}
module.exports = index;