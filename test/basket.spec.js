const { assertEquals } = require("./testing-framework");
const basket = require("../src/basket");

let actual, result, expected;

const item1 = { id: `bagel1` };
const item2 = { id1: `bagel2` };

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);

console.log(`Add item to an empty basket using addItem and expect array (basketItems) has increased in length to 1`);

// Arrange
expected = 1;
// item = { id: `bagel1` };

// Act
// basket.addItem(item);
basket.addItem(item1);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 item added to basket: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
basket.basketItems = [];
result = undefined;
actual = undefined;

// New Test

console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);

console.log(`Test that item passed to addItem is actually added to the basket`);

// Arrange
// item = { id: `bagel1` };
// expected = item1;

// Act
// basket.addItem(item);
basket.addItem(item1);
actual = basket.basketItems[0];

// Assert
result = assertEquals(actual, item1);

// Report
console.log(`Test 2: Item actually added to basket: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
basket.basketItems = [];
result = undefined;
actual = undefined;

// New Test

console.log(`Test 3`);
console.log(`==============================================`)
console.log(``);

console.log(`An item without an id property is not added to the basket`);

// Arrange
const itemWithoutId = { desc: `tasty bagel` };
expected = 0;

// Act
// basket.addItem(item);
basket.addItem(itemWithoutId);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: Item without id not added to basket: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);

// Clean Up
basket.basketItems = [];
result = undefined;
actual = undefined;


// New Test/


console.log(`Test 4`);
console.log(`==============================================`)
console.log(``);

console.log(`An item has been added to the basket with existing items`);

// Arrange
//const itemWithoutId = { desc: `tasty bagel` };
expected = 2;

// Act
// basket.addItem(item);
basket.addItem(item1);
basket.addItem(item2);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 4: An item has been added to the basket with existing items: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log('');

// Clean Up
basket.basketItems = [];
result = undefined;
actual = undefined;



console.log('================================================================================');
console.log('================================================================================');
console.log('================================================================================');
console.log('================================================================================');
//As a member of the public, so that I can change my order I'd like to remove an item from my basket


console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);

console.log(`An item has been removed from the array with existing items`);

// Arrange
//const itemWithoutId = { desc: `tasty bagel` };
expected = 1;

// Act
basket.addItem(item1);
basket.addItem(item2);
basket.removeItem();
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: An item has been removed from the array with existing items: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log();

// Clean Up
basket.basketItems = [];
result = undefined;
actual = undefined;


console.log(`Test 2`);
console.log(`==============================================`)
console.log(``);

console.log(`The item that is removed from the basket is the item passed through removeItem`);

// Arrange
//const itemWithoutId = { desc: `tasty bagel` };
expected = 1;

// Act
//basket.addItem(item1);
basket.addItem(item1);
basket.addItem(item2)
basket.removeItem();

actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: The item that is removed from the basket is the item passed through removeItem: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
//console.log(basket.basketItems);

// Clean Up
basket.basketItems = [];
result = undefined;
actual = undefined;


console.log('================================================================================');
console.log('================================================================================');
console.log('================================================================================');
console.log('================================================================================');
// As a member of the public, So that I can not overfill my small bagel basket I'd like to know when my basket is full when I try adding an item beyond my basket capacity

console.log(`Test 1`);
console.log(`==============================================`)
console.log(``);

console.log(`Test 1: Basket Full Returns a Boolean`);

// Arrange
//const itemWithoutId = { desc: `tasty bagel` };
expected = true;
// const basketCapacity;

// Act
//basket.addItem(item1);
basket.addItem(item1)
basket.addItem(item2)
actual = basket.isBasketFull();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: Basket Full Returns a Boolean: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(basket.basketItems);

// Clean Up
//basket.basketItems = [];
//result = undefined;
//actual = undefined;