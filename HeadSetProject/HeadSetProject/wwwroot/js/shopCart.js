window.onload = function () {

    $.ajax({
        type: "GET",
        url: "/Json/ShopCartJson",
        dataType: 'JSON',
        success: function (response) {
            var Product = JSON.parse(response);
            Product.forEach(product => {
                let tr = document.createElement('tr');
                let item = document.createElement('td');
                let img = document.createElement('img');
                let h5 = document.createElement('h5');
                let price = document.createElement('td');
                let cquantity = document.createElement('td');
                let quantity = document.createElement('div');
                let qty = document.createElement('div');
                let decqtybtn = document.createElement('span');
                let incqtybtn = document.createElement('span');
                let input = document.createElement('input');
                let total = document.createElement('td');
                let close = document.createElement('td');
                let span = document.createElement('span');

                item.classList.add('shoping__cart__item');
                img.setAttribute('src', product.Picture);
                h5.append(`${product.Manufacturer}  ${product.Product_Name}(${product.Color})`);
                item.append(img);
                item.append(h5);

                price.classList.add('shoping__cart__price');
                price.append(`$${product.Price}`);

                cquantity.classList.add('shoping__cart__quantity');
                quantity.classList.add('quantity');
                qty.classList.add('pro-qty');
                decqtybtn.classList.add('dec');
                decqtybtn.classList.add('qtybtn');
                decqtybtn.append('-');
                input.setAttribute('type', 'text');
                input.value = product.Quantity;
                incqtybtn.classList.add('inc');
                incqtybtn.classList.add('qtybtn');
                incqtybtn.append('+');
                qty.prepend(decqtybtn);
                qty.append(input);
                qty.append(incqtybtn);
                quantity.append(qty);
                cquantity.append(quantity);
                total.classList.add('shoping__cart__total');
                total.append(`$${product.Price * input.value}`);

                close.classList.add('shoping__cart__item__close');
                span.classList.add('icon_close');
                close.append(span);

                tr.append(item);
                tr.append(price);
                tr.append(cquantity);
                tr.append(total);
                tr.append(close);
                $('tbody').append(tr);

            })

            $('.pro-qty').on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                    var tr = $(this).parents('tr');
                    var input = tr.find('input').val(newVal);
                    var price = tr.find('.shoping__cart__price').text().replace('$', '');
                    tr.find('.shoping__cart__total').text(`$${input.val() * parseInt(price)}`);
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 1) {
                        var newVal = parseFloat(oldValue) - 1;
                        var tr = $(this).parents('tr');
                        var input = tr.find('input').val(newVal);
                        var price = tr.find('.shoping__cart__price').text().replace('$', '');
                        tr.find('.shoping__cart__total').text(`$${input.val() * parseInt(price)}`);

                    } else {
                        newVal = 1;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
            deleteproduct();
            updatproduct();
        }

    });
    if (document.getElementById('UserName').innerText != null || document.getElementById('UserName').innerText != '') {
        let header__cart_head = document.querySelectorAll('.header__cart a')[0];
        let header__cart_humberger = document.querySelectorAll('.humberger__menu__cart a')[0];
        header__cart_head.setAttribute('href', '/CollectFavorite/Index')
        header__cart_humberger.setAttribute('href', '/CollectFavorite/Index')
    }

    //debugger;
}

function deleteproduct() {
    var local = JSON.parse(localStorage.getItem('Cart'));
   
    $('.icon_close').click(function () {
        var tr = $(this).parents('tr');
        var prducts = tr.find('.shoping__cart__item h5').text().split("  ");
        var prductName = prducts[1].split("(")[0];
        var color = prducts[1].split("(")[1].split(")")[0];
        tr.remove();
        localStorage.setItem('Cart', JSON.stringify(local));
        //當localStorage沒有資料陣列，指定一個空陣列放入資料庫
        if (localStorage.getItem('Del') === null) {
            var del = [];
            localStorage.setItem('Del', JSON.stringify(del));
            //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
        } else {
            var del = JSON.parse(localStorage.getItem('Del'))
        };
        var newlocal = { Items: del }
        
        local.forEach((item, index) => {
            if (item.Product_Name == prductName && item.Color == color) {
                newlocal.Items.push(local.splice(index, 1)[0]);

            }
            console.log(newlocal.Items)
            localStorage.setItem('Del', JSON.stringify(newlocal.Items))
            

            if (newlocal.Items != null) {
                $.ajax({
                    url: "/ShopingCart/DeleteCart",
                    type: 'post',
                    data: { jdata: JSON.stringify(newlocal) },
                    success: function () {
                        if ($('toby').hasClass('shoping__cart__item')) {
                            localStorage.removeItem('Del');
                        }
                        else {
                            localStorage.clear();
                        }
                    },
                    error: function (response) {
                    }
                });
            }

        })
    })

    $('.shop-cart-products').text(local.length);

}

function updatproduct() {
    var local = JSON.parse(localStorage.getItem('Cart'));
    var tr = document.querySelectorAll('tbody tr');
    var storageValue = { Items: local };
    //tr.forEach(obj => {
    //    var id = $('#UserName').text().trim();
    //    var products = $(obj).find('.shoping__cart__item h5').text().split("  ");
    //    var productName = products[1].split("(")[0];
    //    var productColor = products[1].split("(")[1].split(")")[0];
    //    var productPrice = $(obj).find('.shoping__cart__price').text().trim().replace('$', '');
    //    var qty = $(obj).find('.shoping__cart__quantity input').val();
    //    console.log(qty)
    //})
      
        $('.UpdateCart').click(function () {
            tr.forEach(obj => {
                if (storageValue.Items.length != null) {
                    var id = $('#UserName').text().trim();
                    var products = $(obj).find('.shoping__cart__item h5').text().split("  ");
                    var productName = products[1].split("(")[0];
                    var productColor = products[1].split("(")[1].split(")")[0];
                    var productPrice = $(obj).find('.shoping__cart__price').text().trim().replace('$', '');
                    var qty = $(obj).find('.shoping__cart__quantity input').val();
                    var object = { Shopping_Car_Id: id, Product_Name: productName, Color: productColor, Price: productPrice, Quantity: qty };

                    let hasp = false;


                    storageValue.Items.forEach(item => {
                        if (!hasp) {
                            if (item.Shopping_Car_Id == id && item.Product_Name == productName && item.Color == productColor) {
                                item.Quantity = qty;
                                hasp = true;
                            }
                        }
                    });
                    if (!hasp) {
                        storageValue.Items.push(object);
                    }
                    localStorage.setItem('Cart', JSON.stringify(storageValue.Items))

                }
                else {
                    alert('請加入購物車');
                }
            })

            $.ajax({
                url: "/ShopingCart/CeateCart",
                type: 'post',
                data: { jdata: JSON.stringify(storageValue) },
                success: function () {

                    window.location.href = `/Checkout/Index/`;
                },
                error: function () {
                    window.location.href = `/ShopingCart/Index/${UserName}/`;
                }
            });
        })
   
}

