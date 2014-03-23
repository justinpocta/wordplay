// ref : http://jsfiddle.net/27s5y/
//  use LI.count+Height to decide >= 18830 / 201 / 18629 part.

/* $('.words').scroll(function() {
    if ( $('.words').scrollTop() >= 18830 ) {
        $('.words').scrollTop(201);
    }
    else if ( $('.words').scrollTop() == 0 ) {
        $('.words').scrollTop(18629);
    }
 }); */

/*
// may not work due to overflow scroll approach
// http://jsfiddle.net/2L23c/
// http://stackoverflow.com/questions/20477420/infinite-scroll-in-both-directions

(function($){
    $(document).ready(function(){
        var html = $(".words").html();
        var wordsUL = '<ul class="words">'+html+'</div>';
        $(window).scrollTop(1);
        $(window).scroll(function() {
            if ( $(window).scrollTop() >= ($('body').height() - $(window).height()) ) {
                $(".words").last().after(wordsUL);
                if ($(".words").length > 2) {
                    $(".words").last().prev().remove();
                    $(window).scrollTop($(window).scrollTop() - $(".words").first().height());
                }
            }
            else if ( $(window).scrollTop() == 0 ) {
                $(".words").first().before(wordsUL);
                $(window).scrollTop($(".words").first().height());
                if ($(".words").length > 2) {
                    $(".words").last().remove();
                }
            }
        });
    });
})( jQuery );
*/

