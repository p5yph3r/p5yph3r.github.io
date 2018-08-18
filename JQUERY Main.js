$(document).ready(function(){
    flag = 1
    $(".menuIcon").click(function(){
        if(flag==1){
            $(".open").hide();
            $(".close").show();
            
            $(".main").fadeIn(1000);
            flag=1;
        }
        else{
            $(".open").show();
            $(".close").hide();
            $(".main").fadeOut(1000);
            flag=1;
        }
    }); 
});








