/**
 * @author Antrax
 */
(function(){
	var app = angular.module("product-directives", []);
	app.directive('productTitle', function(){
		return {
			"restrict": "E",
			"templateUrl": "product-title.html"
		};
	});
	app.directive('productDescription', function(){
		return {
			"restrict": "E",
			"templateUrl": "product-description.html"
		};
	});
	app.directive('productSpecs', function(){
		return {
			"restrict": "A",
			"templateUrl": "product-specs.html"
		};
	});
	app.directive('productTabs', function(){
		return {
			"restrict": "E",
			"templateUrl": "product-tabs.html",
			"controller": function(){
				this.tab = 1;
				this.setTab = function(tabNum){
					this.tab = tabNum;
				};
				this.isSet = function(tabNum){
					return this.tab === tabNum;
				};
			},
			"controllerAs": "tab"
		};
	});
	
	app.directive('productGallery', function(){
		return {
			"restrict": "E",
			"templateUrl": "product-gallery.html",
			"controller": function(){
				this.current = 0;
				this.setCurrent = function(param){
					if(param === null){
						this.current = 0;
					} else {
						this.current = param;
					}
				};
			},
			"controllerAs": "gallery"
		};
	});
})();