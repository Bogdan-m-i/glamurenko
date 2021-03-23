$(document).ready(function () {
    const mainHeight = $('.section-main').height()
    const navbar = $('.navbar')

    $(window).scroll(() => {
        if ($(window).scrollTop() > mainHeight) {
            navbar.addClass('position-fixed')
            navbar.addClass('py-3')
            navbar.removeClass('py-5')
            navbar.removeClass('position-absolute')
            navbar.addClass('bg-black')
        } else {
            navbar.removeClass('position-fixed')
            navbar.removeClass('py-3')
            navbar.removeClass('bg-black')
            navbar.addClass('position-absolute')
            navbar.addClass('py-5')
        }
        
    })

    $('.navbar').on('show.bs.collapse', function () {
        navbar.addClass('bg-black')    })
    $('.navbar').on('hidden.bs.collapse', function () {
        if ($(window).scrollTop() < mainHeight) {
            navbar.removeClass('bg-black')
        }
    })
})