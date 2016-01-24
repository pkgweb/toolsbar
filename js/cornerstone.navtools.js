jQuery(document).ready(function(){
    jQuery("#cornerstone-tools .profile-info").click(function(){
        jQuery(".profile-menu").toggleClass( "toggled");
        return false;
    });

    jQuery("#navtools .expanded").click(function(){
    	jQuery(this).toggleClass( "toggled");
        return false;
    });

 });