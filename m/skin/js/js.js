function autoh(){
      var ath=$('.autoh').height();
      $('.autohh').css({'height':ath-20+'px'});
    }
function autoimg_list(){
        var wit=$('.imgautolist li img').width(); 
        var cplbinfo_h=$(".imgautolist li .cplbinfo").height();
        var nnh = cplbinfo_h +  wit;
        $('.imgautolist').find("li .imgbox").css({'height':wit+'px'});
        // $('.imgautolist').find("li").css({'height':nnh+20+'px'});      
        // $('.imgautolist').find("li a").css({'height':nnh-1+'px'});
}

$(document).ready(function() {
//��ʼ������
	var setx = $(".indexl"); //��ȡ�ı������   
	setx.click(function() {
		setx.val("");
		setx.css({
			color: "#4B4B4B"
		});
	});
	//����end
//���������˵�
		$(".on_clickm").click(function() {
		$(this).next("ul").slideToggle("slow").siblings(".show_box:visible").slideUp("slow");
		$(this).toggleClass("activeTitle");
		$(this).siblings(".activeTitle").removeClass("activeTitle");
	});
	
	//���������˵� end	
})

$(document).ready(function() {
    var flbox = $('.flbox');
    nav = $('.nav');
    box = $('.mainbox');
    flbox.click(function() {
            box.animate({right:'40%'},'500');
			nav.animate({right:'0px'},'500');
			$('.nav').css("display", "block");
			$('.mainboxbg').css("display", "block");
			 return; 

    });
	$('.mainboxbg').click(function()
								   {
									 box.animate({right:'0'},'500');
									 nav.animate({right:'-40%'},'500');
									 $(this).hide();
              return; 
									   
									   }
								   
								   )
	
});


