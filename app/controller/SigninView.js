var user;
var pwd;
var createAccount=false;
Ext.define('fr.ESIR.GreenVentory.controller.SigninView', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			MainView : 'welcome',
			CreateAccountView : 'createaccountview',
			btnSignin : 'paramview button[action=signin]',
			btnSignup : 'paramview button[action=signup]',
			btnSeeAccount : 'paramview button[action=seeaccount]',
			logInButton : 'signinview button[action=logInButton]',
			cancelButton : 'signinview button[action=cancelButton]',
			accountButton : 'signinview button[action=accountButton]',
			userName : 'signinview textfield[name=userNameTextField]',
			password : 'signinview passwordfield[name=passwordTextField]'
		},
		control: {
			'logInButton' :{
				tap : 'connexion'
			},
			'cancelButton' :{
				tap : 'cancel'
			},
			'accountButton':{
				tap : 'createAccount'
			},
			'userName' :{
				change : 'userNameChange'
			},
			'password' :{
				change : 'passwordChange'
			}
		}
	},

	userNameChange : function(textfield, newValue, oldValue, eOpts){
		user = newValue;
	},

	passwordChange : function(passwordfield, newValue, oldValue, eOpts){
		pwd = newValue;
	},

	connexion: function(){
		if(user!=null && pwd!=null){
			Ext.Viewport.mask({ xtype: 'loadmask', message: "Connexion en cours.." });
			this.coUser(user,pwd,this);
		}else{
			Ext.toast({
				timeout: 1500,
				message: 'Vous devez rentrer un nom d\'utilisateur et mot de passe valide.',
				title: 'Erreur'
			});
		}
		user=null;
		pwd=null;
	},

	cancel: function(){
		Ext.Viewport.setActiveItem(this.getMainView());
	},

	createAccount: function(){
		/*j'ai fait ce système parce que lorsque l'on quittait la création de compte
		et que l'on retournait dessus la gestion des erreurs ne fonctionnait plus
		comme si en créer une de nouveau corrompait les id
		du coup création de la vue et réututilisation de celle ci pour les nouveaux appels*/
		if(!createAccount){
			Ext.Viewport.setActiveItem(Ext.create('fr.ESIR.GreenVentory.view.param.CreateAccountView'));
			createAccount=true;
		}else{
			Ext.Viewport.setActiveItem(this.getCreateAccountView());
		}
	},

	coUser: function(log,mdp,me) {
		var basketC = this.getApplication().getController('BasketC');
		Ext.Ajax.request({
			url: "http://gv.anthonylohou.com/UserC/connect",
			method: 'POST',
			params: {
				login: log,
				password: mdp
			},
			success: function(response){
				if(response['responseText']!=""){
					localStorage.setItem("userId",response['responseText']);
					Ext.Viewport.unmask();
					Ext.Viewport.setActiveItem(me.getMainView());
					me.getBtnSignup().setHidden(false);
					me.getBtnSignin().setHidden(true);
					me.getBtnSeeAccount().setHidden(false);
					Ext.toast({
						timeout: 1500,
						message: 'Vous êtes bien connecté.',
						title: 'Succès'
					});
					basketC.get();
				}else{
					Ext.Viewport.unmask();
					Ext.toast({
						timeout: 1500,
						message: 'Nom d\'utilisateur ou mot de passe inconnu.',
						title: 'Erreur'
					});
				}
			}
		});
	},

	//called when the Application is onLaunched, remove if not needed
	onLaunch: function(app) {
		if (navigator.userAgent.match("Android")) {
			document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
			function onBackKeyDown(eve) {
				eve.preventDefault();
				this.cancel();
			}
		}
	}
});
