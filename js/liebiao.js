$.get("http://localhost:3000/productlist").then(data => {

    var oUl = $("#f1-di-you");
    let aLi = "";
    for (var i = 0; i < 10; i++) {

        let suiji = Math.floor(Math.random() * 100 + 1);
        aLi += `
    <li>
     <a href="../xiangqing.html?id=${data[suiji].id}" target="_blank">
    <img src="${data[suiji].imgUrl}" alt="">
    <p>${data[suiji].title}</p>
    <b>今日特价</b>
    <span>${data[suiji].price}</span>

    </a>
    </li> 
     `
    };

    oUl.html(aLi);
})