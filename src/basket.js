const basket = {
    basketItems: [],


    addItem: function (item) {
        // item?.id - ? is optional chaining - not necessary in this case but good to get into habit of using
        if (item?.id) {
            this.basketItems.push(item);
        }
        if (item?.id1) {
            this.basketItems.push(item)
        }
    },
    // Remember arrow fns cannot access this (when you want this to mean 'this' object!)
    //arrowFunc: () => { console.log(this) },

    removeItem: function () {

        this.basketItems.pop();
    },

    isBasketFull: function () {

        basketCapacity = 2;

        if (this.basketItems.length >= basketCapacity)
            return true



        //let countItem = 0;

        //for (i = 0; i < item.length; i++) {
        //return countItem;
    }
}





module.exports = basket;