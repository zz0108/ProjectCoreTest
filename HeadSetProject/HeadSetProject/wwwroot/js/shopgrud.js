
window.onload = function () {
    //A_btnClick();
    $.ajax({
        url: '/Json/ShopGridtoDiscountJson',
        type: 'get',
        success: function (Jsdata) {
            CategoryArray = JSON.parse(Jsdata);
            var row = document.querySelector('.shopgrud');
            var product__discount__slider = document.createElement('div');
            product__discount__slider.classList.add('product__discount__slider', 'owl-carousel');
            row.appendChild(product__discount__slider);
            CategoryArray.Items.forEach(element => {
                let col_lg_4 = document.createElement('div');
                let product__discount__item = document.createElement('div');
                let product__discount__item__pic = document.createElement('div');
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
                let product__discount__item__text = document.createElement('div');
                let product__discount__item__text_span = document.createElement('span');
                let product__discount__item__text_h5 = document.createElement('h5');
                let product__discount__item__text_h5_a = document.createElement('a');
                let product__item__price = document.createElement('div');
                let product__item__price_span = document.createElement('span');
                col_lg_4.classList.add('col-lg-4');
                product__discount__item.classList.add('product__discount__item','Product');
                product__discount__item__pic.classList.add('product__discount__item__pic', 'set-bg');
                product__discount__item__pic.setAttribute('data-setbg', `${element.Img}`);
                product__discount__item__pic.setAttribute('value', `${element.Color}`);
                product__item__pic__hover.classList.add('product__item__pic__hover');
                i_heart.setAttribute('class', 'fa fa-heart');
                i_heart.setAttribute('bool', 'false');
                a_heart.setAttribute('class', 'heart_collect');
                //i_retweet.setAttribute('class', 'fa fa-retweet');
                i_shopping_cart.setAttribute('class', 'fa fa-shopping-cart');
                a_shopping_cart.setAttribute('class', 'shopping_cart');
                product__discount__item__text.classList.add('product__discount__item__text');
                product__item__price.classList.add('product__item__price');

                col_lg_4.appendChild(product__discount__item);
                product__discount__item.appendChild(product__discount__item__pic);
                product__discount__item__pic.appendChild(product__item__pic__hover);
                product__item__pic__hover.appendChild(li_heart);
                //product__item__pic__hover.appendChild(li_retweet);
                product__item__pic__hover.appendChild(li_shopping_cart);
                li_heart.appendChild(a_heart);
                //li_retweet.appendChild(a_retweet);
                li_shopping_cart.appendChild(a_shopping_cart);
                a_heart.appendChild(i_heart);
                //a_retweet.appendChild(i_retweet);
                a_shopping_cart.appendChild(i_shopping_cart);

                product__discount__item.appendChild(product__discount__item__text);
                product__discount__item__text.appendChild(product__discount__item__text_h5);
                product__discount__item__text.appendChild(product__discount__item__text_span);
                product__discount__item__text_span.innerHTML = `${element.Category}`;
                product__discount__item__text_h5.appendChild(product__discount__item__text_h5_a);
                product__discount__item__text_h5_a.setAttribute('href', `/ShopDetails/Index/${element.Manufacturer}/${element.Name}/${element.Color}`);
                product__discount__item__text_h5_a.classList.add('Product_Name');
                product__discount__item__text_h5_a.innerHTML = `${element.Name}`;
                product__discount__item__text.appendChild(product__item__price);
                product__item__price.classList.add('Product_Price');
                product__item__price.appendChild(product__item__price_span);
                product__item__price_span.innerHTML = `$${element.Price}`;

                product__discount__slider.appendChild(col_lg_4);


            });
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            $(".product__discount__slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 3,
                dots: true,
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true,
                responsive: {

                    320: {
                        items: 1,
                    },

                    480: {
                        items: 2,
                    },

                    768: {
                        items: 2,
                    },

                    992: {
                        items: 3,
                    }
                }
            });

            /*---------------------------------
                Product Details Pic Slider
            ----------------------------------*/
            $(".product__details__pic__slider").owlCarousel({
                loop: true,
                margin: 20,
                items: 4,
                dots: true,
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $(".owl-carousel").owlCarousel();
            collection_addordel();
        }
        
    })

    $.ajax({
        url: '/Json/ShopGridJson',
        type: 'get',
        success: function (Jsdata) {
            let CategoryArray = JSON.parse(Jsdata);
            var row = document.querySelector('.shopgrid2');
            CategoryArray.Items.forEach(element => {
                let col_lg_4 = document.createElement('div');
                col_lg_4.classList.add('col-lg-4', 'col-md-6', 'col-sm-6');
                let product__item = document.createElement('div');
                product__item.classList.add('product__item', 'Product');
                let product__item__pic = document.createElement('div');
                product__item__pic.classList.add('product__item__pic', 'set-bg');
                let product__item__pic__hover = document.createElement('ul');
                product__item__pic__hover.classList.add('product__item__pic__hover');
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
                product__item__text.classList.add('product__item__text');
                let product__item__text_h6 = document.createElement('h6');
                let product__item__text_h6_a = document.createElement('a');
                let product__item__text_h5 = document.createElement('h5');

                row.appendChild(col_lg_4);
                col_lg_4.appendChild(product__item);
                product__item__pic.setAttribute('data-setbg', `${element.Img}`);
                product__item__pic.setAttribute('value', `${element.Color}`);
                product__item.appendChild(product__item__pic);
                product__item__pic.appendChild(product__item__pic__hover);
                i_heart.setAttribute('bool', 'false');
                i_heart.setAttribute('class', 'fa fa-heart');
                a_heart.setAttribute('class', 'heart_collect');
                //i_retweet.setAttribute('class', 'fa fa-retweet');
                i_shopping_cart.setAttribute('class', 'fa fa-shopping-cart');
                a_shopping_cart.setAttribute('class', 'shopping_cart');
                a_heart.appendChild(i_heart);
                //a_retweet.appendChild(i_retweet);
                a_shopping_cart.appendChild(i_shopping_cart);

                li_heart.appendChild(a_heart);
                //li_retweet.appendChild(a_retweet);
                li_shopping_cart.appendChild(a_shopping_cart);

                product__item__pic__hover.appendChild(li_heart);
                //product__item__pic__hover.appendChild(li_retweet);
                product__item__pic__hover.appendChild(li_shopping_cart);

                product__item.appendChild(product__item__text);
                product__item__text_h6_a.innerHTML = `${element.Name}`;
                product__item__text_h6_a.setAttribute('href', `/ShopDetails/Index/${element.Manufacturer}/${element.Name}/${element.Color}`);
                product__item__text_h6_a.classList.add('Product_Name');
                product__item__text_h6.appendChild(product__item__text_h6_a);
                product__item__text.appendChild(product__item__text_h6);

                product__item__text_h5.innerHTML = `$${element.Price}`;
                product__item__text_h5.classList.add('Product_Price');
                product__item__text.appendChild(product__item__text_h5);
            });

            var product__pagination = document.querySelector('.product__pagination');
            var a_1 = document.createElement('a');
            var a_2 = document.createElement('a');
            var a_3 = document.createElement('a');
            var a_4 = document.createElement('a');
            var a_4_i = document.createElement('i');
            a_1.setAttribute('href', `/ShopGrid/Index/${CategoryArray.Items[0].Manufacturer}/0`);
            a_2.setAttribute('href', `/ShopGrid/Index/${CategoryArray.Items[0].Manufacturer}/1`);
            a_3.setAttribute('href', `/ShopGrid/Index/${CategoryArray.Items[0].Manufacturer}/2`);
            a_4.setAttribute('href', `/ShopGrid/Index/${CategoryArray.Items[0].Manufacturer}`);
            a_1.innerHTML = '1';
            a_2.innerHTML = '2';
            a_3.innerHTML = '3';
            a_4_i.setAttribute('class', 'fa fa-long-arrow-right');
            a_4.appendChild(a_4_i);
            product__pagination.appendChild(a_1);
            product__pagination.appendChild(a_2);
            product__pagination.appendChild(a_3);
            product__pagination.appendChild(a_4);
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            collection_addordel();
            cart_click();
        }
    })

    $.ajax({
        url: '/Json/ShopGridtoLatestJson',
        type: 'get',
        success: function (Jsdata) {
            let CategoryArray = JSON.parse(Jsdata)
            var latest_product__text = document.querySelector('.latest-product__text');
            var latest_product__slider = document.createElement('div');
            latest_product__slider.classList.add('latest-product__slider', 'owl-carousel');
            ShopGrid();
            ShopGrid();
            function ShopGrid() {
                var latest_prdouct__slider__item = document.createElement('div');
                latest_prdouct__slider__item.classList.add('latest-prdouct__slider__item');
                latest_product__text.appendChild(latest_product__slider);
                latest_product__slider.appendChild(latest_prdouct__slider__item);

                CategoryArray.Items.forEach(element => {
                    let latest_product__item = document.createElement('a');
                    latest_product__item.classList.add('latest-product__item');
                    let latest_product__item__pic = document.createElement('div');
                    latest_product__item__pic.classList.add('latest-product__item__pic');
                    latest_product__item__pic.setAttribute('value', `${element.Color}`);
                    let img = document.createElement('img');
                    let latest_product__item__text = document.createElement('div');
                    latest_product__item__text.classList.add('latest-product__item__text');
                    let latest_product__item__text_h6 = document.createElement('h6');
                    let latest_product__item__text_h6_a = document.createElement('a');
                    let latest_product__item__text_span = document.createElement('span');
                    latest_product__item.setAttribute('href', `/ShopDetails/Index/${element.Manufacturer}/${element.Name}/${element.Color}`);
                    latest_prdouct__slider__item.appendChild(latest_product__item);
                    latest_product__item.appendChild(latest_product__item__pic);
                    img.setAttribute('src', `${element.Img}`);
                    img.setAttribute('style', 'width:110px');
                    latest_product__item__pic.appendChild(img);
                    latest_product__item.appendChild(latest_product__item__text);
                    latest_product__item__text_h6.innerHTML = `${element.Name}`;

                    latest_product__item__text_span.innerHTML = `$${element.Price}`;
                    latest_product__item__text.appendChild(latest_product__item__text_h6);
                    latest_product__item__text.appendChild(latest_product__item__text_span);


                });
            }

            $(".latest-product__slider").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $(".owl-carousel").owlCarousel();
            
        }
    })
    
    var UserName = $('#UserName').text();
    $('.fa-shopping-bag').click(function () {
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
    
    if (document.getElementById('UserName').innerText != null || document.getElementById('UserName').innerText != '') {
        $.ajax({
            url: '/Json/CollectHeart',
            type: 'get',
            async: true,
            success: function (Jsdata) {
                let t = JSON.parse(Jsdata)
                let products_heart = document.querySelectorAll('.product__item__pic__hover .fa-heart');
                let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
                header__cart__Quantity.forEach(item => {
                    item.innerText = `${t.length}`;
                })
                console.log(products_heart);
                products_heart.forEach(el => {
                    t.forEach(item => {
                        if (el.offsetParent.offsetParent.offsetParent.children[0].children[1].children[0].innerText == item.Product_Name && el.offsetParent.offsetParent.getAttribute('value') == item.Color) {
                            el.removeAttribute('bool');
                            el.setAttribute('bool', 'true');
                            el.setAttribute('style', 'color:#f00;')
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
}

var storageValue;
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
                var productName = $(this).parents('.Product').find('.Product_Name').text().trim();
                var productPrice = $(this).parents('.Product').find('.Product_Price').text().trim().replace('$', '').split('$')[0];
                var productColor = $(this).parents('.Product').find('.set-bg').attr('value');
                var object = { Shopping_Car_Id: id, Product_Name: productName, Color: productColor, Price: productPrice, Quantity: qty };
                console.log(this);
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


function collection_addordel() {
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
                let name = $(this).parents('.product__item').find('.Product_Name').text();
                let color = $(this).parents('.product__item').find('.set-bg').attr('value');
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
