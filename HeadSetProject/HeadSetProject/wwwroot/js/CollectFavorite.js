var product_cards = document.querySelector('.Shop-card-products');

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
    url: "/Json/CollectFavoriteJson",
    type: "get",
    success: function (response) {
        let data = JSON.parse(response)
        create_collection(data)
        heart_click();
        //alert("cwhjckwdkjcc");
    }
});
function create_collection(array) {
    array.forEach(el => {
        let template = document.querySelector('#collect_template');
        let cloneContent = template.content.cloneNode(true);
        let card = cloneContent.querySelector('.card');
        card.setAttribute('value', `${el.ClintID}`);
        let heart_button = cloneContent.querySelector('.heart-button');
        heart_button.setAttribute('value', `${el.CollectionID}`)
        let img = cloneContent.querySelector('.card img');
        let productname = cloneContent.querySelector('.card-text');
        img.setAttribute('src', `${el.ProductImage}`);
        img.setAttribute('value', `${el.Color}`);
        productname.innerText = `${el.ProductName}`;
        productname.setAttribute('href', `/ShopDetails/Index/${el.Manufacturer}/${el.ProductName}/${el.Color}`);
        product_cards.appendChild(cloneContent);
    })
}
function heart_click() {
    let heart_button = document.querySelectorAll('.heart-button');
    heart_button.forEach(el =>
        el.addEventListener('click', function () {
            let header__cart__Quantity = document.querySelectorAll('.collect_quantity');
            header__cart__Quantity.forEach(el => {
                el.innerText = parseInt(el.innerText) - 1;
            })
            var JosnData = {
                CollectionID
                    : el.getAttribute('value'),
                ClintId: el.offsetParent.getAttribute('value'),
                ProductName: el.offsetParent.children[2].innerText,
                Color:el.offsetParent.children[1].getAttribute('value')
                //ProductImage: el.offsetParent.children[1].getAttribute('src')
            };
            el.offsetParent.offsetParent.classList.add('d-none');
            $.ajax({
                url: "/CollectFavorite/DeleteData",
                type: 'post',
                data: { jdata: JSON.stringify(JosnData) },
                success: function () {
                    //alert("成功");
                }
            })
        })
    )
}