const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
	});
   console.log(data)
};
displayAllArticles(data);



function displayArticleByID(articleId) {
	db.findById('625ea9ca38d6a3776994651d').then(data => {
		console.log(data);
	   });
}
//displayArticleByID(data)

function displayArticleByName(articleName) {
	db.findOne({ firstName: 'Bandit' })
 .then(data => {
   console.log(data);
 });
 }
//displayArticleByName('NKD")

function updateArticlePrice(articleId, newPrice) {

	db.updateOne({articleId: articleId},
				{newPrice: newPrice }).then(() => {

		db.findById('115ea9ca38d6a3776994651e').then(data => {
			console.log(data);
		})
	})
	};
	//updateArticlePrice("200")




function updateArticleStock(articleId, newStock) {

	db.updateOne({articleId: articleId
				({newStock: newStock}).then(() => {

					db.findById({articleId: articleId}).then(data => {
						
					});
					console.log(data);
}
)};

//yarupdateArticleStock(data);

function resetStocks() {
db.updateMany()
{ }
{resetStocks = '0'}


}


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
}; 