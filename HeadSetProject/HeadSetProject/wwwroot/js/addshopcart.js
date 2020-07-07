function addcart() {
    //當localStorage沒有資料陣列，指定一個空陣列放入資料庫
    if (localStorage.getItem('item') === null) {
        arrayJson = [];
        localStorage.setItem('item', JSON.stringify(arrayJson));
        //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
    } else {
        arrayJson = JSON.parse(localStorage.getItem('item'));
    };

}