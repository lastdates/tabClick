/**
* tabClick 1.0
* tabClick makes creating tabs in content super easy
*
* Copyright 2015, Atul Gupta
* Licensed under the MIT license.
* https://github.com/lastdates/tabClick
*
* Date: Thu Mar 19 2015 02:29:11 GMT+0530 (IST)
*/
(function($){
	var T={},
	click=function(p){
		$().tabClick(p.data[0],p.data[1]);
		return false;
	};
	$.fn.tabClick=function(name,x){
		var e=T[name],self=0,t=e.a;
		if(x > -1 && x < e.l){
			if(e.d.eq(x).css('display')=='block')self=1;
			if(e.t==2)t=x;else e.a=-1;
			if(t > -1){e.h.eq(t).removeClass('active');e.d.eq(t).hide();}
			if(!e.t || !self){e.h.eq(x).addClass('active');e.d.eq(x).show();e.a=x;if(e.c)e.c(x,self);}
		}
	};
	$.fn.tabClickInit=function(name,heads,data,type,tabopen,hover,keyboard,callback){
		T[name]={t:type,h:$(heads),d:$(data),a:-1,c:callback};
		var e=T[name],f=$().tabClick,t,y;
		e.l = (e.h.length > e.d.length) ? e.d.length : e.h.length ;
		e.d.hide();
		e.h.removeClass('active')
			.each(function(i){
				$(this).on("click",[name,i],click);
			});
		if('ontouchstart' in window){
			e.h
			.each(function(i){
				$(this).on("touchstart",function(){y=document.body.scrollTop;});
				$(this).on("touchend",function(E){if(y==document.body.scrollTop){E.preventDefault ? E.preventDefault() : E.returnValue=false;this.click;}});
			});
		}
		if(hover){
			e.h
			.each(function(i){
				$(this).on("mouseover",[name,i],function(p){t=setTimeout(function(){f(p.data[0],p.data[1])},380);});
				$(this).on("mouseout",function(){clearTimeout(t);});
			});
		}
		if(keyboard){
			$(document).on("keydown",function(E){if(E.keyCode==37 || E.keyCode==39)f(name,e.a+E.keyCode-38);});
		}
		f(name,tabopen);
	};
})(jQuery);
