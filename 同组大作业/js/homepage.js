// 全屏轮播图
var slideshow = document.getElementById("slideshow");
var web = document.getElementById("web");
var image = document.getElementById("image");
var left = document.getElementById("left");
var right = document.getElementById("right");
var navList = document.getElementById("nav").children;
var webs = ["新海滨民宿.html", "zong.html", "index.html", "TraditResidBuildings.html", ""];
var index = 1;
var ifMove = false;
web.href = webs[0];
// 右滑函数
function next(){
	image.src = "images/imge00" + index + ".jpg";
	web.href = webs[index - 1];
	navChange();
	index += 1;	
	if(index == 6){
		index = 1;
	}
}
// 左滑函数
function prve(){
	image.src = "images/imge00" + index + ".jpg";
	web.href = webs[index - 1];
	navChange();
	index -= 1;	
	if(index == 0){
		index = 5;
	}
}
// 定时执行
var intervalId = setInterval(next, 3000);
slideshow.onmouseover = function(){
	clearInterval(intervalId);
}
slideshow.onmouseout = function(){
	intervalId = setInterval(next, 3000);
}
//小按钮背景色切换
function navChange(){
	for(var i = 0; i < navList.length; i++){
		navList[i].className = "";
	}
	navList[index - 1].className = "act";
}
//小按钮点击事件
for(var i = 0; i < navList.length; i++){
	navList[i].idx = i;
	navList[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		next();
	}
}
// 左右按钮
left.onclick = function(){
	prve();
}
right.onclick = function(){
	next();
}

// 导航栏
var p1=document.getElementById("p1");
   var do1=document.getElementById("do1");
   var list=document.getElementById("list");
   window.onscroll=function(){
      var st=document.documentElement.scrollTop;
      // console.log(st);
      if(st>600){
          list.style.display="block";
      }
      else{
          list.style.display="none";
      }
}

// 搜索框
var search = document.getElementById("search");
var hidden = document.getElementById("hidden");
search.onfocus = function(){
	hidden.style.opacity = "1.0";
	hidden.style.marginLeft = "600px";
	hidden.style.marginTop = "75px";
}
search.onblur = function(){
	hidden.style.opacity = "0";
	hidden.style.marginLeft = "1000px";
	hidden.style.marginTop = "10px";
}

// 特色民宿
var sea1 = document.getElementById("sea1");
var sea2 = document.getElementById("sea2");
var sea3 = document.getElementById("sea3");
var ice1 = document.getElementById("ice1");
var ice2 = document.getElementById("ice2");
var ice3 = document.getElementById("ice3");

var warm1 = document.getElementById("warm1");
var warm2 = document.getElementById("warm2");
var warm3 = document.getElementById("warm3");
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
var con3 = document.getElementById("con3");

var oth1 = document.getElementById("oth1");
var oth2 = document.getElementById("oth2");
var oth3 = document.getElementById("oth3");

sea1.onmouseover = function(){
	sea2.style.opacity = 0.6;
	sea3.style.opacity = 0.6;
	sea1.style.width = "400px";
	sea1.style.height = "245px";
	sea1.style.border = "2px solid #00ACF6";
}
sea1.onmouseout = function(){
	sea2.style.opacity = 1;
	sea3.style.opacity = 1;
	sea1.style.width = "380px";
	sea1.style.height = "235px";
	sea1.style.border = "none";
}
sea2.onmouseover = function(){
	sea1.style.opacity = 0.6;
	sea3.style.opacity = 0.6;
	sea2.style.width = "400px";
	sea2.style.height = "245px";
	sea2.style.border = "2px solid #00ACF6";
}
sea2.onmouseout = function(){
	sea1.style.opacity = 1;
	sea3.style.opacity = 1;
	sea2.style.width = "380px";
	sea2.style.height = "235px";
	sea2.style.border = "none";
}
sea3.onmouseover = function(){
	sea1.style.opacity = 0.6;
	sea2.style.opacity = 0.6;
	sea3.style.width = "400px";
	sea3.style.height = "245px";
	sea3.style.border = "2px solid #00ACF6";
}
sea3.onmouseout = function(){
	sea1.style.opacity = 1;
	sea2.style.opacity = 1;
	sea3.style.width = "380px";
	sea3.style.height = "235px";
	sea3.style.border = "none";
}

ice1.onmouseover = function(){
	ice2.style.opacity = 0.6;
	ice3.style.opacity = 0.6;
	ice1.style.width = "400px";
	ice1.style.height = "245px";
	ice1.style.border = "2px solid #00ACF6";
}
ice1.onmouseout = function(){
	ice2.style.opacity = 1;
	ice3.style.opacity = 1;
	ice1.style.width = "380px";
	ice1.style.height = "235px";
	ice1.style.border = "none";
}
ice2.onmouseover = function(){
	ice1.style.opacity = 0.6;
	ice3.style.opacity = 0.6;
	ice2.style.width = "400px";
	ice2.style.height = "245px";
	ice2.style.border = "2px solid #00ACF6";
}
ice2.onmouseout = function(){
	ice1.style.opacity = 1;
	ice3.style.opacity = 1;
	ice2.style.width = "380px";
	ice2.style.height = "235px";
	ice2.style.border = "none";
}
ice3.onmouseover = function(){
	ice1.style.opacity = 0.6;
	ice2.style.opacity = 0.6;
	ice3.style.width = "400px";
	ice3.style.height = "245px";
	ice3.style.border = "2px solid #00ACF6";
}
ice3.onmouseout = function(){
	ice1.style.opacity = 1;
	ice2.style.opacity = 1;
	ice3.style.width = "380px";
	ice3.style.height = "235px";
	ice3.style.border = "none";
}

warm1.onmouseover = function(){
	warm2.style.opacity = 0.6;
	warm3.style.opacity = 0.6;
	warm1.style.width = "400px";
	warm1.style.height = "245px";
	warm1.style.border = "2px solid #00ACF6";
}
warm1.onmouseout = function(){
	warm2.style.opacity = 1;
	warm3.style.opacity = 1;
	warm1.style.width = "380px";
	warm1.style.height = "235px";
	warm1.style.border = "none";
}
warm2.onmouseover = function(){
	warm1.style.opacity = 0.6;
	warm3.style.opacity = 0.6;
	warm2.style.width = "400px";
	warm2.style.height = "245px";
	warm2.style.border = "2px solid #00ACF6";
}
warm2.onmouseout = function(){
	warm1.style.opacity = 1;
	warm3.style.opacity = 1;
	warm2.style.width = "380px";
	warm2.style.height = "235px";
	warm2.style.border = "none";
}
warm3.onmouseover = function(){
	warm1.style.opacity = 0.6;
	warm2.style.opacity = 0.6;
	warm3.style.width = "400px";
	warm3.style.height = "245px";
	warm3.style.border = "2px solid #00ACF6";
}
warm3.onmouseout = function(){
	warm1.style.opacity = 1;
	warm2.style.opacity = 1;
	warm3.style.width = "380px";
	warm3.style.height = "235px";
	warm3.style.border = "none";
}

con1.onmouseover = function(){
	con2.style.opacity = 0.6;
	con3.style.opacity = 0.6;
	con1.style.width = "400px";
	con1.style.height = "245px";
	con1.style.border = "2px solid #00ACF6";
}
con1.onmouseout = function(){
	con2.style.opacity = 1;
	con3.style.opacity = 1;
	con1.style.width = "380px";
	con1.style.height = "235px";
	con1.style.border = "none";
}
con2.onmouseover = function(){
	con1.style.opacity = 0.6;
	con3.style.opacity = 0.6;
	con2.style.width = "400px";
	con2.style.height = "245px";
	con2.style.border = "2px solid #00ACF6";
}
con2.onmouseout = function(){
	con1.style.opacity = 1;
	con3.style.opacity = 1;
	con2.style.width = "380px";
	con2.style.height = "235px";
	con2.style.border = "none";
}
con3.onmouseover = function(){
	con1.style.opacity = 0.6;
	con2.style.opacity = 0.6;
	con3.style.width = "400px";
	con3.style.height = "245px";
	con3.style.border = "2px solid #00ACF6";
}
con3.onmouseout = function(){
	con1.style.opacity = 1;
	con2.style.opacity = 1;
	con3.style.width = "380px";
	con3.style.height = "235px";
	con3.style.border = "none";
}

oth1.onmouseover = function(){
	oth2.style.opacity = 0.6;
	oth3.style.opacity = 0.6;
	oth1.style.width = "400px";
	oth1.style.height = "245px";
	oth1.style.border = "2px solid #00ACF6";
}
oth1.onmouseout = function(){
	oth2.style.opacity = 1;
	oth3.style.opacity = 1;
	oth1.style.width = "380px";
	oth1.style.height = "235px";
	oth1.style.border = "none";
}
oth2.onmouseover = function(){
	oth1.style.opacity = 0.6;
	oth3.style.opacity = 0.6;
	oth2.style.width = "400px";
	oth2.style.height = "245px";
	oth2.style.border = "2px solid #00ACF6";
}
oth2.onmouseout = function(){
	oth1.style.opacity = 1;
	oth3.style.opacity = 1;
	oth2.style.width = "380px";
	oth2.style.height = "235px";
	oth2.style.border = "none";
}
oth3.onmouseover = function(){
	oth1.style.opacity = 0.6;
	oth2.style.opacity = 0.6;
	oth3.style.width = "400px";
	oth3.style.height = "245px";
	oth3.style.border = "2px solid #00ACF6";
}
oth3.onmouseout = function(){
	oth1.style.opacity = 1;
	oth2.style.opacity = 1;
	oth3.style.width = "380px";
	oth3.style.height = "235px";
	oth3.style.border = "none";
}