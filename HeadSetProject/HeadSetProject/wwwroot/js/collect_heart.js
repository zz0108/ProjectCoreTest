if (document.getElementById('UserName').innerText != null || document.getElementById('UserName').innerText != '') {
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
}