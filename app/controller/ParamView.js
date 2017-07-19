var createMyAccount=false;
Ext.define('fr.ESIR.GreenVentory.controller.ParamView', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			ParamView : 'paramview',
			MyAccount : 'myaccount',

			btnSignin : 'paramview button[action=signin]',
			btnSignup : 'paramview button[action=signup]',
			btnSeeAccount : 'paramview button[action=seeaccount]',
			btnCrashReport : '#crashreport',
			btnWhoweR : 'paramview button[action=whoweR]',
			btnTheme: 'paramview button[action=theme]'
		},
		control: {

			'btnSignin' : {
				tap : 'connexion'
			},
			'btnSignup' : {
				tap : 'deconnexion'
			},
			'btnSeeAccount' : {
				tap : 'seeAccount'
			},
			'btnWhoweR' : {
				tap : 'seeWhoweR'
			},
			'btnTheme' : {
				tap : 'goToPersonnalizeView'
			}
		}
	},

	connexion : function(){
		Ext.Viewport.setActiveItem(Ext.create('fr.ESIR.GreenVentory.view.param.SigninView'));
	},

	deconnexion : function(){
		localStorage.clear();
		this.getBtnSignin().setHidden(false);
		this.getBtnSignup().setHidden(true);
		this.getBtnSeeAccount().setHidden(true);
		//////////DECONNEXION/////////
		//On vide le panier
		this.getApplication().getController('BasketC').disconnect();
	},

	goToPersonnalizeView : function(){
		Ext.Viewport.setActiveItem(Ext.create('fr.ESIR.GreenVentory.view.param.ThemeV'));
	},

	seeAccount : function(){
		if(!createMyAccount){
			var account = Ext.create('fr.ESIR.GreenVentory.view.param.MyAccount');
			Ext.Viewport.setActiveItem(account);
			this.getApplication().getController('Information').loadInformation(account);
			createMyAccount=true;
		}else{
			Ext.Viewport.setActiveItem(this.getMyAccount());
			this.getApplication().getController('Information').loadInformation(this.getMyAccount());
		}
	},

	seeWhoweR : function(){
		Ext.Viewport.setActiveItem(Ext.create('fr.ESIR.GreenVentory.view.param.WhowerView'));
	},

	//called when the Application is onLaunched, remove if not needed
	onLaunch: function(app) {
		if(localStorage.getItem("userId")){
			this.getBtnSignin().setHidden(true);
			this.getBtnSignup().setHidden(false);
			this.getBtnSeeAccount().setHidden(false);
		}
	}
});
