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
var order_items = document.querySelector('.order_items')
var order_allstatus = document.querySelectorAll('.order_status ul li');
let header__cart_head = document.querySelectorAll('.header__cart a')[0];
let header__cart_humberger = document.querySelectorAll('.humberger__menu__cart a')[0];
header__cart_head.setAttribute('href', '/CollectFavorite/Index')
header__cart_humberger.setAttribute('href', '/CollectFavorite/Index')
$.ajax({
    url: "/Json/Search_OrderJson",
    type: "get",
    success: function (response) {
        let items = JSON.parse(response)
        array_classification(items);
        status_classification(items)
        CreateOrders(items);
    },
    error: function () {
    }
});

var All = []; //全部
var Currently = []; //目前
var Complete = []; //完成
var Return = []; //退換貨
var Cancel = []; //取消
//---------------------------------
let Or = "訂單已完成";
let Od_1 = "退貨";
let Od_2 = "換貨";
let Os = "取消";
function array_classification(Array) {
    Array.forEach(el => {

        if (el.Order_Status == Or) {
            Complete.push(el);
        }
        else if (el.Order_Status == Od_1 || el.Order_Status == Od_2) {
            Return.push(el);
        }
        else if (el.Order_Status == Os) {
            Cancel.push(el);
        }
        else {
            Currently.push(el);
        }
    }
    )
}


function status_classification(Array) {
    order_allstatus.forEach(el =>
        el.addEventListener('click', function () { 
            let order_action = document.querySelector('.order_status_action'); 
            let order_action_id = this.getAttribute('id'); 
            order_action.removeAttribute('class'); 
            order_action.classList.add('btn'); 
            this.classList.add('order_status_action') 
            order_items.innerHTML = ''; 
            if (order_action_id == "all") {
                CreateOrders(Array);
            } else if (order_action_id == "current") {
                CreateOrders(Currently);
            } else if (order_action_id == "complete") {
                CreateOrders(Complete);
            } else if (order_action_id == "returnorchange") {
                CreateOrders(Return);
            } else if (order_action_id == "cancel") {
                CreateOrders(Cancel);
            }

        })
    )
}



function CreateOrders(Array) {
    let template = document.querySelector('#ordertemplate');
    Array.forEach(item => {
        let cloneContent = template.content.cloneNode(true);
        let img = cloneContent.querySelector('.order_list_item__pic img');
        let productname = cloneContent.querySelector('.order_list_item__title__text h5');
        let productcolor = cloneContent.querySelector('.order_list_item__title__text p');
        let price = cloneContent.querySelector('.order_list_item_price');
        let orderdate = cloneContent.querySelector('.order_list_item_date');
        let total = cloneContent.querySelector('.order_list_item_total');
        let totalprice = cloneContent.querySelector('.order_list_item_totalprice');
        let currencysituation = cloneContent.querySelector('.order_list_item_currencysituation');
        let readmorebtn = cloneContent.querySelector('.order_list_btn');
        img.setAttribute('src', `${item.Picture}`);
        productname.innerText = `name : ${item.Product_Name}`;
        productcolor.innerText = `color : ${item.Color}`;
        price.innerText = `Quantity : ${item.Price}`;
        orderdate.innerHTML = `<i class="fa fa-calendar-o"></i> ${item.Time}`;
        total.innerText = `Total amount : ${item.Total_Price}`;
        totalprice.innerText = `Order Amount : ${item.Quantity}`;
        currencysituation.innerText = `${item.Order_Status}`;
        if (item.Order_Status == Or) {
            readmorebtn.setAttribute('href', `/OrderDetail/Index/${item.Order_Id}/${item.Product_Name}`);
        }
        else if (item.Order_Status == Od_1 || item.Order_Status == Od_2) {
            readmorebtn.setAttribute('href', `/RefundDetail/Index/${item.Order_Id}/${item.Product_Name}`);
        }
        else if (item.Order_Status == Os) {
            readmorebtn.setAttribute('href', `/CancelDetail/Index/${item.Order_Id}/${item.Product_Name}`);
        }
        else {
            readmorebtn.setAttribute('href', `/OrderDetail/Index/${item.Order_Id}/${item.Product_Name}`);
        }
        order_items.appendChild(cloneContent);
    })
}
