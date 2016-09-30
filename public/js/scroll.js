$(document).ready(function(){
    $("a").on('click', function(event){
        console.log(this.hash);
        if(this.hash !== " "){
            event.preventDefault();
            
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top - $('#navbar').height()
            }, 800);
        }
    });
})