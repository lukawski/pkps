$(function () {
    $("a").on('click', function(event){
        if(this.href.split('#')[0] == window.location.href.split('#')[0]  && this.hash !== " "){
            event.preventDefault()
            var target = this.hash
            $('body, html').animate({
                scrollTop: $(target).offset().top - $('#navbarFixed').height()
            }, 500, 'swing', function () {
                window.location.hash = target
                $('a[href=' + target + ' ]').tab('show')
            });
        }
    })
})