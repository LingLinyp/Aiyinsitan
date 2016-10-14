
  $(document).ready(function() {

        
        $("#menucontact").hide();
        $("#menu").hide();//menu 默认隐藏

       $('ul>li>.current').click(function(){
           
        $('body').animate({scrollTop:$('#item1').offset().top - 150});
         
        });
          $('.menu1').click(function(){
            //$('h2').css('color','blue');
          $('body').animate({scrollTop:$('#item2').offset().top - 150});
         
        });
          $('.menu2').click(function(){
            //$('h2').css('color','blue');
          $('body').animate({scrollTop:$('#item3').offset().top - 120});
         
        });
         
         $('.menu3').click(function(){
            //$('h2').css('color','blue');
          $('body').animate({scrollTop:$('#item4').offset().top - 120});
         
        });
        $('.menu4').click(function(){
            //$('h2').css('color','blue');
          $('body').animate({scrollTop:$('#item5').offset().top - 150});
         
      });

         $(window).scroll(function(){
           if($(window).scrollTop()>200)
          $(".navbar").addClass("main");
          else
               $(".navbar").removeClass("main");
         });//导航栏背景变为不透明
         
         $(window).scroll(function() {
                //若滚动条离顶部大于400元素
                if($(window).scrollTop()>400)
                    $("#menu").fadeIn();//menu 淡入
                
               
                else

                    $("#menu").fadeOut();//其余情况menu淡出
           });//menu 函数结束
         $(window).scroll(function(){
           if($(window).scrollTop()>700)
           $("#menucontact").fadeIn();
         
          else 
           $("#menucontact").hide();
           
         });
             
        });
