/**
 * @author Antrax
 */
(function(){
	var app = angular.module("gemStore", ["product-directives"]);
	app.controller("StoreController", ["$http", function($http){
		var store = this;
		store.products= [];
		$http({
			"method": "GET",
			"url": "products.json"
		}).success(function(data){
			store.products = data;
		}).error(function(){
		});
	}]);
	
	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
})();