$(document).ready( function(){
    $('#nav-more').click( function() {
        var toggleWidth = $("#ser1").width() == 200 ? "0px" : "200px";
        $('#ser1').animate({ width: toggleWidth });
    });
});