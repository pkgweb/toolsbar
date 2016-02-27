(function(window, document, $){
$(document).ready(function(){
    $("#cornerstone-tools .profile-info").click(function(){
        $(".profile-menu").toggleClass( "toggled");
        return false;
    });

    $("#navtools .expanded").click(function(){
    	$(this).toggleClass( "toggled");
        return false;
    });

    $(".dropdown-menu li").on('click', 'a', function(e){ 
    e.preventDefault(); 
    var url = $(this).attr('href'); 
    window.open(url, '_blank');
	});

 });
})(window, document, jQuery);