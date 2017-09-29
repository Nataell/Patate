var basket;
var productRecord;
Ext.define('fr.ESIR.GreenVentory.controller.BasketC', {
    extend: 'Ext.app.Controller',
	config: {
		refs: {
			bucketList: 'basket',
			cmdBtn: 'basket button[name=commander]',
			delAllBtn: 'basket button[name=delAll]',
			delSelectItem: 'basket button[action=deleteSingle]',
			modifyQT: 'basket button[action=submit]'//defaut value for button on plugin
		},
		control: {
			'cmdBtn' :{
                tap: 'commander'
            },
			'delAllBtn' :{
				tap: 'cleanCommandConfirm'
			},
			'delSelectItem' :{
				tap: 'askForDelete'
			},
			'modifyQT' :{
				tap: 'modifyProductQT'
			}
		}
	},
	modifyProductQT: function(btn){
		console.log("lololol");
		var editor = btn.getParent();
		console.log(editor);
		console.log(editor.getRecord().data.name);
	},
	cleanCommandConfirm: function(){
		var _self = this;
		Ext.Msg.confirm("Confirmation", "Voulez vous vider tout votre panier?", function(buttonId, value, opt){
			if(buttonId=='yes'){
				_self.cleanCommand();
			}
		});
	},
	askForDelete: function(btn,e,eOpts){
		var cell = btn.getParent();
		var _self = this;
		productRecord = cell.getRecord();
		Ext.Msg.confirm("Confirmation", "Retirer l'article \""+productRecord.data.name+"\" du panier?", function(buttonId, value, opt){
			if(buttonId=='yes'){
				_self.cleanCommand();
			}
			else{
				productRecord = null;
			}
		});
		// this.getClosePopUpBtn().setText(record.data.name);
		// this.getEditionPopUp().show();
		// productRecord = record;
	},
	addBasketItem : function(idProduct,qty){
		var idUser = localStorage.getItem("userId");
		var success = true;
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
							Ext.toast({
								timeout: 1500,
								message: 'Article ajouté au panier',
								title: 'Succès'
							});
						}
						else{
							Ext.toast({
								timeout: 1500,
								message: 'Article déjà présent. Modification de la quantité.',
								title: 'Succès'
							});
						}
						basket.reload();//reload the store when it's finish, we have to do it here because of asynchrone request
					},
					failure: function() {
						Ext.Viewport.unmask();;
						Ext.toast({
							timeout: 1500,
							message: 'Verifiez votre connection internet et réessayer. Si cela est récurent, veuillez nous avertir en postant un rapport de bug.',
							title: 'Erreur'
						});
						success = false;
					}
				});
			}
			else{
				Ext.toast({
					timeout: 1500,
					message: 'Quantité invalide',
					title: 'Erreur'
				});
				success = false;
			}
		}
		else{
			Ext.toast({
				timeout: 1500,
				message: 'Veuillez vous connecter ou créer un compte pour commander',
				title: 'Erreur'
			});
			success = false;
		}
		return success;
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
							Ext.toast({
								timeout: 1500,
								message: 'Votre commande va être préparée',
								title: 'Succès'
							});
							basket.reload();//reload the store when it's finish, we have to do it here because of asynchrone request
						}
						else if(response.responseText.includes("Error")){
							Ext.toast({
								timeout: 1500,
								message: 'Votre commande n\'a pas pu être passée',
								title: 'Erreur'
							});
						}
					},
					failure: function() {
						Ext.Viewport.unmask();
						Ext.toast({
							timeout: 1500,
							message: 'Verifiez votre connexion internet et réessayer. Si cela est récurent, veuillez nous avertir en postant un rapport de bug.',
							title: 'Erreur'
						});
					}
				});
			}
			else{
				Ext.toast({
					timeout: 1500,
					message: 'Vous n\'avez aucun articles à commander',
					title: 'Panier vide'
				});
			}
		}
		else{
			Ext.toast({
				timeout: 1500,
				message: 'Veuillez vous connecter ou créer un compte pour commander',
				title: 'Erreur'
			});
		}
	},

	cleanCommand : function(){
		var id_User = localStorage.getItem("userId");
		var messageAction = "Suppression de la commande..";
		var messageConfirmation = 'Suppression de votre commande, votre panier est vide!';
		var productId = 'all';
		var messageErreur = 'Impossible de vider votre panier, veuillez réessayer. Si le problème est récurrent envoyez nous un rapport de bug.';
		if(productRecord!=null){
			messageAction = "Suppression de "+productRecord.data.name;
			productId = productRecord.data.id_product;
			messageConfirmation = productRecord.data.name+' bien retiré de votre panier';
			messageErreur = 'Impossible de retirer '+productRecord.data.name+', veuillez réessayer. Si le problème est récurrent envoyez nous un rapport de bug.'
		}
		if(id_User!=null){
			if(basket.getTotalCount()!=0){
				Ext.Viewport.mask({ xtype: 'loadmask', message: messageAction});
				Ext.Ajax.request({
					url: "http://gv.anthonylohou.com/BucketC/delete",
					method: 'POST',
					params : {
						id_User: id_User,
						id_Product: productId
					},
					success: function(response){
						Ext.Viewport.unmask();
						if(response.responseText.includes("success")){
							Ext.toast({
								timeout: 1500,
								message: messageConfirmation,
								title: 'Succès'
							});
							basket.reload();//reload the store when it's finish, we have to do it here because of asynchrone request
						}
						else if(response.responseText.includes("Error")){
							Ext.toast({
								timeout: 1500,
								message: messageErreur,
								title: 'Erreur'
							});
						}
					},
					failure: function() {
						Ext.Viewport.unmask();
						Ext.toast({
							timeout: 1500,
							message: 'Verifiez votre connexion internet et réessayer. Si cela est récurent, veuillez nous avertir en postant un rapport de bug.',
							title: 'Erreur'
						});
					}
				});
			}
			else{
				Ext.toast({
					timeout: 1500,
					message: 'Votre panier est déjà vide',
					title: 'Panier vide'
				});
			}
		}
		else{
			Ext.toast({
				timeout: 1500,
				message: 'Vous n\'êtes pas connecté, aucun panier à vider',
				title: 'Erreur'
			});
		}
		if(productRecord!=null){
			productRecord = null;
		}
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
