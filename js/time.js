function getDiffDate(date1, date2) {
    var date1 = new Date(); //获取此时此刻的时间
    var date2 = new Date("2020/11/30 12:50"); //设置倒计时时间
    var ss = Math.abs((date2 - date1) / 1000); //算出相差的秒数
    // console.log(ss)
    var day = Math.floor(ss / 24 / 3600); //天数
    var hour = Math.floor(ss / 3600 % 24); //小时
    var minute = Math.floor(ss / 60 % 60); //分钟
    var second = Math.floor(ss % 60); //秒数

    // console.log(hour);
    document.getElementById("time").innerHTML = "" + hour + "小时" + minute + "分" + second + "秒" //打印出来几小时几分几秒


}
setInterval(getDiffDate, 1000)