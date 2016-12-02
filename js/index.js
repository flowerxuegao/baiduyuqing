$(function(){
var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
           return;
        }
        num++;
  //alert(1)
        //document.title=num;
        if(num==$("section").length){
          //alert(1);
            num=$("section").length-1;
            document.title=num;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH)
    })
    touch.on("body","swipedown","#fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        document.title=num;
        if(num==-1){
            num=0;
            document.title=num;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH);
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;


        $(".xun").each(function(index,obj){
            if(num==0){
                $(".left").css({
                    transform:"translate(0px,0)",
                    opacity:"1"
                })
                $(".right").css({
                    transform:"translate(0px,0)",
                    opacity:"1"
                })
                return
            }
            if(num!==0){
                console.log(index)
                if(index==num){
                    $(".left").eq(index).css({
                        transform:"translate(0px,0)",
                        opacity:"1"
                    })
                    $(".right").eq(index).css({
                        transform:"translate(0px,0)",
                        opacity:"1"
                    })
                }else{
                    $(".left").eq(index).css({
                        transform:"translate(-50px,0)",
                        opacity:"0"
                    })
                    $(".right").eq(index).css({
                        transform:"translate(50px,0)",
                        opacity:"0"
                    })
                }
            }
        })


})


    var flag2=true;
    $(".menu").click(function(){
        if(flag2){
            $(this).find(".menu-topline").css({
                transform:"translate(0,7px) rotate(45deg)"
            })
            $(this).find(".menu-bottomline").css({
                transform:"translate(0,-7px) rotate(-45deg)"
            })

            /*菜单变化*/
            $(".menu-option li").each(function(index,obj){

                $(obj).css({
                    opacity:0,
                    transform:"rotate(0deg)",
                    animation:"menu-option 0.3s linear forwards "+(0.2*index)+"s",//有空格
                })
            })
            flag2=false;
        }else{
            $(this).find(".menu-topline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(this).find(".menu-bottomline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu-option li").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotate(0deg)",
                    animation:"menu-option1 0.3s linear forwards "+(1.2-0.2*index)+"s"
                })
            })
            flag2=true;

        }

    })


    $(window).resize(function(){
        clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",clientH*-num);
        if("clientH>1000"){
            $(".menu-option li").css({
                animation:"none",
                opacity:0,
            transform:"rotate(90deg)"
            })
        }
    })
})


