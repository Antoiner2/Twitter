// Add your own requires here 😉

const Order = require("./Models/orders");

;
const User = require("./Models/users");

require(`./models/connection`);
const Article = require("./Models/articles");



/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}


function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}


function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}


function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}


function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}


function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() { 
User.find().then(data => {
	console.log('Users =>', data);
});
}

displayAllUsers();

function deleteUser(userId) { 
		User.deleteOne({ _id: userId }).then(() => {
		  console.log(`User ${userId} deleted`);
		});
	   }
	   // deleteUser('625ea9ca38d6a3776994651j');




/*
** Orders
*/

function displayAllOrders() {
Order.find().then(data =>{
	console.log('Orders =>', data)
}
	)
 }
 //displayAllOrders();

function updateOrderPaymentStatus(orderId, isPaid) { 
Order.updateOne({_id: orderId},
	{isPaid: isPaid}
	).then(data => {
		console.log(data)}
	)}
//updateOrderPaymentStatus(true);


function deleteOrder(orderId) {
		Order.deleteOne({ _id: orderId }).then(() => {
		  console.log(`order ${orderId} deleted`);
		});
	   }

	   // deleteUser('625ea9ca38d6a37769946511');

 


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
