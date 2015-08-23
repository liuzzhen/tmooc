//切换侧边栏的隐藏和显示
function toggle(span){
	var div = span.parentNode;
	if (div.getAttribute('class')=='hide') {
		div.removeAttribute('class');          //删除class属性
	}else{
		div.setAttribute('class','hide');    //设置class属性
	}
}