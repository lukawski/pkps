$(function () {
    if (window.screen.width > 1085) {
        $('.dropdown')
            .removeAttr('data-toggle')
            .mouseover(function(){
                $(this).children('a').css('background-color', 'white')
                $(this).children('.dropdown-menu').slideDown(200)
            })
            .mouseleave(function(){
                $(this).children('a').removeAttr('style')
                $(this).children('.dropdown-menu').slideUp(200)
            })
    }
    
    $("a").on('click', function(event){
        if(this.href.split('#')[0] == window.location.href.split('#')[0]  && this.hash !== " "){
            event.preventDefault()
            var target = this.hash
            $('body, html').animate({
                scrollTop: $(target).offset().top - $('#navbarFixed').height()
            }, 1000, function () {
                $('a[href=' + target + ' ]').tab('show')
            });
        }
    })
})