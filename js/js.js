var num=0,
	interValId=0,
	span=document.getElementById("menuDiv").getElementsByTagName("span"),
	banner=document.getElementsByClassName("banner-pic"),
	main=document.getElementById("main"),
	len=span.length;

// 绑定事件函数
function addThing(ele,type,fun){
	if(ele.addEventListener){
		ele.addEventListener(type,fun,false);
	}else{
		ele.attachEvent("on"+type,fun);
	}
}

// 图片轮播设置
function autoPlay(){
	for(var i=0;i<len;i++){
		span[i].className="";
		banner[i].style.display="none";
	}
	span[num].className="menu-attr";
	banner[num].style.display="block";
}

//点击菜单切图
function clickPic(){
	num=this.getAttribute("data-id");
	autoPlay();
}

//间歇调用
function byInterVal(){
	interValId=setInterval(function(){
	num++;
	if(num>=len){
		num=0;
	}
	autoPlay();
},1000);
}

//清除间歇调用
function clearByInterVal(){
	clearInterval(interValId);
}

// 添加点击事件
for(var i=0;i<len;i++){
	addThing(span[i],"click",clickPic);
}

//添加鼠标划入事件
addThing(main,"mouseover",clearByInterVal);

//添加鼠标划出事件
addThing(main,"mouseout",byInterVal);

//启动间歇调用
byInterVal();