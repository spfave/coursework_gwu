//WRITE YOUR CODE BELOW
customerOrder = {
  drinkName: "Latte",
  numberSugar: 2,
  orderReady: false,
};

console.log(
  `${customerOrder.drinkName} with ${customerOrder.numberSugar} sugars`
);
if (customerOrder.orderReady) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
