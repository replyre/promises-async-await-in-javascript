call = console.log.bind(" ");

//async await
let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"], //Array object
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(call("shop is closed."));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    call(`${stocks.Fruits[3]} was selected.`);

    await time(0000);
    call("start the production");

    await time(2000);
    call(" cut fruits");

    await time(1000);
    call(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added `);

    await time(1000);
    call("start the machine.");

    await time(2000);
    call(`ice cream is placed on ${stocks.holder[1]}`);

    await time(3000);
    call(`toppings: ${stocks.toppings[0]}`);

    await time(2000);
    call("serve ice cream");
  } catch (error) {
    call("customer left", error);
  } finally {
    call("dsay ended, shop is closed.");
  }
}

kitchen();
