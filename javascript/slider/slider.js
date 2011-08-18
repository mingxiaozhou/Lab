$(function(){
	var sw=0;
	$(".demo .num a").mouseover(function(){
		sw=$(".num a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".demo .num a").eq(i).addClass("cur").siblings("a").removeClass("cur");
		$(".demo ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
	}
	$(".demo").hover(
		function(){
			if(myTime){clearInterval(myTime)}
		},
		function(){
			myTime=setInterval(function(){myShow(sw);sw++;if(sw==5){sw=0}},2000);
		}
	);
});

