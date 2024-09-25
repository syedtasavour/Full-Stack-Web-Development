const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
}
const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomers = async () => {
  let cust1 = new Customer({
    name: "Cust 1",
  });
  let order1 = await Order.findOne({
    item: "chips",
  });
  let order2 = await Order.findOne({
    item: "Chocolate",
  });
  cust1.orders.push(order1);
  cust1.orders.push(order2);
  let res = await cust1.save();
  console.log(res);

};
addCustomers();
// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Somosa", price: 12 },
//     { item: "chips", price: 10 },
//     { item: "Chocolate", price: 40 },
//   ]);
//   console.log(res);
// };
// addOrders();
