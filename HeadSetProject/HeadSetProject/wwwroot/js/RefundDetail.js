$.ajax({
    url: '/Json/CollectHeart',
    type: 'get',
    success: function (Jsdata) {
        let t = JSON.parse(Jsdata)
        let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
        header__cart__Quantity.forEach(el => {
            el.innerText = `${t.length}`;
        })
    }
})
let header__cart_head = document.querySelectorAll('.header__cart a')[0];
let header__cart_humberger = document.querySelectorAll('.humberger__menu__cart a')[0];
header__cart_head.setAttribute('href', '/CollectFavorite/Index')
header__cart_humberger.setAttribute('href', '/CollectFavorite/Index')
$.ajax({
    url: '/Json/RefundDetailsJson/',
    type: 'get',
    success: function (response) {
        let data = JSON.parse(response);
        addinf(data);
    }
})


function addinf(array) {
    let status = document.querySelector('.refund_details_item_status h4');
    let reason = document.querySelector('.refund_details_item_reason_text p');
    let orderid = document.querySelector('.refund_details_item_information ul li');
    let productpic = document.querySelector('.refund_details_item__pic img');
    let productname = document.querySelector('.refund_details_item__product__text h5');
    let productcolor = document.querySelector('.refund_details_item__product__text p');
    let orderinf = document.querySelectorAll('.refund_details_item__product__text ul li');
    let status_reason = document.querySelector('.refund_details_item_reason_title h4');
    if (array[0].Return == "換貨") {
        status_reason.innerHTML = "換貨原因";
    }
    else {
        status_reason.innerHTML = "退貨原因";
    }
    status.innerHTML = array[0].Return;
    reason.innerText = array[0].Reason;
    orderid.innerText = `訂單編號 : ${array[0].Order_Id}`;
    productpic.src = array[0].Picture;
    productname.innerHTML = array[0].Product_Name;
    productcolor.innerText = `顏色 : ${array[0].Color}`;
    orderinf[0].innerText = `數量 : ${array[0].Quantity}`;
    orderinf[1].innerText = `總價 : ${array[0].Total_Price}`;
}