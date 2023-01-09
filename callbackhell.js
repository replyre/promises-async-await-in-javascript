call = console.log.bind(" ");

//callback hell
let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"], //Array object
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

//call(stocks.Fruits[0]);
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    call(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
  // call("order placed! Call production.");
};

let production = () => {
  // call("order received! Starting the production...");
  setTimeout(() => {
    call("production has started");

    setTimeout(() => {
      call("fruit has been chopped");

      setTimeout(() => {
        call(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`);

        setTimeout(() => {
          call("The machine  has started.");

          setTimeout(() => {
            call(`ice cream was placed on ${stocks.holder[0]} `);
            setTimeout(() => {
              call(` toppings: ${stocks.toppings[0]} `);

              setTimeout(() => {
                call(` Serve the ice cream `);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(1, production);
