call = console.log.bind(" ");

//callback hell
let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"], //Array object
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(call("our shop is closed."));
        }
    });
};

order(2000, () => call(`${stocks.Fruits[2]} was selected.`))
    //avoid semicolons while using promises .teh (mandatory)
    .then(() => {
        return order(0000, () => call("production has started"));
    })

    .then(() => {
        return order(2000, () => call("The fruit has been chopped"));
    })

    .then(() => {
        return order(1000, () =>
            call(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`)
        );
    })

    .then(() => {
        return order(1000, () => call(`Start the machine`));
    })

    .then(() => {
        return order(2000, () => call(`ice cream placed on ${stocks.holder[0]}`));
    })

    .then(() => {
        return order(3000, () => call(`toppings: ${stocks.toppings[0]}`));
    })

    .then(() => {
        return order(1000, () => call(`ice cream served.`));
    })

    .catch(() => {
        call("customer left");
    })

    .finally(() => {
        call("day ended, shop closed.");
    })
