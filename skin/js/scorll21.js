
/*滑块*/
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
/*滑块 end*/


//QQ漂浮
function qq_piaofu(){
	//qq
var menuYloc = $("#swt_gg0").offset().top;
$(window).scroll(function (){
var offsetTop = menuYloc + $(window).scrollTop() +"px";
$("#swt_gg0").animate({top : offsetTop },{ duration:600 , queue:false });
});
$(".hover_showqq").click(function (){
$(this).addClass("hover_showqq_show")
$("#showqq").toggle();

});
$("#close_qq").click(
   function(){
	 $("#swt_gg0").hide();
	}
					 )
}
//QQ漂浮 end


$(function(){
//下拉菜单
  $('li.mainlevel').mousemove(function(){
  $(this).find('.lbul').slideDown();
  $(this).addClass("hover")
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('.lbul').slideUp("")
  $(this).removeClass("hover")
  });
});
//下拉菜单end


//三级分类
function menu_sanji(){
	   $(".on_clickm").click(function() {
		$(this).next("div").slideToggle("slow").siblings(".show_box:visible").slideUp("slow");
		$(this).toggleClass("activeTitle");
		$(this).siblings(".activeTitle").removeClass("activeTitle");
	}); 
}
//三级分类 end


// 选项卡
var modTab = {
	init : function(set){
		var index = 0;
		var defaultSet = {
				event : 'click', // click,mouseover
				change : $.noop()
			};
		var set = $.extend(defaultSet,set);
		
		set.root.find('.mod-tab-title li').each(function(){
			if($(this).hasClass('cur')){
				index = $(this).index();
			}	
		});
		set.root.find('.mod-tab-main .tab-content').eq(index).show().siblings().hide();
		
		set.root.find('.mod-tab-title li').on(set.event,function(){
			index = $(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			set.root.find('.mod-tab-main .tab-content').eq(index).show().siblings().hide();

		})
	}	
}



// 手风琴效果
$(function(){
	
	$('.select').data({isShow:false}); 	
	
	$('.select').click(function(e){
	
		$(this).data('isShow') ? $(this).children('ul').hide() : $(this).children('ul').show();
		$(this).data({isShow:!$(this).data('isShow')});
		
		if(e.target.tagName == 'LI'){
			
			var text = $(e.target).html(); // 文本内容
			var value = $(e.target).attr('rel'); // 存储的值
			
			$(this).data({value:value});
			$(this).children('.show').html(text);
		}
		
		e.stopPropagation();
	});
	
	$(document).click(function(){
		$('.select').each(function(index, element) {
			if($(this).data('isShow')){
				$(this).children('ul').hide();
				$(this).data({isShow : false})
			}
		});
	});	
	// 选项卡
	modTab.init({
		root:$('.lbTab')	
	});
	// 选项卡
	modTab.init({
		root:$('.edTab')	
	});
	// 选项卡
	modTab.init({
		root:$('.community .reg')	
	});
	
	$.accordion({
		root : $('.accordion')
	});
	//首页手风琴效果
	
});

$.extend({
	accordion : function(set){
		
		var root = set.root;
		
		root.children('.picture').eq(0).css({width:267}).next('.content').css({width:306});
		root.children('.picture').eq(0).children('.name').css({display:'none'});
		root.children('.picture').eq(0).children('.nameBox').css({display:'none'});
		

		var tmout=null;
		root.children('.picture').hover(function(){

			var obj=$(this);

			
			clearTimeout(tmout);
			tmout=setTimeout(
				function()
				{
					if(obj.children('.name').width() == 103){
						obj.children('.name').fadeOut().parent().siblings().children('.name').fadeIn();
						obj.children('.nameBox').fadeOut().parent().siblings().children('.nameBox').fadeIn();;
					}
					
					
					obj.animate({width:267}).siblings('.picture').animate({width:103},'easeInOutSine');
					obj.next('.content').animate({width:306},'easeInOutSine').siblings('.content').animate({width:0});
				},200
			);
			
		},function(){
			
		});
	}	
});







