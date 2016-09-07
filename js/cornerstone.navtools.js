(function(window, document, $){
$(document).ready(function(){
    $("#cornerstone-tools .profile-info").click(function(){
        $(".profile-menu").toggleClass( "toggled");
        return false;
    });

    $("#navtools .expanded > a ").click(function(){
    	$(this).parent().toggleClass( "toggled");
        return false;
    });

 });
})(window, document, jQuery);
