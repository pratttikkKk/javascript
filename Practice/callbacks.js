function processOrder(order, callback) {
  console.log("Processing", order.id);
  callback();
}

processOrder({ id: 101 }, () => {
  console.log("Order processed");
});