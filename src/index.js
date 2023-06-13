const basket = require("./basket");

const item1 = { id: `bag1` };
const item2 = { id: `bag2` };

basket.addItem(item1);
basket.addItem(item2);

console.log(basket.basketItems);


