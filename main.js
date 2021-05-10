;(function ($) {
    $(function () {
        $('.author .share').click(function() {
            $('.clicked-share').toggleClass('active')
            $('.author').toggleClass('hide')
        })

        $('.clicked-share .share').click(function() {
            $('.clicked-share').removeClass('active')
            $('.author').removeClass('hide')
        })
    })
})(jQuery)