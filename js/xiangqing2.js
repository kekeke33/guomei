function Zoom() {

    // oBigbox取到最大div
    this.oBigbox = document.getElementById("bigbox")

    // oZhongimg取到中间的div
    this.oZhongimg = document.getElementById("zhongimg")

    // oZhongimg取到中间的div的图片
    this.zhongImg = this.oZhongimg.children[0];


    // oFangda取到放大镜
    this.oFangda = document.getElementById("fangda")

    //oDaimg取到大的图片的div
    this.oDaimg = document.getElementById("daimg")
        //oDaimg取到大的div的图片
    this.daImg = this.oDaimg.children[0];
}
//鼠标移入             
Zoom.prototype.kaishi = function() {
    //鼠标移入这个div 放大镜和放大图片出现
    this.oZhongimg.onmouseover = () => {
            this.oFangda.style.display = " block";
            this.oDaimg.style.display = " block";
        }
        //鼠标移出这个div 放大镜和放大图片消失
    this.oZhongimg.onmouseout = () => {
            this.oFangda.style.display = " none";
            this.oDaimg.style.display = " none";
        }
        //鼠标移动事件
    this.oZhongimg.onmousemove = (e) => {
        let evt = e || event; //鼠标事件兼容
        //获取鼠标的坐标
        let x = evt.pageX - this.oBigbox.offsetLeft; //鼠标距离div的left值
        let y = evt.pageY - this.oBigbox.offsetTop; //鼠标距离div的top值

        let l = x - this.oFangda.offsetWidth / 2; //鼠标在放大镜中间
        let t = y - this.oFangda.offsetHeight / 2; //鼠标在放大镜中间


        //临界值
        let mw = this.oBigbox.offsetWidth - this.oFangda.offsetWidth;
        let mh = this.oBigbox.offsetHeight - this.oFangda.offsetHeight;


        l = l <= 0 ? 0 : l >= mw ? mw : l;
        t = t <= 0 ? 0 : t >= mh ? mh : t;

        //使放大镜跟随鼠标移动
        this.oFangda.style.left = l + "px"; //放大镜距离div的left值
        this.oFangda.style.top = t + "px"; //放大镜距离div的top值

        //大图跟随鼠标移
        this.daImg.style.left = -this.oFangda.offsetLeft * this.daImg.offsetWidth / this.zhongImg.offsetWidth + "px";
        this.daImg.style.top = -this.oFangda.offsetTop * this.daImg.offsetHeight / this.zhongImg.offsetHeight + "px";


    }

}
let zoom = new Zoom;
zoom.kaishi();