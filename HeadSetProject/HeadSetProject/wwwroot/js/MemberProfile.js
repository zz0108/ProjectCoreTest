let memberinf = document.querySelectorAll('.member__item__b p');
$.ajax({
    url: '/Json/MemberProfileJson/',
    type: 'get',
    success: function (response) {
        let data = JSON.parse(response);
        memberinf[0].innerText = data[0].Clint_Id;
        memberinf[1].innerText = data[0].UserName;
        memberinf[2].innerText = data[0].Phone;
        memberinf[3].innerText = data[0].Gender;
        memberinf[4].innerText = data[0].Birthday;
        let i = 0;
    }
})
let header__cart_head = document.querySelectorAll('.header__cart a')[0];
let header__cart_humberger = document.querySelectorAll('.humberger__menu__cart a')[0];
header__cart_head.setAttribute('href', '/CollectFavorite/Index')
header__cart_humberger.setAttribute('href', '/CollectFavorite/Index')
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