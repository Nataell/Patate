/*
This file is generated and updated by Sencha Cmd. You can edit this file as
needed for your application, but these edits will have to be merged by
Sencha Cmd when it performs code generation tasks such as generating new
models, controllers or views and when running "sencha app upgrade".

Ideally changes to this file would be limited and most work would be done
in other places (such as Controllers). If Sencha Cmd cannot merge your
changes and its generated code, it will produce a "merge conflict" that you
will need to resolve manually.
*/
Ext.application({
	name: 'fr.ESIR.GreenVentory',

	requires: [
		'Ext.MessageBox',
		'Ext.Toast'
	],
	models: [
		'IngredientListModel',
		'RecipeListModel',
		'OverviewRecipeModel',
		'Basket',
		'MealListModel',
		'MealModel',
		'FoodListModel',
		'UserDataModel',
		'StepListModel',
		'InformationModel'
	],
	views: [
		'CommandProd',
		'CommandMeal',
		'param.SigninView',
		'param.ParamView',
		'param.WhowerView',
		'param.CreateAccountView',
		'param.Information',
		'param.MyAccount',
		'param.MyCommands',
		'param.Story',
		'param.ThemeV',
		'param.overviewMyAccountData',
		'meal.MealList',
		'meal.MealView',
		'meal.OverviewMeal',
		'recipe.RecipeView',
		'fruitVegetable.FruitVegetableList',
		'fruitVegetable.FruitVegetableView',
		'fruitVegetable.OverviewFV',
		'recipe.IngredientListView',
		'recipe.RecipeStepListView',
		'recipe.RecipeList',
		'recipe.RecipeListNew',
		'recipe.OverviewRecipeView',
		'recipe.ListRecipeView',
		'recipe.NewRecipe',
		'recipe.NewRecipeIngredients',
		'recipe.NewRecipeOverview',
		'recipe.NewRecipeSteps',
		'Welcome',
		'Basket'
	],

	controllers: [
		'MyAccount',
		'Welcome',
		'RecipeView',
		'RecipeList',
		'RecipeListNew',
		'NewRecipe',
		'FruitVegetableList',
		'FruitVegetableView',
		'MealList',
		'MealView',
		'ParamView',
		'SigninView',
		'CreateAccountView',
		'Information',
		'ThemeC',
		'WhowerView',
		'BasketC'
	],

	icon: {
		'57': 'resources/icons/Icon.png',
		'72': 'resources/icons/Icon~ipad.png',
		'114': 'resources/icons/Icon@2x.png',
		'144': 'resources/icons/Icon~ipad@2x.png'
	},

	isIconPrecomposed: true,

	startupImage: {
		'320x460': 'resources/startup/320x460.jpg',
		'640x920': 'resources/startup/640x920.png',
		'768x1004': 'resources/startup/768x1004.png',
		'748x1024': 'resources/startup/748x1024.png',
		'1536x2008': 'resources/startup/1536x2008.png',
		'1496x2048': 'resources/startup/1496x2048.png'
	},

	launch: function() {
		// Destroy the #appLoadingIndicator element
		if (navigator.userAgent.match("Android")) {
			/*document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
			function onBackKeyDown(eve) {
				eve.preventDefault();
				Ext.Msg.confirm("Fermeture", "Voulez-vous quitter l'application ?",  function ( answer ) {
					if ( answer == 'yes') {
						navigator.app.exitApp();
					}
				});
			}*/
			//met le clavier sur la vue et pas en dessous en poussant les composants
			StatusBar.backgroundColorByHexString("#388E3C");
			Ext.Viewport.on('painted', function() {
				Ext.Viewport.setHeight(window.innerHeight);
			});
		}
		// Initialize the main view
		Ext.Viewport.add(Ext.create('fr.ESIR.GreenVentory.view.Welcome'));
	},

	onUpdated: function() {
		Ext.Msg.confirm(
			"Application Update",
			"This application has just successfully been updated to the latest version. Reload now?",
			function(buttonId) {
				if (buttonId === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
