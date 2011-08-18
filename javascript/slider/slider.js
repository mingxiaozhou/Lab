function slider(config){
	this.init(config);
}
slider.prototype = {
	timer : null,
	curItem : 0,
	selected : "",
	picObj : "",
	numObj : "",
	total : 0,
	init : function(config){
		this.selected = config.selected;
		this.picObj = config.picObj;
		this.numObj = config.numObj;
		this.total = $(this.picObj).size();
		this.initElements();
		this.run();
	},
	initElements : function(){
		var _this = this,numStr = "",zNum = this.total;
		for(var i=0; i<this.total; i++){
			if(i == 0){
				numStr += '<a class="'+ _this.selected  +'">'+ (i+1)  +'</a>';
			}else{
				numStr += '<a>'+ (i+1)  +'</a>';
			}
		}
		$(this.picObj).each(function(i){$(this).css("z-index",zNum--);});
		$(this.numObj).html(numStr);
		$(this.numObj + " a").bind("mouseenter",this,this.onMeHandler);
	},
	onMeHandler : function(event){
		var _this = event.data;
		_this.curItem = $(this).index();
		_this.show(_this.curItem);
	},
	show : function(num){
		$(this.numObj + " a").removeClass().eq(num).addClass(this.selected);
		$(this.picObj).eq(num).stop(true,true).fadeIn(600).siblings().fadeOut(600);
	},
	run : function(){
		var _this = this;
		this.timer = setInterval(function(){
			_this.show(_this.curItem);
			_this.curItem++;
			if(_this.curItem==_this.total){_this.curItem=0}
		},2000);
	}
}
var s = new slider({picObj : ".demo ul li",numObj : ".num",selected : "cur"});
