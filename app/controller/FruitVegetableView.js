var overviewData;
var quantity;
var date;
Ext.define('fr.ESIR.GreenVentory.controller.FruitVegetableView', {
    extend: 'Ext.app.Controller',
    requires :[
        'fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableList',
        'fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableView',
        'fr.ESIR.GreenVentory.model.ProductModel'
    ],
    config: {
        refs: {
            FruitVegetableView: 'fruitvegetableview',
            CommandProd: 'commandprod',
            btnBackToFruitVegetableView: 'commandprod button[action=cancel]',
            btnCommand: 'fruitvegetableview button[action=goToCommandView]',
            btnAddToBasket: 'commandprod button[action=addTobasket]',
            dateOfCommand: 'commandprod datepickerfield[name=dateCommand]',
            quantityCommanded: 'commandprod  numberfield[name=productquantity]',
			mainView: 'welcome',
			backbutton: 'fruitvegetableview button[action=back]',
			titleBar: 'fruitvegetableview titlebar[name=fruitVegetableTB]'
        },
        control: {
            'btnBackToFruitVegetableView' : {
                tap: 'onBtnBackToFruitVegetableView'
            },
            'btnCommand' : {
                tap: 'onBtnCommandTap'
            },
            'btnAddToBasket' : {
                tap: 'onBtnAddToBasketTap'
            },
            'quantityCommanded' : {
                change: 'quantityChange'
            },
			'backbutton' : {
				tap: 'backToMainView'
			}
        }
    },
	backToMainView : function(){
		Ext.Viewport.setActiveItem(this.getMainView());
	},
    //A chaque changement de la quantité, on mémorise
    quantityChange : function(numberfield, newValue, oldValue, eOpts){
        quantity = newValue;
        console.log(quantity);
    },
    //Fonction appelée lors d'un appuis sur le boutons pour commander le produit
    onBtnAddToBasketTap :  function(){
        var foodID = overviewData.first().get('foodid');
        this.getApplication().getController('BasketC').addBasketItem(foodID, quantity);
		console.log("addProd");
    },
    onBtnCommandTap: function(){
        this.getFruitVegetableView().next();
    },

    onBtnBackToFruitVegetableView : function(){
        this.getFruitVegetableView().previous();
        console.log("setActiveItem 0");
    },

    loadProduct: function(id,foodname,fruitvegetableview){
		this.getTitleBar().setTitle(foodname);
        overviewData = Ext.create('Ext.data.Store', {
            model: 'fr.ESIR.GreenVentory.model.ProductModel',
            autoLoad: true,
			proxy: {
				type: 'jsonp',
				limitParam: null,
				url: "http://gv.anthonylohou.com/ProductC/foodDetail/"+id,
				reader: {
					type: 'json',
					rootProperty: 'food',
					totalProperty: 'totalCount'
				}
			}
        });
        fruitvegetableview.getComponent('overviewFruitVege').setStore(overviewData);
    }
});
