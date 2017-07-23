var basket;
Ext.define('fr.ESIR.GreenVentory.controller.BasketC', {
    extend: 'Ext.app.Controller',
	config: {
		refs: {
			bucketList: 'basket',
			cmdBtn: 'basket button[name=commander]'
		},
		control: {
			'cmdBtn' :{
                tap: 'commander'
            }
		}
	},
	addBasketItem : function(idProduct,qty){
		var idUser = localStorage.getItem("userId");
		console.log(qty);
		if(idUser!=null){
			if(qty!=0 && qty!=null){
				Ext.Viewport.mask({ xtype: 'loadmask', message: "Ajout au panier.." });
				Ext.Ajax.request({
					url: "http://gv.anthonylohou.com/BucketC/add",
					method: 'POST',
					params : {
						id_U: idUser,
						id_P: idProduct,
						quantity: qty
					},
					success: function(response){
						Ext.Viewport.unmask();
						if(response.responseText.includes("insert")){
							Ext.Msg.alert("Succès","Article ajouté au panier");
						}
						else{
							Ext.Msg.alert("Succès","Article déjà présent. Modification de la quantité.");
						}
						basket.reload();//reload the store when it's finish, we have to do it here because of asynchrone request
					},
					failure: function() {
						Ext.Viewport.unmask();
						Ext.Msg.alert("Erreur","Verifiez votre connection internet et réessayer. Si cela est récurent, veuillez nous avertir en postant un rapport de bug.");
					}
				});
			}
			else{
				Ext.Msg.alert("Erreur","Quantité invalide");
			}
		}
		else{
			Ext.Msg.alert("Erreur","Veuillez vous connecter ou créer un compte pour commander");
		}
	},

	get : function(){
		var idUser = localStorage.getItem("userId");
		if(idUser!=null){
			console.log('getBucket');
			basket = Ext.create('Ext.data.Store', {
				model: 'fr.ESIR.GreenVentory.model.Basket',
				autoLoad: true,
				proxy: {
					type: 'jsonp',
					enablePagingParams: false,
					extraParams: null,
					limitParam: null,
					url: "http://gv.anthonylohou.com/BucketC/get/"+idUser,
					reader: {
						type: 'json',
						rootProperty: 'items'
					}
				}
			});
			basket.load({//We need to change the load function to update the little icon after the callback. Otherwise it doesn't work
				scope: basket,
				callback: function(records, operation, success) {
					Ext.getCmp('myTabBar').down('tab[title=Panier]').setBadgeText(this.getTotalCount()); //basket.getTotalCount because he is the scope
				}
			});
			this.getBucketList().setStore(basket);
		}
	},

	commander : function(){
		var id_User = localStorage.getItem("userId");
		if(id_User!=null){
			if(basket.getTotalCount()!=0){
				Ext.Viewport.mask({ xtype: 'loadmask', message: "Passage de la commande.." });
				Ext.Ajax.request({
					url: "http://gv.anthonylohou.com/BucketC/commander",
					method: 'POST',
					params : {
						id_User: id_User
					},
					success: function(response){
						Ext.Viewport.unmask();
						if(response.responseText.includes("success")){
							Ext.Msg.alert("Succès","Votre commande va être préparée");
							basket.reload();//reload the store when it's finish, we have to do it here because of asynchrone request
						}
						else if(response.responseText.includes("Error")){
							Ext.Msg.alert("Erreur","Votre commande n'a pas pu être passée");
						}
					},
					failure: function() {
						Ext.Viewport.unmask();
						Ext.Msg.alert("Erreur","Verifiez votre connection internet et réessayer. Si cela est récurent, veuillez nous avertir en postant un rapport de bug.");
					}
				});
			}
			else{
				Ext.Msg.alert("Panier vide","Vous n'avez aucun articles à commander");
			}
		}
		else{
			Ext.Msg.alert("Erreur","Veuillez vous connecter ou créer un compte pour commander");
		}
	},

	removeBasketItem : function(idProd){

	},


	disconnect : function(){
		var idUser = localStorage.getItem("userId");
		if(idUser==null){
			this.getBucketList().updateStore(null,basket);
			basket.destroy();
			//this.getBucketList().getData().();
			Ext.getCmp('myTabBar').down('.tab[title=Panier]').setBadgeText(0);
		}
	},


	onLaunch : function(app){
		this.get();
	}
});
