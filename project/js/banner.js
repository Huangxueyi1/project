window.onload = function(){
	var banner = document.getElementById("banner");     //获取盒子
	var Width = banner.offsetWidth;                     //获取制定元素的宽度
	var next = document.getElementById("next");         //获取next按钮
	var prev = document.getElementById("prev"); 
	var ulList = document.getElementById("ulList");     //获取图片列表
	var timer = null;
	
	var index = 1;                                     //记录当前层次
	next.onclick = function(){
		if(index>3){
			index = 0;
		}
		ulList.style.left = -Width*index+"px";
		index++;
	}
	prev.onclick = function(){
		if(index<2){
			index = 5;
		}
		ulList.style.left = -Width*(index-2)+"px";
		index--;
	}
	function play(){
		timer = setInterval(function(){
			next.onclick();
		},2000);
	}
	function stop(){
		clearInterval(timer);
	}
	banner.onmouseover = stop;                     //鼠标移上去，轮播停止
	banner.onmouseout = play;                      //鼠标移开，开始轮播
	play();                                        //调用play函数
} 

