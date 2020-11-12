let id = location.search.split("=")[1];
console.log(id);
$.get(`http://localhost:3000/productlist?id=${id}`).then(data => {
    var oDiv = $("#xiangqing");
    let aLi = "";

    aLi = `
    <div id="bigbox">
    <div id="zhongimg">
        <img src="${data[0].imgUrl}" id="oimg">
        <div id="fangda"></div>
    </div>
    <div id="daimg">
        <img src="${data[0].imgUrl}">
    </div>
</div>
<p id="title">${data[0].title}</p>
<a href="" class="aa">11.9-11.11九九会员特权日，万人独享0元购，马上来抢！</a>
<div class="jiaqian">
    <p>抢购价</p>
    <h3 id="price">${data[0].price}</h3>
    <p>降价通知</p>
    <p>好评度99% 3000+人评价</p>
</div>
<input type="button" value="加入购物车" id="btn">


<a href="" class="tishi">温馨提示1-15天无理由退货正品保障</a>
     `

    oDiv.html(aLi);
}).then(function() {
    // console.log($("#btn"));
    // $("#btn").click(function() {
    //     console.log(id)
    // })

    $("#btn").click(function() {
        console.log(id);
        axios.get("http://localhost:3000/cart", {
            params: {
                id: id
            }
        }).then(data => {
            if (data.data.length == 0) {
                axios.post("http://localhost:3000/cart", {
                    id: id,
                    imgUrl: $("#oimg").attr("src"),
                    title: $("#title").text(),
                    price: $("#price").text(),
                    num: 1
                });
                window.location.href = "../gouwuche.html";
            }
        })
    })
})