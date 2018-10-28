window.onload = function(){
	/* 将个位数转换成 00 01 02 的格式 */
	function toTimeNumber (num){
		var str = num+"";
		switch (str.length){
			case 1:
				return "0"+str;
				break;
			default:
				return str;
				break;
		}
		return str;
	}
	/* 获取当前时间和日期 */
	function getTime(){
		var myDate = new Date();
		myDate.getYear();        //获取当前年份(2位)
		var year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
		var month = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
		var day = myDate.getDate();        //获取当前日(1-31)
		var weeknum = myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
		var week = "";
		var hour = myDate.getHours();       //获取当前小时数(0-23)
		var minute = myDate.getMinutes();     //获取当前分钟数(0-59)
		var second = myDate.getSeconds();     //获取当前秒数(0-59)
		var today = myDate.toLocaleDateString();     //获取当前日期
		switch (weeknum){
			case 0:
				week = "星期日";
				break;
			case 1:
				week = "星期一";
				break;
			case 2:
				week = "星期二";
				break;
			case 3:
				week = "星期三";
				break;
			case 4:
				week = "星期四";
				break;
			case 5:
				week = "星期五";
				break;
			case 6:
				week = "星期六";
				break;
		}
		var d = document.getElementById("date");
		var h = document.getElementById("hour");
		var m = document.getElementById("minute");
		var s = document.getElementById("second");
		var w = document.getElementById("week");
		d.innerHTML = today;
		h.innerHTML = toTimeNumber(hour);
		m.innerHTML = toTimeNumber(minute);
		s.innerHTML = toTimeNumber(second);
		w.innerHTML = week;
	}
	getTime();
	/* 间隔1秒执行一次 */
	setInterval(getTime,1000);
	/*-------------------------------------------------*/
	/* 将2位数转换成 012 025 037 的格式 */
	function toTimeNumber2 (num){
		var str = num+"";
		switch (str.length){
			case 1:
				return "00"+str;
				break;
			case 2:
				return "0"+str;
				break;
			default:
				return str;
				break;
		}
		return str;
	}
	var showtime = document.getElementById("showtime");
	var fen = 0, miao = 0, haomiao = 0 ;
	var timer;
	var flag = true;
	
	function start(){
		haomiao=haomiao+50;
	    if(haomiao>=1000)
	    {
	       haomiao=0;
	       miao=miao+1;
	    }
	    if(miao>=60)
	    {
	    miao=0;
	       fen=fen+1;
	    }
	    showtime.innerHTML = toTimeNumber(fen)+':'+toTimeNumber(miao)+'.'+toTimeNumber2(haomiao);
	}
	document.getElementById("begin").onclick = function(){
		if(flag){
			timer = setInterval(start,50)
		}else{
			clearInterval(timer);
		}
		if(flag){
			this.innerHTML = "停止";
		}else{
			this.innerHTML = "启动";
		}
		flag = !flag;
	}
	
	document.getElementById("clear").onclick = function(){
		clearInterval(timer);
		flag = true;
		fen = 0 ; miao = 0 ; haomiao = 0 ;
		showtime.innerHTML = '00:00.000';
		document.getElementById("begin").innerHTML = "启动";
	}
	/*-----------------------------------------------------------*/
	function getOffsetDays(time1, time2) {
	    var offsetTime = Math.abs(time1 - time2);
	    return Math.floor(offsetTime / (3600 * 24 * 1000));
	}
	 var weddingDay = getOffsetDays(new Date().getTime(), new Date("2017, 10, 05").getTime());
	 var engagementDay = getOffsetDays(new Date().getTime(), new Date("2017, 05, 01").getTime());
	 var meetingDay = getOffsetDays(new Date().getTime(), new Date("2017, 02, 03").getTime());
	// 获取相隔天数
	document.getElementById("weddingDay").innerHTML = "距离2017年10月05日，已经过去了<strong>"+weddingDay+"</strong>天了";
	document.getElementById("engagementDay").innerHTML = "距离2017年05月01日，已经过去了<strong>"+engagementDay+"</strong>天了";
	document.getElementById("meetingDay").innerHTML = "距离2017年02月03日，已经过去了<strong>"+meetingDay+"</strong>天了";
}
