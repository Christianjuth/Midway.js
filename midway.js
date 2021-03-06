function Midway(){
    var $centerHorizontal = $('.midway-horizontal'),
        $centerVertical = $('.midway-vertical');

    $centerHorizontal.css({
        'display' : 'inline',
        'position' : 'absolute',
        'left' : '50%'
    });
    $centerVertical.css({
        'display' : 'inline',
        'position' : 'absolute',
        'top' : '50%',
    });
    $centerHorizontal.each(function(){
        $(this).css('marginLeft', -$(this).outerWidth()/2);
    });
    $centerVertical.each(function(){
        $(this).css('marginTop', -$(this).outerHeight()/2);
    });
}
$(window).on('load', Midway);
$(window).on('resize', Midway);
