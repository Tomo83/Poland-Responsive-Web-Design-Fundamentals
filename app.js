$(document).ready(function () {
    var $icon = $('.fa-bars');
    var $list = $('.nav__list');
    
    $icon.on('click', function(e){
        if($list.is(':hidden')){
            $list.slideDown();
        }else {
            $list.slideUp();
        }
        e.stopPropagation();
    });
});