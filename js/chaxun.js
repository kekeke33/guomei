let oTet = document.getElementById("sou-tet");
let oUl = document.getElementById("sou-ul");
//当输入框为空时，下边的提示信息消失 oninput 事件在用户输入时触发。
oTet.oninput = function() {
    if (oTet.value == "") {
        oUl.innerHTML = "";
        return;
    }

    var oScript = document.createElement("script");
    oScript.src =
        // `https://suggest.taobao.com/sug?code=utf-8&q=${oTet.value}&_ksTS=1603364053268_599&callback=foo&k=1&area=c2c&bucketid=13`;
        `https://apis.gome.com.cn/p/suggest?from=headSearch&module=searchSuggest&query=${oTet.value}&jp=true&user=85132486669&callback=foo`;
    document.body.appendChild(oScript); //获取节点
    document.body.removeChild(oScript); //删除节点

}

function foo(data) {
    // console.log(data);
    if (!data) {
        return;
    } //当不为data.result是直接结束;
    let str = "";
    //forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
    data.forEach(item => {
        str += `<li>${item[0]}</li>`
            // console.log(item);
    });
    oUl.innerHTML = str;
}


oTet.onblur = function() {
    oUl.innerHTML = "";
};