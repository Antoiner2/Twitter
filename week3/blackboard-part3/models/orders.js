const mongoose = require('mongoose');



const orderSchema = mongoose.Schema({
	total: Number,
	shippingFees: Number,
	purchaseDate: Date,
	articles  :  [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
	user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	isPaid: Boolean,

});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
