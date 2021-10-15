const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="img/${item.title}.jpg" class="product-img" alt="img">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);

// .map генерирует новый массив, применяя заданную функцию к каждому элементу в массиве. элементы нового массива выводятся через запятую по умолчанию. 