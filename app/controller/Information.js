var pwd;
var pwd2;
Ext.define('fr.ESIR.GreenVentory.controller.Information', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			MainView : 'welcome',
			Information : 'information',
			BtnModifyPwd: 'information button[action=modifyPwd]',
			FieldChangePwd: 'information fieldset[name=fieldChangePwd]',
			BtnStopChange: 'information button[action=stopChange]',
			BtnConfirmChange: 'information button[action=confirmChange]',
			password : 'information passwordfield[name=passwordTextField]',
			password2 : 'information passwordfield[name=password2TextField]',
			PwdFailedLabel : '#pwdFailedLabel'
		},
		control: {
			'BtnBack':{
				tap:'previous'
			},
			'BtnModifyPwd':{
				tap:'changePwd'
			},
			'BtnConfirmChange':{
				tap:'confirmChangePwd'
			},
			'BtnStopChange':{
				tap:'stopChangePwd'
			},
			'password' :{
				change : 'passwordChange'
			},
			'password2' :{
				change : 'passwordChange2'
			}
		}
	},

	previous : function(){
		this.stopChangePwd();
		Ext.Viewport.setActiveItem(this.getMainView());
	},

	changePwd : function(passwordfield, newValue, oldValue, eOpts){
		this.getBtnModifyPwd().setHidden(true);
		this.getFieldChangePwd().setHidden(false);
		this.getBtnStopChange().setHidden(false);
		this.getBtnConfirmChange().setHidden(false);
		//this.getPwdFailedLabel().setHidden(true);
	},

	confirmChangePwd : function(){
		if(!this.getPwdFailedLabel().isHidden() || pwd2==null){
			Ext.Msg.alert("Erreur", "Votre nouveau mot de passe n'est pas valide.");
		}else{
			Ext.Viewport.mask({ xtype: 'loadmask', message: "Changemet de mot de passe.." });
			this.modifyPwd(localStorage.getItem("userId"),pwd2,this);
		}
	},

	stopChangePwd : function(){
		this.getPassword().setValue("");
		this.getPassword2().setValue("");
		this.getBtnModifyPwd().setHidden(false);
		this.getFieldChangePwd().setHidden(true);
		this.getBtnStopChange().setHidden(true);
		this.getBtnConfirmChange().setHidden(true);
		this.getPwdFailedLabel().setHidden(true);
	},

	passwordChange : function(passwordfield, newValue, oldValue, eOpts){
		this.getPwdFailedLabel().setHidden(true);
		if(newValue.search("[a-z]")!=-1){
			if(newValue.search("[A-Z]")!=-1){
				if(newValue.search("[0-9]")!=-1){
					if(newValue.search("[^a-zA-Z0-9]")==-1){
						this.getPwdFailedLabel().setHtml('Votre mot de passe ne contient pas de caractères spéciaux');
						this.getPwdFailedLabel().setHidden(false);
					}else{
						pwd=newValue;
					}
				}else{
					this.getPwdFailedLabel().setHtml('Votre mot de passe ne contient pas de chiffres ou/et caractères spéciaux');
					this.getPwdFailedLabel().setHidden(false);
				}
			}else{
				this.getPwdFailedLabel().setHtml('Votre mot de passe ne contient pas de majuscule ou/et chiffres ou/et caractères spéciaux');
				this.getPwdFailedLabel().setHidden(false);
			}
		}else{
			this.getPwdFailedLabel().setHtml('Votre mot de passe ne contient pas de minuscule ou/et majuscule ou/et chiffres ou/et caractères spéciaux');
			this.getPwdFailedLabel().setHidden(false);
		}
	},

	passwordChange2 : function(passwordfield, newValue, oldValue, eOpts){
		if(pwd!=newValue){
			this.getPwdFailedLabel().setHtml('Vos mots de passe sont différents.');
			this.getPwdFailedLabel().setHidden(false);
		}else{
			this.getPwdFailedLabel().setHidden(true);
			pwd2=newValue;
		}
	},

	modifyPwd: function(log,mdp,me) {
		Ext.Ajax.request({
			url: "http://gv.anthonylohou.com/UserC/changePwd",
			method: 'POST',
			params: {
				login: log,
				password: mdp
			},
			success: function(response){
				console.log(mdp);
				me.getPwdFailedLabel().setHidden(true);
				me.getPassword().setValue("");
				me.getPassword2().setValue("");
				me.getBtnModifyPwd().setHidden(false);
				me.getFieldChangePwd().setHidden(true);
				me.getBtnStopChange().setHidden(true);
				me.getBtnConfirmChange().setHidden(true);
				Ext.Viewport.unmask();
				Ext.Msg.alert("Succès", "Votre mot de passe à bien été modifié.");
			}
		});
		pwd = null;
		pwd2 = null;
		console.log(pwd+" "+pwd2);
	},

	loadInformation : function(myaccount){
		var id = localStorage.getItem("userId");
		var informationData = Ext.create('Ext.data.Store', {
			model: 'fr.ESIR.GreenVentory.model.InformationModel',
			autoLoad: true,
			proxy: {
				type: 'jsonp',
				noCache: true,
				enablePagingParams: false,
				limitParam: null,
				url: 'http://gv.anthonylohou.com/UserC/userData/'+id,
				reader: {
					type: 'json',
					rootProperty: 'data',
					totalProperty: 'totalCount'
				}
			}
		});

		myaccount.getComponent('titleInfo').getComponent('dataInfo').getComponent('overviewMAD').setStore(informationData);
	},

	//called when the Application is launched, remove if not needed
	onLaunch: function(app) {
		if (navigator.userAgent.match("Android")) {
			document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
			function onBackKeyDown(eve) {
				eve.preventDefault();
				this.previous();
			}
		}
	}
});
