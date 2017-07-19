var fruitVegeView;
Ext.define('fr.ESIR.GreenVentory.controller.FruitVegetableList', {
	extend: 'Ext.app.Controller',
	requires :[
		'fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableList',
		'fr.ESIR.GreenVentory.model.FoodListModel'
	],
	config: {
		refs: {
			fruitVegetableList: 'fruitvegetablelist',
			main : 'welcome',
			refreshBtn: 'fruitvegetablelist button[action=refreshList]'
		},
		control: {
			'fruitvegetablelist' : {
				itemTap : 'showDetail'
			},
			'refreshBtn': {
				tap: 'refreshList'
			}
		}
	},
	refreshList: function(){
		console.log('Refreshing products');
		this.getFruitVegetableList().getStore().reload();
	},
	showDetail : function(list, index, target, record, e, eOpts){
		//overwrite leafitemtap with a function that have the args.
		//See https://docs.sencha.com/touch/2.4/guides/components/nested_list.html examples with
		//the listener if you don't understand it

		if(fruitVegeView!=null){
			fruitVegeView.destroy();
		}
		fruitVegeView = Ext.create('fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableView');
		Ext.Viewport.setActiveItem(fruitVegeView);
		this.getApplication().getController('FruitVegetableView').loadProduct(record.get('id'),record.get('foodname'),fruitVegeView);

	},

	//called when the Application is onLaunched, remove if not needed
	onLaunch: function(app) {
		this.loadList();
	},
	loadList: function() {
		var listData = Ext.create('Ext.data.Store', {
			model: 'fr.ESIR.GreenVentory.model.FoodListModel',
			grouper: {
				groupFn: function(record) {
					return record.get('foodname')[0];
				}
			},
			autoLoad: true,
			proxy: {
				type: 'jsonp',
				enablePagingParams: false,
				extraParams: null,
				limitParam: null,
				url: "http://gv.anthonylohou.com/ProductC/foodList",
				reader: {
					type: 'json',
					rootProperty: 'items',
					totalProperty: 'totalCount'
				}
			}
		});
		this.getFruitVegetableList().setStore(listData);
	}
});
