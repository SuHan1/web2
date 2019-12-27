/*
* @Author: dell
* @Date:   2019-12-24 11:20:24
* @Last Modified by:   dell
* @Last Modified time: 2019-12-25 16:12:09
*/
	var box1=document.getElementById("box1");
	var box3=document.getElementsByClassName("box3");
	var slide=document.getElementsByClassName("slide");
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
	var index=1;
	var flag=false;
	function start(){
		if(!flag){
			flag=true;
			index++;
			// change();
			animate(box3[0],{left:-700*index},function(){
				if(index===6){
					box3[0].style.left="-700px";
					index=1;
				}
				flag=false;
			});
		}
	}
	function prevous(){
		if(!flag){
			flag=true;
			index--;
			// change();
			animate(box3[0],{left:-700*index},function(){
				if(index===0){
					box3[0].style.left="-3600px";
					index=5;
				}
				flag=false;
			});
		}
	}
	var timer=setInterval(start,2000);
	box1.onmouseover=function(){
		animate(leftButton,{opacity:50});
		animate(rightButton,{opacity:50});
		clearInterval(timer);
	}
	box1.onmouseout=function(){
		animate(leftButton,{opacity:0});
		animate(rightButton,{opacity:0});
		timer=setInterval(start,3000)
	}
	var ob=document.getElementById("jsPic");
	var list=ob.getElementsByTagName("img");
	var minZindex=2;
					
		//1.布局转换
	for(i=1;i<list.length;i++)
	{
		list[i].style.left=list[i].offsetLeft+'px';
		list[i].style.top=list[i].offsetTop+'px';
	}
					
	for(i=1;i<list.length;i++)
	{
		list[i].style.position='absolute';
		list[i].style.margin='0';
	}
					
					
	for(var i=1;i<list.length;i++){
		list[i].onmouseover=function (){
			this.style.zIndex=minZindex++;
			animate(this, { width: 340, height: 270, marginLeft: -50, marginTop: -50});
			this.setAttribute("height",270+"px");
			this.setAttribute("width",340+"px");
		};
						
		list[i].onmouseout=function (){
			animate(this, { width: 240, height: 170, marginLeft: 0, marginTop: 0});
		};
	}

	var ob1=document.getElementById("jsPic1");
	var list2=ob1.getElementsByTagName("img");
	var minZindex=2;
					
		//1.布局转换
	for(i=1;i<list2.length;i++)
	{
		list2[i].style.left=list2[i].offsetLeft+'px';
		list2[i].style.top=list2[i].offsetTop+'px';
	}
					
	for(i=1;i<list2.length;i++)
	{
		list2[i].style.position='absolute';
		list2[i].style.margin='0';
	}
					
					
	for(var i=1;i<list2.length;i++){
		list2[i].onmouseover=function (){
			this.style.zIndex=minZindex++;
			animate(this, { width: 340, height: 270, marginLeft: -50, marginTop: -50});
			this.setAttribute("height",270+"px");
			this.setAttribute("width",340+"px");
		};
						
		list2[i].onmouseout=function (){
			animate(this, { width: 240, height: 170, marginLeft: 0, marginTop: 0});
		};
	}

	var ob2=document.getElementById("jsRelative");
	var list1=ob2.getElementsByTagName("img");
	var minZindex=2;
					
		//1.布局转换
	for(i=0;i<list1.length;i++)
	{
		list1[i].style.left=list1[i].offsetLeft+'px';
		list1[i].style.top=list1[i].offsetTop+'px';
	}
					
	for(i=0;i<list1.length;i++)
	{
		list1[i].style.position='absolute';
		list1[i].style.margin='0';
	}
					
					
	for(var i=0;i<list1.length;i++){
		list1[0].onmouseover=function (){
			this.style.zIndex=minZindex++;
			animate(this, { width: 1000, height: 530, marginLeft: 0, marginTop: 0});
			this.setAttribute("height",530+"px");
			this.setAttribute("width",1000+"px");
		};
						
		list1[i].onmouseout=function (){
			animate(this, { width: 500, height: 260, marginLeft: 0, marginTop: 0});
		};
	}

	var ob3=document.getElementById("jsRelative1");
	var list3=ob3.getElementsByTagName("img");
	var minZindex=2;
					
		//1.布局转换
	for(i=0;i<list3.length;i++)
	{
		list3[i].style.left=list3[i].offsetLeft+'px';
		list3[i].style.top=list3[i].offsetTop+'px';
	}
					
	for(i=0;i<list3.length;i++)
	{
		list3[i].style.position='absolute';
		list3[i].style.margin='0';
	}
					
					
	for(var i=0;i<list3.length;i++){
		list3[0].onmouseover=function (){
			this.style.zIndex=minZindex++;
			animate(this, { width: 1000, height: 530, marginLeft: 0, marginTop: 0});
			this.setAttribute("height",530+"px");
			this.setAttribute("width",1000+"px");
		};
						
		list3[i].onmouseout=function (){
			animate(this, { width: 500, height: 260, marginLeft: 0, marginTop: 0});
		};
	}

	var ob6=document.getElementById("jsPic2");
	var list6=ob6.getElementsByTagName("img");
	var minZindex=2;
					
		//1.布局转换
	for(i=1;i<list6.length;i++)
	{
		list6[i].style.left=list6[i].offsetLeft+'px';
		list6[i].style.top=list6[i].offsetTop+'px';
	}
					
	for(i=1;i<list6.length;i++)
	{
		list6[i].style.position='absolute';
		list6[i].style.margin='0';
	}
					
					
	for(var i=1;i<list6.length;i++){
		list6[i].onmouseover=function (){
			this.style.zIndex=minZindex++;
			animate(this, { width: 340, height: 270, marginLeft: -50, marginTop: -50});
			this.setAttribute("height",270+"px");
			this.setAttribute("width",340+"px");
		};
						
		list6[i].onmouseout=function (){
			animate(this, { width: 240, height: 170, marginLeft: 0, marginTop: 0});
		};
	}

	var p1=document.getElementById("p1");
   	var do1=document.getElementById("do1");
   	var list=document.getElementById("list");
   	window.onscroll=function(){
    	var st=document.documentElement.scrollTop;
    	console.log(st);
      	if(st>600){
          	list.style.display="block";
      	}
      	else{
          	list.style.display="none";
      	}
   	}