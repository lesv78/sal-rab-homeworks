// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + через дефис телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - адрес доставки
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, street, house, entrance, floor, flat, goods, sum) {
    let data = {client: name,
                 order: { adress: street + ', '+house + ', ' + entrance + ', ' + floor + ', ' + flat, sum}, 
                 goods: [goods]};

    let countOfGoods = goods.length;
     data.goods.title=title + ' ' + count;

    for (let i = 0; i <= countOfGoods; i++) {
        data.goods.push(goods[i].title);
    }

    data.client.name = name+' '+phone;
    data.order.address.street = street;
    data.order.address.house = house;
    data.order.address.entrance = entrance;
    data.order.address.floor = floor;
    data.order.address.flat = flat;
    data.order.sum = sum;
  /*  data.goods.title = title;
    data.goods.count = count;*/
     
    


    let jsonData = JSON.stringify(data);

    return jsonData;
}
