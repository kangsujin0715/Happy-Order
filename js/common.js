$('html, body').scroll(function () {
    if ($(this).scrollTop() > 100) { // scroll 100이상 이동시
        $('.btn-top').addClass('active');
    } else {
        $('.btn-top').removeClass('active');
    }
})
$('.btn-top').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 900); // 1초 동안 스크롤 이동
    $(this).removeClass('active')
});