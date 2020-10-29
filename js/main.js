
$(document).ready( function() {

    var dropLink = $('.with-dropdown > a');
    var dropMenu = $('.with-dropdown > .dropdown-menu');


    dropLink.click( function (){

        var actualMenu = $(this).next('.dropdown-menu');

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();

    });

}); // ------end document