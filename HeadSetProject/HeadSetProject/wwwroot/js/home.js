window.onload = function () {
    //A_btnClick();
    let xhr = new XMLHttpRequest;
    async: true;
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            CategoryArray = JSON.parse(this.responseText);

            var _categories = document.querySelector('.categories');
            var _container = document.createElement('div');
            var _row = document.createElement('div');
            var _categories__slider = document.createElement('div');


            _container.classList.add('container');
            _row.classList.add('row');
            _categories__slider.classList.add('categories__slider');
            _categories__slider.classList.add('owl-carousel');

            CategoryArray.forEach((item) => {
                var _col_lg_3 = document.createElement('div');
                var _categories__item = document.createElement('div');
                var _h5 = document.createElement('h5');
                var _divh5a = document.createElement('div');
                var _h5a = document.createElement('a');
                var _h5a_span1 = document.createElement('span');
                var _h5a_span2 = document.createElement('span');
                var _h5a_span3 = document.createElement('span');
                var _h5a_span4 = document.createElement('span');


                _col_lg_3.classList.add('col-lg-3');
                _categories__item.classList.add('categories__item');
                _categories__item.classList.add('set-bg');
                _categories__item.setAttribute('data-setbg', item.image);
                _h5a.innerText = item.title;
                _h5a.setAttribute('href', `/ShopGrid/Index/${item.title}`);
                _h5a.appendChild(_h5a_span1);
                _h5a.appendChild(_h5a_span2);
                _h5a.appendChild(_h5a_span3);
                _h5a.appendChild(_h5a_span4);
                _divh5a.classList.add('techButton');
                _divh5a.appendChild(_h5a);
                _h5.appendChild(_divh5a);
                _categories__item.appendChild(_h5);
                _col_lg_3.appendChild(_categories__item);
                _categories__slider.appendChild(_col_lg_3);

                _row.appendChild(_categories__slider);
                _container.appendChild(_row);
                _categories.appendChild(_container);

            });

            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            $('.owl-carousel').owlCarousel({
                center: true,
                responsive: {
                    300: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 3
                    }
                },
                loop: true,
                margin: 5,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,

            });
            $(".owl-carousel").owlCarousel();

        } else {
            msg.textContent = '發生錯誤，HTTP response代碼：' + xhr.status;
        }
        // document.getElementById("msg").innerHTML=this.responseText;
    }
    xhr.open("GET", "https://raw.githubusercontent.com/zz0108/text/master/categories.json");
    xhr.send();

    /*-----------------------------------------------------------------------*/
    $.ajax({
        url: '/Home/HomeJson',
        type: 'get',
        async: true,
        success: function (Jsdata) {
            var CategoryArray = JSON.parse(Jsdata);
            var featured__filter = document.querySelector('.featured__filter');
            CategoryArray.Items.forEach(element => {
                var Type = element.Type.trim();
                let mix = document.createElement('div');
                let featured__item = document.createElement('div');
                let featured__item__pic = document.createElement('div');
                let featured__item__pic__hover = document.createElement('ul');
                let li_heart = document.createElement('li');
                let i_heart = document.createElement('i');
                let a_heart = document.createElement('a');
                let li_shopping_cart = document.createElement('li');
                let i_shopping_cart = document.createElement('i');
                let a_shopping_cart = document.createElement('a');
                let featured__item__text = document.createElement('div');
                let featured__item__text_h6 = document.createElement('h6');
                let featured__item__text_h6_a = document.createElement('a');
                let featured__item__text_h5 = document.createElement('h5');
                mix.classList.add('all', `${Type}`, 'col-lg-3', 'col-md-4', 'col-sm-6');
                featured__filter.appendChild(mix);
                featured__item.classList.add('featured__item');
                mix.appendChild(featured__item);
                featured__item__pic.classList.add('featured__item__pic', 'set-bg');
                featured__item__pic.setAttribute('data-setbg', `${element.Img}`);
                featured__item__pic.setAttribute('value', `${element.Color}`);
                featured__item.appendChild(featured__item__pic);
                featured__item__pic__hover.classList.add('featured__item__pic__hover');
                featured__item__pic.appendChild(featured__item__pic__hover);

                featured__item__pic__hover.appendChild(li_heart);
                i_heart.setAttribute('class', 'fa fa-heart');
                i_heart.setAttribute('bool', 'false'); //預設false
                a_heart.setAttribute('class', 'heart_collect');
                a_heart.appendChild(i_heart);
                li_heart.appendChild(a_heart);

                //featured__item__pic__hover.appendChild(li_retweet);
                //i_retweet.setAttribute('class', 'fa fa-retweet');
                //a_retweet.appendChild(i_retweet);
                //li_retweet.appendChild(a_retweet);

                featured__item__pic__hover.appendChild(li_shopping_cart);
                i_shopping_cart.setAttribute('class', 'fa fa-shopping-cart');
                a_shopping_cart.setAttribute('class', 'shopping_cart');
                a_shopping_cart.appendChild(i_shopping_cart);
                li_shopping_cart.appendChild(a_shopping_cart);

                featured__item__text.classList.add('featured__item__text');
                featured__item__text_h6_a.innerHTML = `${element.Name}`;
                featured__item__text_h5.innerHTML = `$${element.Price}`;
                featured__item__text_h6_a.setAttribute('href', `/ShopDetails/Index/${element.Manufacturer}/${element.Name}/${element.Color}`);
                featured__item__text_h6_a.setAttribute('class', 'a_name_btn');
                featured__item__text_h5.setAttribute('class', 'price');
                featured__item__text_h6.appendChild(featured__item__text_h6_a);
                featured__item__text.appendChild(featured__item__text_h6);
                featured__item__text.appendChild(featured__item__text_h5);
                featured__item.appendChild(featured__item__text);

            });
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            collection_addordel();    
            cart_click();
        }
    })


    /*-----------------------------------------------------------------------*/
    $.ajax({
        url: '/Home/HomeNsltJson',
        type: 'get',
        async: true,
        success: function (Jsdata) {
            CategoryArray = JSON.parse(Jsdata);
            var newest__filter = document.querySelector('.newest__filter');
            CategoryArray.Items.forEach(element => {
                let mix = document.createElement('div');
                let featured__item = document.createElement('div');
                let featured__item__pic = document.createElement('div');
                let featured__item__pic__hover = document.createElement('ul');
                let li_heart = document.createElement('li');
                let i_heart = document.createElement('i');
                let a_heart = document.createElement('a');
                //let li_retweet = document.createElement('li');
                //let i_retweet = document.createElement('i');
                //let a_retweet = document.createElement('a');
                let li_shopping_cart = document.createElement('li');
                let i_shopping_cart = document.createElement('i');
                let a_shopping_cart = document.createElement('a');
                let featured__item__text = document.createElement('div');
                let featured__item__text_h6 = document.createElement('h6');
                let featured__item__text_h6_a = document.createElement('a');
                let featured__item__text_h5 = document.createElement('h5');
                mix.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'fresh-meat');
                newest__filter.appendChild(mix);
                featured__item.classList.add('featured__item');
                mix.appendChild(featured__item);
                featured__item__pic.classList.add('featured__item__pic', 'set-bg');
                featured__item__pic.setAttribute('data-setbg', `${element.Img}`);
                featured__item__pic.setAttribute('value', `${element.Color}`);
                featured__item.appendChild(featured__item__pic);
                featured__item__pic__hover.classList.add('featured__item__pic__hover');
                featured__item__pic.appendChild(featured__item__pic__hover);

                featured__item__pic__hover.appendChild(li_heart);
                i_heart.setAttribute('class', 'fa fa-heart');
                i_heart.setAttribute('bool', 'false'); //預設false 
                a_heart.setAttribute('class', 'heart_collect');
                a_heart.appendChild(i_heart);
                li_heart.appendChild(a_heart);

                //featured__item__pic__hover.appendChild(li_retweet);
                //i_retweet.setAttribute('class', 'fa fa-retweet');
                //a_retweet.appendChild(i_retweet);
                //li_retweet.appendChild(a_retweet);

                featured__item__pic__hover.appendChild(li_shopping_cart);
                i_shopping_cart.setAttribute('class', 'fa fa-shopping-cart');
                a_shopping_cart.setAttribute('class', 'shopping_cart');
                a_shopping_cart.appendChild(i_shopping_cart);
                li_shopping_cart.appendChild(a_shopping_cart);

                featured__item__text.classList.add('featured__item__text');
                featured__item__text_h6_a.innerHTML = `${element.Name}`;
                featured__item__text_h5.innerHTML = `$${element.Price}`;
                featured__item__text_h6_a.setAttribute('class', 'a_name_btn');
                featured__item__text_h6_a.setAttribute('href', `/ShopDetails/Index/${element.Manufacturer}/${element.Name}/${element.Color}`);
                featured__item__text_h5.setAttribute('class', 'price');
                featured__item__text_h6.appendChild(featured__item__text_h6_a);
                featured__item__text.appendChild(featured__item__text_h6);
                featured__item__text.appendChild(featured__item__text_h5);
                featured__item.appendChild(featured__item__text);
            });
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            collection_addordel();
           
        }
    })

    //if (document.getElementById('UserName').innerText != null || document.getElementById('UserName').innerText != '') {
    //    $.ajax({
    //        url: '/Json/CollectHeart',
    //        type: 'get',
    //        async: true,
    //        success: function (Jsdata) {
    //            let t = JSON.parse(Jsdata)
    //            let products_heart = document.querySelectorAll('.featured__item__pic__hover .fa-heart');
    //            let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
    //            header__cart__Quantity.forEach(item => {
    //                item.innerText = `${t.length}`;
    //            })
    //            console.log(products_heart);
    //            products_heart.forEach(el => {
    //                t.forEach(item => {
    //                    if (el.offsetParent.offsetParent.offsetParent.children[0].children[1].children[0].innerText == item.Product_Name && el.offsetParent.offsetParent.getAttribute('value') == item.Color) {
    //                        el.removeAttribute('bool');
    //                        el.setAttribute('bool', 'true');
    //                        el.setAttribute('style', 'color:#f00;')
    //                        el.setAttribute('time', `${item.Collect_Id}`)
    //                    }
    //                })
    //            })
    //        }
    //    })
    //    let header__cart_head = document.querySelectorAll('.header__cart a')[0];
    //    let header__cart_humberger = document.querySelectorAll('.humberger__menu__cart a')[0];
    //    header__cart_head.setAttribute('href', '/CollectFavorite/Index')
    //    header__cart_humberger.setAttribute('href', '/CollectFavorite/Index')
    //}
    //var UserName = $('#UserName').text();

    //$('.fa-shopping-bag').click(function () {
    //    //alert('Please Waitting.\nData is being transferred');
    //    $.ajax({
    //        url: "/ShopingCart/CeateCart",
    //        type: 'post',
    //        data: { jdata: JSON.stringify(storageValue) },
    //        success: function () {
                
    //            window.location.href = `/ShopingCart/Index/${UserName}/`;
    //        },
    //        error: function () {
    //            window.location.href = `/ShopingCart/Index/${UserName}/`;
    //        }
    //    });
    //});
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
                var productName = $(this).parents('.all').find('.a_name_btn').text().trim();
                var productPrice = $(this).parents('.all').find('.price').text().trim().replace('$', '');
                var productColor = $(this).parents('.featured__item').find('.set-bg').attr('value');
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


function collection_addordel() {
    $('.heart_collect').click(function () {
        if ($('.header__cart li a').hasClass('account')) {
            $(this).attr('disabled', 'disabled');
            var bool = $(this).find('.fa-heart').attr('bool')
            if (bool == "false") {
                $(this).find('.fa-heart').css({ "color":"#f00"})
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

function sortItem(getName) {
    var _all = document.querySelectorAll('.all');

    _all.forEach(item =>  {
        item.setAttribute('style', 'display:none');

    });
    var target = document.querySelectorAll(`.${getName}`);
    target.forEach(item => {
        item.setAttribute('style', 'display:block');
    });
}