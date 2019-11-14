$(document).ready(function() {
    
    $('.myAccount-password button').on('click', function() {
        
        if ($('.input-myAccount-password').attr('password-shown') == 'false') {
            
            $('.input-myAccount-password').removeAttr('type');
            $('.input-myAccount-password').attr('type', 'text');
            
            $('.input-myAccount-password').removeAttr('password-shown');
            $('.input-myAccount-password').attr('password-shown', 'true');
            
            $('.myAccount-password button').html('Hide');
            
        }else {
            
            $('.input-myAccount-password').removeAttr('type');
            $('.input-myAccount-password').attr('type', 'password');
            
            $('.input-myAccount-password').removeAttr('password-shown');
            $('.input-myAccount-password').attr('password-shown', 'false');
            
            $('.myAccount-password button').html('Show');
            
        }
        
    });
    
});