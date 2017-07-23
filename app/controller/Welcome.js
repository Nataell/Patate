var nbArt;
var basketStore;
var green = true;
Ext.define('fr.ESIR.GreenVentory.controller.Welcome', {
    extend: 'Ext.app.Controller',
    requires: [
		'fr.ESIR.GreenVentory.view.Welcome',
        'fr.ESIR.GreenVentory.model.Basket'
	],
    config: {
		refs: {
			welcomeTabBar: 'welcome',
			paramTab: 'welcome paramview[name=reglages]',
			panierTab: 'welcome basket[name=panier]'
		},
		control: {
			'welcomeTabBar' :{
				activeItemChange: 'moveTab'
			}
		}
    },

	moveTab : function(sender, value, oldValue, eOpts){
		//colored navbar depending on tab
		if (navigator.userAgent.match("Android")) {
			if(value==this.getParamTab() || value==this.getPanierTab()){

			}
			else{

			}
		}

	},

	changeStatusBarColor : function(colorString){
		if(colorString=='green'){
			if(!green){
				StatusBar.backgroundColorByHexString('#4CAF50');
				green = true;
			}
		}
		else{
			//if dark mode, green==black
			if(green){
				StatusBar.backgroundColorByHexString('#BDBDBD');
				green = false;
			}
		}
	},

	// addBasketItem : function(nameP,quantityP){
    //     var bList = Ext.getCmp('bracketList');
    /*Ext.toast({
			timeout: 1500,
			message: 'Article ajouté au panier',
			title: 'Confirmation'
		});*/
	//
	// 	var apptabbar = Ext.getCmp('myTabBar');
	// 	var tab = apptabbar.down('.tab[title=Panier]');
    //     nbArt++;
	//
    //     basketStore.add({name: nameP, quantity: quantityP});
    //     basketStore.sync();
	//
    //     bList.setHeight((bList.getStore().getCount()+1)*bList.getItemHeight());
	// 	tab.setBadgeText(nbArt);
	// },
    // removeBasketItem : function() {
    //     var bList = Ext.getCmp('bracketList');
    /*Ext.toast({
			timeout: 1500,
			message: 'Article supprimé du panier',
			title: 'Confirmation'
		});*/
	//
    //     var apptabbar = Ext.getCmp('myTabBar');
    //     var tab = apptabbar.down('.tab[title=Panier]');
    //     nbArt = nbArt > 1 ? nbArt-- : nbArt = 0;
	//
    //     bList.setHeight((bList.getStore().getCount()+1)*bList.getItemHeight());
	//
    //     tab.setBadgeText(nbArt);
    // },

	displayCat : function(){
		Ext.Viewport.toggleMenu('left');
	},

    //called when the Application is onLaunched, remove if not needed
    onLaunch: function(app) {
        //onLaunch
		// var idUser = localStorage.getItem("userId");
        // basketStore = Ext.create('Ext.data.Store',{
        //     autoLoad: true,
        //     model: 'fr.ESIR.GreenVentory.model.Basket',
		//
        // });
        // var bList = Ext.getCmp('bracketList');
        // nbArt = basketStore.getCount();
        // Ext.getCmp('myTabBar').down('.tab[title=Panier]').setBadgeText(nbArt);
		//
        // bList.setStore(basketStore);
        // bList.setHeight((bList.getStore().getCount()+1)*bList.getItemHeight());
    }
});
