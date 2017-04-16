$(document).ready(function(){

    var emailFormSelect = $('.email-form');
    var labelEmail = $('label.email');

    emailFormSelect.on("blur focus", function(){
        labelEmail.toggleClass('float-up');
    });	
});