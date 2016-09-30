$(document).ready(function(){
    $("a").on('click', function(event){
        if(this.href.split('#')[0] == window.location.href.split('#')[0]  && this.hash !== " "){
            event.preventDefault();
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top - $('#navbarFixed').height()
            }, 800);
        }
    });
})