var ordertime = document.querySelector('.icon_setup_out p');
var canceltime = document.querySelector('.icon_finsh_out p');
var logistics = document.querySelector('.detail_text h3');
var shop_address_text = document.querySelectorAll('.shop_address_text p');
var productimg = document.querySelector('.totail_pic img');
var productname = document.querySelector('.total_text h3');
var productinf = document.querySelectorAll('.total_text p');
var productoneprice = document.querySelector('.shop_total_money');
var productsprice = document.querySelector('.total_money_single');
var totalprice = document.querySelector('.total');
var orderid = document.querySelector('.shop_order_number p');
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
    url: '/Json/CancelDetailJson',
    type: 'get',
    success: function (response) {
        let data = JSON.parse(response);
        addinf(data[0]);
    }
})
function addinf(array) {
    orderid.innerText = `訂單編號:${array.Order_Id}`;
    ordertime.innerText = array.Time;
    canceltime.innerText = array.Cancel_Time;
    logistics.innerHTML = array.Logistics;
    shop_address_text[0].innerText = `收件地址 : ${array.Receiving_Point}`;
    shop_address_text[1].innerText = `收件人 : ${array.Recipient}`;
    shop_address_text[2].innerText = `收件人電話 : ${array.Recipient_Phone}`;
    productimg.setAttribute('src', `${array.ProductImage}`);
    productname.innerHTML = array.Product_Name;
    productinf[0].innerText = `顏色 : ${array.Color}`;
    productinf[1].innerText = `數量 : ${array.Quantity}`;
    productoneprice.innerText = `$${array.Price}`;
    productsprice.innerHTML = `$${array.Total_Price}`;
    totalprice.innerHTML = `$${array.Total_Price + 60}`;
}