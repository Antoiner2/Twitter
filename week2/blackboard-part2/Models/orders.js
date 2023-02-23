const mongoose = require('mongoose');
const viewOrders = mongoose.Schema({
    total: Number,
    shippingFees: Number,
    isPaid: Boolean,
    purchaseDate: Date
});
const Order = mongoose.model('orders', viewOrders);
module.exports = Order