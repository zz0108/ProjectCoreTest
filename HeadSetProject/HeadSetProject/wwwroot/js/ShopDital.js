let color = '';
let bool = '';
window.onload = function () {

    $.ajax({
        url: '/Json/ShopDetailsRelatedJson',
        type: 'get',
        success: function (Jsdata) {
            CategoryArray = JSON.parse(Jsdata);
            var related = document.querySelector('.related');
            CategoryArray.Items.forEach(element => {
                let col_lg_3 = document.createElement('div');
                let product__item = document.createElement('div');
                let product__item__pic = document.createElement('div');
                let product__item__pic__hover = document.createElement('ul');
                let li_heart = document.createElement('li');
                //let li_retweet = document.createElement('li');
                let li_shopping_cart = document.createElement('li');
                let a_heart = document.createElement('a');
                //let a_retweet = document.createElement('a');
                let a_shopping_cart = document.createElement('a');
                let i_heart = document.createElement('i');
                //let i_retweet = document.createElement('i');
                let i_shopping_cart = document.createElement('i');
                let product__item__text = document.createElement('div');
                let product__item__text_h6 = document.createElement('h6');
                let product__item__text_h6_a = document.createElement('a');
                let product__item__text_h5 = document.createElement('h5');


                col_lg_3.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'Product');
                product__item.classList.add('product__item');
                product__item__pic.classList.add('product__item__pic', 'set-bg');
                product__item__pic.setAttribute('data-setbg', `${element.Img}`);
                product__item__pic.setAttribute('color', `${element.Color}`);
                product__item__pic__hover.classList.add('product__item__pic__hover');
                i_heart.setAttribute('class', 'fa fa-heart');
                i_heart.setAttribute('bool', 'false')
                //i_retweet.setAttribute('class', 'fa fa-retweet');
                i_shopping_cart.setAttribute('class', 'fa fa-shopping-cart');
                product__item__text.classList.add('product__item__text');

                related.appendChild(col_lg_3);
                col_lg_3.appendChild(product__item);
                product__item.appendChild(product__item__pic);
                product__item__pic.appendChild(product__item__pic__hover);
                product__item__pic__hover.appendChild(li_heart);
                //product__item__pic__hover.appendChild(li_retweet);
                product__item__pic__hover.appendChild(li_shopping_cart);
                li_heart.appendChild(a_heart);
                //li_retweet.appendChild(a_retweet);
                li_shopping_cart.appendChild(a_shopping_cart);
                a_heart.appendChild(i_heart);
                //a_retweet.appendChild(i_retweet);
                a_shopping_cart.classList.add('shopping_cart');
                a_shopping_cart.appendChild(i_shopping_cart);

                product__item.appendChild(product__item__text);
                product__item__text.appendChild(product__item__text_h6);
                product__item__text_h6_a.innerHTML = `${element.Name}`;
                product__item__text_h6_a.setAttribute('href', `/ShopDetails/Index/${element.Manufacturer}/${element.Name}/${element.Color}`);
                product__item__text_h6.appendChild(product__item__text_h6_a);
                product__item__text_h5.innerHTML = `${element.Price}`;
                product__item__text.appendChild(product__item__text_h5);
            });
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            cart_click();
            collection_addordel_down();
        }
    })
    $.ajax({
        url: '/Json/GetColor',
        type: 'get',
        success: function (Jsdata) {
            let Item = JSON.parse(Jsdata);
            var _product_details_color_item = document.querySelector('.product_details_color_item');
            Item.Items.forEach(element => {
                let color_div = document.createElement('div');
                let btn_product_details_color_item = document.createElement('input');
                let color_name = document.createElement('p');
                ///////////////////////////////動態生成顏色按鈕//////////////////////////////////////////////
                ///////////////////////////////////////////////////按鈕顏色///////////////////////////////
                btn_product_details_color_item.setAttribute('type', 'button');
                btn_product_details_color_item.style.width = '4rem';
                btn_product_details_color_item.style.height = '4rem';
                btn_product_details_color_item.style.margin = '0 .5rem 0 .5rem';
                btn_product_details_color_item.setAttribute('color', `${element.Color}`);
                btn_product_details_color_item.style.backgroundImage = `url(${element.Img})`;
                btn_product_details_color_item.style.backgroundPosition = 'center';
                btn_product_details_color_item.setAttribute('src', element.Img);
                btn_product_details_color_item.style.backgroundSize = 'cover';
                btn_product_details_color_item.setAttribute('onclick', 'ChangeShow(this)');
                btn_product_details_color_item.setAttribute('bool', 'false');
                color_name.innerText = `${element.Color}`;
                color_div.appendChild(btn_product_details_color_item);
                color_div.appendChild(color_name);



                _product_details_color_item.style.display = 'flex';
                _product_details_color_item.style.alignItems = 'center';
                _product_details_color_item.style.justifyContent = 'center';
                _product_details_color_item.style.textAlign = 'center';




                _product_details_color_item.appendChild(color_div);
                color = document.querySelectorAll('.product_details_color_item input')[0].offsetParent.children[0].children[1].children[0].children[1].innerText;
                let inputs = document.querySelectorAll('.product_details_color_item input');

                inputs.forEach(el => {
                    el.addEventListener('click', function () {
                        color = this.getAttribute("color");
                        bool = this.getAttribute('bool');
                        if (this.getAttribute('bool') == "true") {
                            let products_heart = document.querySelector('.icon_heart_alt');
                            products_heart.removeAttribute('style');
                            products_heart.setAttribute('style', 'color:#f00;');
                        }
                        else {
                            let products_heart = document.querySelector('.icon_heart_alt');
                            products_heart.removeAttribute('style');
                        }
                    })
                })
                if (document.getElementById('UserName').innerText != null || document.getElementById('UserName').innerText != '') {
                    $.ajax({
                        url: '/Json/CollectHeart',
                        type: 'get',
                        async: true,
                        success: function (Jsdata) {
                            let t = JSON.parse(Jsdata)
                            let products_heart = document.querySelector('.heart-icon');
                            let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                            header__cart__Quantity.forEach(item => {
                                item.innerText = `${t.length}`;
                            })
                            console.log(products_heart);
                            inputs.forEach(el => {
                                t.forEach(item => {
                                    if (document.querySelector('.product__details__text h3').innerText == item.Product_Name && color == item.Color) {
                                        el.removeAttribute('bool');
                                        el.setAttribute('bool', 'true');
                                        products_heart.children[0].setAttribute('style', 'color:#f00;')
                                        el.setAttribute('time', `${item.Collect_Id}`)
                                    }
                                })
                            })
                        }
                    })
                    let header__cart_head = document.querySelectorAll('.header__cart a')[0];
                    let header__cart_humberger = document.querySelectorAll('.humberger__menu__cart a')[0];
                    header__cart_head.setAttribute('href', '/CollectFavorite/Index')
                    header__cart_humberger.setAttribute('href', '/CollectFavorite/Index')
                }
            });
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
        }
    })

    var UserName = $('#UserName').text()
    $('.fa-shopping-bag').click(function () {
        //alert('Please Waitting.\nData is being transferred');
        $.ajax({
            url: "/ShopingCart/CeateCart",
            type: 'post',
            data: { jdata: JSON.stringify(storageValue) },
            success: function () {
                window.location.href = `/ShopingCart/Index/${UserName}/`;
            },
            error: function () {
                window.location.href = `/ShopingCart/Index/${UserName}/`;
            }
        });
    });
    detail_cart_click();
    cart_click();
   
}

function ReviewsArea() {

    var _body = document.querySelector('.ReviewsArea');
    var _imgs = document.querySelector('.PrivewArea').innerHTML;
    var _head = document.createElement('div');
    _head.classList.add('product__details__tab__desc');

    var _h6 = document.createElement('h6');
    _h6.innerText = `${$('#UserName').text()}`;

    let _starUl = document.createElement('ul');
    _starUl.classList.add('RateStar');
    let _star1 = document.createElement('li');
    if (_rate >= 1) {
        _star1.style.color = 'orange';
    } else {
        _star1.style.color = 'white';;
    }
    _star1.innerText = '★';
    _starUl.appendChild(_star1);

    let _star2 = document.createElement('li');
    if (_rate >= 2) {
        _star2.style.color = 'orange';
    } else {
        _star2.style.color = 'white';;
    }
    _star2.innerText = '★';
    _starUl.appendChild(_star2);

    let _star3 = document.createElement('li');
    if (_rate >= 3) {
        _star3.style.color = 'orange';
    } else {
        _star3.style.color = 'white';;
    }
    _star3.innerText = '★';
    _starUl.appendChild(_star3);

    let _star4 = document.createElement('li');
    if (_rate >= 4) {
        _star4.style.color = 'orange';
    } else {
        _star4.style.color = 'white';;
    }
    _star4.innerText = '★';
    _starUl.appendChild(_star4);

    let _star5 = document.createElement('li');
    if (_rate >= 5) {
        _star5.style.color = 'orange';
    } else {
        _star5.style.color = 'white';;
    }
    _star5.innerText = '★';
    _starUl.appendChild(_star5);

    var _p = document.createElement('p');
    _p.innerText = `${$('.msgArea').val()}`;
    var _imgDiv = document.createElement('div');
    _imgDiv.style.display = 'flex';
    _imgDiv.style.flexWrap = 'Wrap';
    _imgDiv.innerHTML = _imgs;
    console.log(imgLink);
    var _hr = document.createElement('hr');
    _hr.style.backgroundColor = '#e3e3e3';
    _head.appendChild(_h6);
    _head.appendChild(_starUl);
    _head.appendChild(_p);
    _head.appendChild(_imgDiv);
    _head.appendChild(_hr);

    _body.appendChild(_head);
    var Jsdata = { User_Id: $('#UserName').text(), Product_Name: $('.product__details__text h3').text(), Comment: $('.msgArea').val(), Picture: JSON.stringify(Picture), Rating: _rate }
    console.log(Jsdata);
    $.ajax({
        url: '/ShopDetails/CreateComment',
        type: 'post',
        data: { Jsdata: JSON.stringify(Jsdata) },
        success: function (Jsdata) {
            alert('成功');

        }
    })
    

}
var storageValue;
function detail_cart_click() {

    //當localStorage沒有資料陣列，指定一個空陣列放入資料庫
    if (localStorage.getItem('Cart') === null) {
        arrayJson = [];
        localStorage.setItem('Cart', JSON.stringify(arrayJson));
        //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
    } else {
        arrayJson = JSON.parse(localStorage.getItem('Cart'));
    };
    storageValue = { Items: arrayJson };

    $('.primary-btn ').click(function () {
        if ($('.header__cart li a').hasClass('account')) {
            if (storageValue.Items.length != null) {
                var qty = $('.quantity input').val();
                var id = $('#UserName').text().trim();
                var productName = $('.product__details__text h3').text().trim();
                var productPrice = $('.product__details__price').text().trim().replace('$', '');
                var productColor = color;
                var object = { Shopping_Car_Id: id, Product_Name: productName, Color: productColor, Price: productPrice, Quantity: qty };
                console.log(object)
                let hasp = false;

                storageValue.Items.forEach(item => {
                    
                    if (!hasp) {
                        if (item.Shopping_Car_Id == id && item.Product_Name == productName && item.Color == productColor) {
                            item.Quantity = qty + parseInt(item.Quantity);
                            if (item.Quantity <= 20) {
                                qty = qty + parseInt(item.Quantity);
                            }
                            if (item.Quantity >= 20) {
                                alert(`${item.Product_Name} 數量已達20個`);
                                qty = 20;
                                $('.pro-qty input').val(qty);
                               
                               
                            }
                            item.Quantity = qty
                            hasp = true;
                        }
                    }
                });
                if (!hasp) {
                    storageValue.Items.push(object);
                }
                localStorage.setItem('Cart', JSON.stringify(storageValue.Items))
                $('.shop-cart-products').text(storageValue.Items.length);
            }
            else {
                alert('請加入購物車');
            }

        }
        else {

            console.log('請先登入')
            alert('請先登入');
        }
    });
   
}

function cart_click() {

    //當localStorage沒有資料陣列，指定一個空陣列放入資料庫
    if (localStorage.getItem('Cart') === null) {
        arrayJson = [];
        localStorage.setItem('Cart', JSON.stringify(arrayJson));
        //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
    } else {
        arrayJson = JSON.parse(localStorage.getItem('Cart'));
    };
    storageValue = { Items: arrayJson };
    $('.shopping_cart').click(function () {
        if ($('.header__cart li a').hasClass('account')) {
            if (storageValue.Items.length != null) {
                var qty = 1;
                var id = $('#UserName').text().trim();
                var productName = $(this).parents('.product__item').find('.product__item__text a').text().trim();
                var productPrice = $(this).parents('.product__item').find('.product__item__text h5').text().trim().replace('$', '');
                var productColor = $(this).parents('.product__item').find('.set-bg').attr('color');
                var object = { Shopping_Car_Id: id, Product_Name: productName, Color: productColor, Price: productPrice, Quantity: qty };

                let hasp = false;

                storageValue.Items.forEach(item => {
                   
                    if (!hasp) {
                        if (item.Shopping_Car_Id == id && item.Product_Name == productName && item.Color == productColor) {
                            if (item.Quantity >= 1) {
                                qty = parseInt(item.Quantity) + 1;
                            }
                            if (item.Quantity >= 20) {
                                alert(`${item.Product_Name}數量已達20個`);
                                item.Quantity = 20
                            }
                            item.Quantity = qty;
                            hasp = true;
                        }
                    }
                });
                if (!hasp) {
                    storageValue.Items.push(object);
                }
                localStorage.setItem('Cart', JSON.stringify(storageValue.Items))
                $('.shop-cart-products').text(storageValue.Items.length);
            }
            else {
                alert('請加入購物車');
            }
        }
        else {

            console.log('請先登入')
            alert('請先登入');
        }
    });
    $('.shop-cart-products').text(storageValue.Items.length);
}

function ChangeShow(getItem) {
    var Show = document.querySelector('.product__details__pic__item--large');
    var tmp = Show;

    Show.src = getItem.src;
    getItem.src = tmp.src;

    getItem.style.backgroundImage = `url(${tmp.src})`;
    if (document.getElementById('UserName').innerText != null || document.getElementById('UserName').innerText != '') {
        $.ajax({
            url: '/Json/CollectHeart',
            type: 'get',
            async: true,
            success: function (Jsdata) {
                let t = JSON.parse(Jsdata)
                let products_heart = document.querySelector('.heart-icon');
                let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                header__cart__Quantity.forEach(item => {
                    item.innerText = `${t.length}`;
                })
                console.log(products_heart);
                t.forEach(item => {
                    if (document.querySelector('.product__details__text h3').innerText == item.Product_Name && color == item.Color) {
                        getItem.removeAttribute('bool');
                        getItem.setAttribute('bool', 'true');
                        products_heart.children[0].setAttribute('style', 'color:#f00;')
                        getItem.setAttribute('time', `${item.Collect_Id}`)
                    }
                })
            }
        })
    }
}
collection_addordel_up();
function collection_addordel_up() {
    let products_heart = document.querySelector('.heart-icon');
    products_heart.addEventListener('click', function () {

        if ($('.header__cart li a').hasClass('account')) {
            let product_color = document.querySelectorAll('.product_details_color_item input');
            product_color.forEach(el => {
                if (el.getAttribute('color') == color) {
                    if (el.getAttribute('bool') == "false") {
                        products_heart.children[0].setAttribute('style', 'color:#f00;')
                        let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                        header__cart__Quantity.forEach(item => {
                            item.innerText = parseInt(item.innerText) + 1;
                        })
                        let time = Date.now();
                        el.setAttribute('time', `${time}`)
                        let JosnData = {
                            CollectionID: time,
                            ClintId: document.getElementById('UserName').innerText,
                            ProductName: document.querySelector('.product__details__text h3').innerText,
                            Color: color
                        }
                        $.ajax({
                            url: "/CollectFavorite/CreateData",
                            type: 'post',
                            data: { jdata: JSON.stringify(JosnData) },
                            success: function () { }
                        });
                        el.removeAttribute('bool');
                        el.setAttribute('bool', 'true');

                    }
                    else {
                        products_heart.children[0].removeAttribute('style');
                        let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                        header__cart__Quantity.forEach(item => {
                            item.innerText = parseInt(item.innerText) -1;
                        })
                        let JosnData = {
                            CollectionID: el.getAttribute('time'),
                            ClintId: document.getElementById('UserName').innerText,
                            ProductName: document.querySelector('.product__details__text h3').innerText,
                            Color: color
                        }
                        $.ajax({
                            url: "/CollectFavorite/DeleteData",
                            type: 'post',
                            data: { jdata: JSON.stringify(JosnData) },
                            success: function () { }
                        });
                        el.removeAttribute('bool');
                        el.setAttribute('bool', 'false');
                        el.removeAttribute('time');
                    }
                }
            })
        }
        else {
            console.log('請先登入')
            alert('請先登入');
        }


    })
}

function collection_addordel_down() {
    $('.heart_collect').click(function () {
        if ($('.header__cart li a').hasClass('account')) {
            $(this).attr('disabled', 'disabled');
            var bool = $(this).find('.fa-heart').attr('bool')
            if (bool == "false") {
                $(this).find('.fa-heart').css({ "color": "#f00" })
                let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                header__cart__Quantity.forEach(item => {
                    item.innerText = parseInt(item.innerText) + 1;
                })
                let name = $(this).parents('.featured__item').find('.a_name_btn').text();
                let color = $(this).parents('.featured__item').find('.set-bg').attr('value');
                let time = Date.now();
                $(this).find('.fa-heart').attr('time', `${time}`);
                let JosnData = {
                    CollectionID: time,
                    ClintId: document.getElementById('UserName').innerText,
                    ProductName: name,
                    Color: color
                };
                $.ajax({
                    url: "/CollectFavorite/CreateCollect",
                    type: 'post',
                    data: { jdata: JSON.stringify(JosnData) },
                    async: false,
                    success: function () { }
                });
                $(this).find('.fa-heart').removeAttr('bool');
                $(this).find('.fa-heart').attr('bool', 'true');
            }
            else {
                $(this).find('.fa-heart').removeAttr('style');
                let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                header__cart__Quantity.forEach(item => {
                    item.innerText = parseInt(item.innerText) - 1;
                })
                let name = $(this).parents('.featured__item').find('.a_name_btn').text();
                let color = $(this).parents('.featured__item').find('.set-bg').attr('value');
                let time = $(this).find('.fa-heart').attr('time');
                let JosnData = {
                    CollectionID: time,
                    ClintId: document.getElementById('UserName').innerText,
                    ProductName: name,
                    Color: color
                }
                $.ajax({
                    url: "/CollectFavorite/DeleteCollect",
                    type: 'post',
                    data: { jdata: JSON.stringify(JosnData) },
                    async: false,
                    success: function () { },
                    complete: function () {
                        $(this).removeAttr('disabled');
                    }

                });
                $(this).find('.fa-heart').removeAttr('bool');
                $(this).find('.fa-heart').attr('bool', 'false');;
                $(this).find('.fa-heart').removeAttr('time');
            }
        }
        else {

            console.log('請先登入')
            alert('請先登入');
        }
    });
}
