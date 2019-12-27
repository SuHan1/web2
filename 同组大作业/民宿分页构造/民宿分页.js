/*
* @Author: dell
* @Date:   2019-12-24 13:33:40
* @Last Modified by:   dell
* @Last Modified time: 2019-12-24 13:33:54
*/
	var bigpic=document.getElementById("bigpic");
    var main=document.getElementById("main");
    var smallpic=main.getElementsByTagName("img");
    for(var i=0;i<smallpic.length;++i){
      	smallpic[i].onclick=function(){
		    for(var i=0;i<smallpic.length;++i){
		      	if(smallpic[i].hasAttribute("class"))
		        	smallpic[i].removeAttribute("class");
		    }
		    this.setAttribute("class","pb");
		    var imgSrc=this.getAttribute("src");
		    bigpic.setAttribute("src",imgSrc);
		    this.setAttribute("index",1);
	   	}
    }