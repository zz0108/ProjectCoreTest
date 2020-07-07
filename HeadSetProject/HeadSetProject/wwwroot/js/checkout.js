var a = 0;
var str = '';
var store = '';
//http://127.0.0.1:5500/product.json
$.ajax({
    type: "GET",
    url: "http://127.0.0.1:5500/store.json",
    dataType: 'JSON',
    success: function (response) {
        console.log(response);
        let sendbtn = document.createElement('div');
        let button = document.createElement("button");
        response.forEach(stores => {
            $('.form-check-input').click(function () {
                console.log(this.id);
                switch (this.id) {
                    case "Radios1":
                        cleardiv();
                        str = '#seven';
                        store = stores.seven;
                        break;
                    case "Radios2":
                        cleardiv();
                        str = '#family';
                        store = stores.family;
                        break;
                    case "Radios3":
                        cleardiv();
                        str = '#okmart';
                        store = stores.okmart;
                        break;
                    case "Radios4":
                        cleardiv();
                        str = '#hilife';
                        store = stores.hilife;
                        break;
                    case "Radios5":
                        cleardiv();
                        str = '#delivery';
                        store = stores.delivery;
                        break;
                    default:
                        break;
                }

                $(str).css(
                    {
                        "padding": "5px",
                        "background-color": "#ECF4F9"
                    }
                )
                let span = document.createElement("span");
                span.append('常用');
                $(str).append(span);
                // $(span).append(store)
                console.log(this);
                console.log(store);
                store.forEach(label => {
                    a++;
                    sendlist(str, label.storename, label.address);
                    console.log(label.storename)
                });
                button.textContent = "";
                sendbtn.classList.add('sendbtn');
                button.classList.add('btn');
                button.classList.add('btn-outline-dark');
                button.append('+新增');
                sendbtn.append(button);
                $(str).append(sendbtn);
            });
        });
    },
    error: function (response) {
        console.log('錯誤');
    }
});

function cleardiv() {
    $('#seven').text("");
    $('#family').text("");
    $('#okmart').text("");
    $('#hilife').text("");
    $('#delivery').text("");
    $('#seven').removeAttr("style");
    $('#family').removeAttr("style");
    $('#okmart').removeAttr("style");
    $('#hilife').removeAttr("style");
    $('#delivery').removeAttr("style");

}

function sendlist(str, storename, address) {
    let span = document.createElement("span");
    let form = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");
    let p = document.createElement('p');

    form.classList.add('form-check');
    form.classList.add('storelabel')
    input.classList.add('form-check-input');
    // debugger;
    input.setAttribute("id", `radio${a}`);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'nextradio');

    label.classList.add('form-check-label');

    label.setAttribute('for', `radio${a}`);
    span.append(storename);
    p.append(address);
    label.append(span);
    label.append(p);
    form.append(input);
    form.append(label);
    $(str).append(form);
}
var total = 0;
$.ajax({
    url: '/Json/ShopCartJson',
    type: 'get',
    success: function (Jsdata) {
        var border = document.querySelector('.border');
        Jsdata = JSON.parse(Jsdata);
        console.log(Jsdata);
        Jsdata.forEach(element => {
            console.log(element.Picture)
            let trborder = document.createElement('tr');
            let item_td = document.createElement('td');
            item_td.classList.add('item');
            let item_td_a_pic = document.createElement('a');
            item_td_a_pic.classList.add('aimg', 'col-md-6', 'p-0');
            let item_td_a_pic_img = document.createElement('img');
            item_td_a_pic_img.setAttribute('src', `${element.Picture}`);
            let item_td_a_text = document.createElement('a');
            item_td_a_text.classList.add('ap', 'col-md-6', 'text-dark', 'd-flex', 'justify-content-center', 'align-self-center');
            let unit_price_td = document.createElement('td');
            let quantity_td = document.createElement('td');
            let total_price = document.createElement('td');

            item_td_a_text.innerHTML = `${element.Product_Name}(${element.Color})`;
            item_td_a_pic.appendChild(item_td_a_pic_img);
            item_td.appendChild(item_td_a_pic);
            item_td.appendChild(item_td_a_text);


            unit_price_td.innerHTML = `${element.Price}`;
            quantity_td.innerHTML = `${element.Quantity}`;
            total_price.innerHTML = `${element.Price * element.Quantity}`;
            trborder.appendChild(item_td);
            trborder.appendChild(unit_price_td);
            trborder.appendChild(quantity_td);
            trborder.appendChild(total_price);

            border.appendChild(trborder);
            
            total = total + element.Price;
            console.log(total);
            $('.itemprice p').text(total);
            $('.ds_total p').text(total);
        })
        $('.totalprice p').text(total + 100);
        $('.fir_total p').text(total);
    },
    error: function () {
        console.log('bad');
    }
})



