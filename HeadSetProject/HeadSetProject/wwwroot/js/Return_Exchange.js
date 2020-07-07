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
    url: '/Json/Return_ExchangeJson/',
    type: 'get',
    success: function (response) {
        let data = JSON.parse(response);
        let orderid = document.querySelector('.application_refund_item_status h4');
        orderid.innerHTML = `訂單編號 : ${data[0].OrderID}`;
        orderid.setAttribute('value', `${data[0].OrderID}`)
    }
})
var refund_btn = document.getElementById("product_refund");
var change_btn = document.getElementById("product_change");
var member_account = document.getElementById("member_account");
var status = refund_btn.value;
refund_btn.addEventListener('click', function () {
    member_account.classList.remove('d-none');
    member_account.classList.add('d-block');
    status = refund_btn.value;
})
change_btn.addEventListener('click', function () {
    member_account.classList.remove('d-block');
    member_account.classList.add('d-none');
    status = change_btn.value;
})

var img = document.getElementById("test");

var btn_send_refund = document.getElementsByClassName("btn_return_exchange")[0];
btn_send_refund.addEventListener('click', function () {
    var orderid = document.querySelector('.application_refund_item_status h4').getAttribute('value');
    var time = parseInt(Date.now());
    var JosnData = {
        ReturnID: 2,
        Status: status,
        OrderID: parseInt(orderid),
        Reason: $('#reason').val(),
    };
    //console.log(JosnData)
    $.ajax({
        url: '/Return_Exchange/GetApplication/',
        type: 'post',
        data: { jdata: JSON.stringify(JosnData) },
        success: function () {
        }
    })
})