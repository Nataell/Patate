var mealView;
Ext.define('fr.ESIR.GreenVentory.controller.MealList', {
	extend: 'Ext.app.Controller',
	requires :[
		'fr.ESIR.GreenVentory.view.recipe.RecipeList',
		'fr.ESIR.GreenVentory.model.MealListModel',
		'Ext.data.proxy.JsonP'
	],
	config: {
		refs: {
			mealList: 'meallist',
			main : 'welcome',
			refreshBtn: 'meallist button[action=refreshList]'
		},
		control: {
			'meallist' : {
				itemTap : 'showDetail'
			},
			'refreshBtn' : {
				tap: 'refresh'
			}
		}
	},
	refresh: function(){
		console.log('Refreshing meallist');
		this.getMealList().getStore().reload();
	},
	showDetail : function(list, index, target, record, e, eOpts){ //overwrite leafitemtap with a function that have the args. See https://docs.sencha.com/touch/2.4/guides/components/nested_list.html examples with the listener if you don't understand it
		console.log('test');
		if(mealView!=null){
			mealView.destroy();
		}
		mealView = Ext.create('fr.ESIR.GreenVentory.view.meal.MealView');
		Ext.Viewport.setActiveItem(mealView);
		this.getApplication().getController('MealView').loadProduct(record.get('id'), record.get('mealname'), mealView);
	},

//called when the Application is onLaunched, remove if not needed
onLaunch: function(app) {
	this.loadList();
},
loadList: function() {
	var listData = Ext.create('Ext.data.Store', {
		model: 'fr.ESIR.GreenVentory.model.MealListModel',
		grouper: {
			groupFn: function(record) {
				return record.get('mealname')[0];
			}
		},
		autoLoad: true,
		proxy: {
			type: 'jsonp',
			enablePagingParams: false,
			extraParams: null,
			limitParam: null,
			url: "http://gv.anthonylohou.com/ProductC/mealList",
			reader: {
				type: 'json',
				rootProperty: 'items',
				totalProperty: 'totalCount'
			}
		}
	});
	this.getMealList().setStore(listData);
}
});
