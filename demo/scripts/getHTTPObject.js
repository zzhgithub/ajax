/* getHTTPObject方法通过兑现检测技术检测了 XMLHttpRequest。
 * 如果失败，则继续检测其他方法，最终返回一个false
 * 或者一个新的XMLHttpRequest对象。
 */

function getHTTPObject(){
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function(){
			try {return new ActiveObject("Msxml2.XMLHTTP.6.0");}
				catch (e) {}
			try {return new ActiveObject("Msxml2.XMLHTTP.3.0");}
				catch (e) {}
			try {return new ActiveObject("Msxml2.XMLHTTP");}
				catch (e) {}
			return false;
		}
	}
	return new XMLHttpRequest();
}