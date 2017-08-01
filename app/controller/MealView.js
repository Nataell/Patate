var overviewDataMeal;
var quantityMeal;
var dateMeal;
Ext.define('fr.ESIR.GreenVentory.controller.MealView', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			mainView: 'welcome',
			MealView: 'mealview',
			btnBackToMealView: 'commandmeal button[action=backToMealView]',
			btnShowCommandMeal: 'overviewmeal button[action=goToCommandMealView]',
			btnConfirmCommand: 'commandmeal button[action=addMealToBasket]',
			dateOfCommand: 'commandmeal datepickerfield[name=dateMeal]',
			quantityOfMeal: 'commandmeal numberfield[name=quantityMeal]',
			backBtn: 'mealview button[action=back]',
			titleBar: 'mealview titlebar[name=mealTB]'
		},
		control: {
			'backBtn': {
				tap: 'backToWelcome'
			},
			'btnBackToMealView' : {
				tap: 'onBtnBackToMealView'
			},
			'btnShowCommandMeal' : {
				tap: 'onBtnCommandTap'
			},
			'btnConfirmCommand': {
				tap: 'addProductToBracket'
			},
			'quantityOfMeal' : {
				change: 'quantityChange'
			}
		}
	},
	backToWelcome : function(){
		Ext.Viewport.setActiveItem(this.getMainView());
	},
	//A chaque changement de la quantité, on mémorise
	quantityChange : function(numberfield, newValue, oldValue, eOpts){
		quantityMeal = newValue;
		console.log(quantityMeal);
	},

	onBtnCommandTap: function(){
		this.getMealView().next();
	},

	onBtnBackToMealView : function(){
		this.getMealView().previous();
	},

	addProductToBracket : function(){
		var name = overviewDataMeal.first().get('mealid');
		this.getApplication().getController('BasketC').addBasketItem(name, quantityMeal);
	},

	//called when the Application is onLaunched, remove if not needed
	onLaunch: function(app) {
	},

	loadProduct: function(id, mealname, mealview){
		this.getTitleBar().setTitle(mealname);
		overviewDataMeal = Ext.create('Ext.data.Store', {
			model: 'fr.ESIR.GreenVentory.model.MealModel',
			autoLoad: true,
			proxy: {
				type: 'jsonp',
				limitParam: null,
				url: "http://gv.anthonylohou.com/ProductC/mealDetail/"+id,
				reader: {
					type: 'json',
					rootProperty: 'meal',
					totalProperty: 'totalCount'
				}
			}
		});
		mealview.getComponent('overviewMeal').setStore(overviewDataMeal);
	}
});
