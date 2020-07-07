let process = document.querySelectorAll('.icon_finsh');
let detail_text_h3 = document.querySelector('.detail_text h3');
let detail_text_p = document.querySelector('.detail_text p');
let shop_address_text_h4 = document.querySelector('.shop_address_text h4');
let shop_address_text_p = document.querySelectorAll('.shop_address_text p');
let total_text_h3 = document.querySelector('.total_text h3');
let total_text_p = document.querySelector('.total_text p');
let shop_total_money = document.querySelector('.shop_total_money');
let total_money = document.querySelector('.total_text p');
let total_money_single = document.querySelector('.total_money_single');
let total_money_transport = document.querySelector('.total_money_transport');
let total = document.querySelector('.total');
let Return_btn = document.querySelector('.Return_btn');
let cancel_btn = document.querySelector('.cancel_btn');
let product_pic = document.querySelector('.totail_pic img');
let shop_order_id_p = document.querySelector('.shop_order_id p');
let cheak_order_p = document.querySelector('.cheak_order p');
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
    url: "/Json/OrderDetailJson",
    type: "get",
    dataType: 'JSON',
    success: function (response) {
        let items = JSON.parse(response)

        console.log(items.Items)
        items.forEach(e => {
            shop_order_id_p.innerText = `訂單編號 : ${e.Order_Id}`;
            cheak_order_p.innerText = e.Order_Status;
            detail_text_h3.innerText = e.Logistics;
            detail_text_p.innerText = `物流編號 : ${e.Logistics_Id }`;
            shop_address_text_p[0].innerText = `收件人 : ${e.Recipient}`;
            shop_address_text_p[1].innerText = e.Recipient_Phone;
            shop_address_text_p[2].innerText = e.Receiving_Point;
            total_text_h3.innerText = e.Product_Name;
            total_text_p.innerText = `顏色 : ${e.Color}`;
            shop_total_money.innerText = `$${e.Total_Price}`;
            total_money_single.innerText = `$${e.Total_Price}`;
            total.innerText = `$${e.Total_Price + 60}`;
            product_pic.setAttribute('src', `${e.Picture}`);
            status_btn(e.Order_Status, e.Order_Id);
            logistics_status(e.Order_Status);
        })
        
        
    },
    error: function () {
    }
});

function status_btn(status, Order_Id) {
    if (status == "取貨完成") {
        Return_btn.removeAttribute('disabled');
        cancel_btn.children[0].removeAttribute('href')
        Return_btn.children[0].setAttribute('href', `/Return_Exchange/Index/${Order_Id}`)
        cancel_btn.setAttribute('disabled', 'disabled');
    }
    else if (status == "未出貨") {
        cancel_btn.removeAttribute('disabled');
        Return_btn.children[0].removeAttribute('href')
        cancel_btn.children[0].setAttribute('href', `/CancelDetail/Index/${Order_Id}`)
        Return_btn.setAttribute('disabled', 'disabled');
    }
    else
    {
        Return_btn.setAttribute('disabled', 'disabled');
        cancel_btn.setAttribute('disabled', 'disabled');
    }
}

function logistics_status(status) {

    if (status == "未出貨") {
        document.querySelectorAll('.icon_setup')[0].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-sticky-note').style.color = '#517fa4';
        detail_text_p.classList.add('d-none');
    }
    else if (status == "已出貨") {
        document.querySelectorAll('.icon_setup')[0].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-sticky-note').style.color = '#517fa4';
        document.querySelectorAll('.icon_setup')[1].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-truck').style.color = '#517fa4';
        document.querySelector('#_confirm').style.backgroundColor = '#517fa4';
    }
    else if (status == "待收貨") {
        document.querySelectorAll('.icon_setup')[0].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-sticky-note').style.color = '#517fa4';
        document.querySelectorAll('.icon_setup')[1].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-truck').style.color = '#517fa4';
        document.querySelectorAll('.icon_setup')[2].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-cart-arrow-down').style.color = '#517fa4';
        document.querySelector('#_confirm').style.backgroundColor = '#517fa4';
        document.querySelector('#_onway').style.backgroundColor = '#517fa4';
    }
    else if (status == "取貨完成") {
        document.querySelectorAll('.icon_setup')[0].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-sticky-note').style.color = '#517fa4';
        document.querySelectorAll('.icon_setup')[1].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-truck').style.color = '#517fa4';
        document.querySelectorAll('.icon_setup')[2].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-cart-arrow-down').style.color = '#517fa4';
        document.querySelectorAll('.icon_setup')[3].setAttribute("style", "border:3px solid #517fa4;")
        document.querySelector('.fa-star').style.color = '#517fa4';
        document.querySelector('#_confirm').style.backgroundColor = '#517fa4';
        document.querySelector('#_onway').style.backgroundColor = '#517fa4';
        document.querySelector('#_arrived').style.backgroundColor = '#517fa4';
    }

}