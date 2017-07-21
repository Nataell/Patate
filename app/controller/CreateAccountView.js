var user;
var pwd;
var pwd2;
var name;
var mail;
Ext.define('fr.ESIR.GreenVentory.controller.CreateAccountView', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			SigninView : 'signinview',
			previousButton : 'createaccountview button[action=previousButton]',
			username : 'createaccountview textfield[name=userNameTextField]',
			password : 'createaccountview passwordfield[name=passwordTextField]',
			password2 : 'createaccountview passwordfield[name=password2TextField]',
			name : 'createaccountview textfield[name=nameTextField]',
			mail : 'createaccountview textfield[name=mailTextField]',
			UsernameFailedLabel : '#usernameFailedLabel',
			PwdFailedLabel : '#pwdFailedLabel',
			NameFailedLabel : '#nameFailedLabel',
			MailFailedLabel : '#mailFailedLabel',
			createAccountButton : 'createaccountview button[action=createAccountButton]'
		},
		control: {
			'previousButton':{
				tap : 'previous'
			},
			'username' :{
				change : 'userNameChange'
			},
			'password' :{
				change : 'passwordChange'
			},
			'password2' :{
				change : 'passwordChange2'
			},
			'name' :{
				change : 'nameChange'
			},
			'mail' :{
				change : 'mailChange'
			},
			'createAccountButton' :{
				tap : 'create'
			}
		}
	},

	previous : function(){
		Ext.Viewport.setActiveItem(this.getSigninView());
	},

	create : function(){
		if(!this.getUsernameFailedLabel().isHidden() || !this.getPwdFailedLabel().isHidden() || !this.getNameFailedLabel().isHidden() || !this.getMailFailedLabel().isHidden() || user==null || pwd2==null || name==null || mail==null){
			Ext.toast({
				timeout: 1500,
				message: 'Vos données ne sont pas valides.',
				title: 'Erreur'
			});
		}else{
			Ext.Viewport.mask({ xtype: 'loadmask', message: "Vérification de votre mail.." });
			this.mailVerif(user,pwd,mail,name,mail,this);
			/*Ext.Viewport.mask({ xtype: 'loadmask', message: "Création de votre compte.." });
			this.addUser(user,pwd,mail,name,this);*/
		}
	},

	addUser : function(user,pwd,mail,name,me){
		Ext.Ajax.request({
			url: "http://gv.anthonylohou.com/UserC/insert",
			method: 'POST',
			params: {
				login: user,
				password: pwd,
				email: mail,
				nameuser: name
			},
			success: function(response){
				console.log(response.responseText);
				//if(response['responseText'].includes("success")){
					user=null;
					pwd=null;
					pwd2=null;
					name=null;
					mail=null;
					me.getUsernameFailedLabel().setHidden(true);
					me.getPwdFailedLabel().setHidden(true);
					me.getNameFailedLabel().setHidden(true);
					me.getMailFailedLabel().setHidden(true);
					me.getUsername().setValue("");
					me.getPassword().setValue("");
					me.getPassword2().setValue("");
					me.getName().setValue("");
					me.getMail().setValue("");
					Ext.Viewport.unmask();
					Ext.Viewport.setActiveItem(me.getSigninView());
					Ext.toast({
						timeout: 1500,
						message: 'Votre compte a bien été créé.',
						title: 'Succès'
					});

				/*}else{
					Ext.Viewport.unmask();
					Ext.toast({
						timeout: 1500,
						message: 'Tête de mort.',
						title: 'Erreur'
					});
				}*/
			}
		});
	},

	userNameChange : function(textfield, newValue, oldValue, eOpts){
		this.getUsernameFailedLabel().setHidden(true);
		if(newValue.length>20){
			this.getUsernameFailedLabel().setHtml('Votre nom d\'utilisateur est trop long.');
			this.getUsernameFailedLabel().setHidden(false);
		}else if(newValue.search(" ")!=-1){
			this.getUsernameFailedLabel().setHtml('Votre nom d\'utilisateur contient des espaces.');
			this.getUsernameFailedLabel().setHidden(false);
		}else{
			user=newValue;
		}
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
			this.getPwdFailedLabel().setHtml('Vos mots de passe sont incorrects.');
			this.getPwdFailedLabel().setHidden(false);
		}else{
			this.getPwdFailedLabel().setHidden(true);
			pwd2=newValue;
		}
	},

	nameChange : function(textfield, newValue, oldValue, eOpts){
		this.getNameFailedLabel().setHidden(true);
		if(newValue.length>20){
			this.getNameFailedLabel().setHtml('Votre nom est trop long.');
			this.getNameFailedLabel().setHidden(false);
		}else{
			name=newValue;
		}
	},

	mailChange : function(textfield, newValue, oldValue, eOpts){
		this.getMailFailedLabel().setHidden(true);
		if(newValue.search("@")==-1){
			this.getMailFailedLabel().setHtml('Votre mail est incorrect.');
			this.getMailFailedLabel().setHidden(false);
		}else{
			mail=newValue;
		}
	},

	mailVerif : function(user,pwd,mail,name,m,me){
		Ext.Ajax.request({
			url: "http://gv.anthonylohou.com/UserC/verifMail",
			method: 'POST',
			params: {
				mail : m
			},
			success: function(response){
				if(response.responseText.includes("success")){
					me.getMailFailedLabel().setHtml('Votre mail appartient déjà à un compte utilisateur.');
					me.getMailFailedLabel().setHidden(false);
					Ext.Viewport.unmask();
				}else{
					Ext.Viewport.unmask();
					Ext.Viewport.mask({ xtype: 'loadmask', message: "Création de votre compte.." });
					me.addUser(user,pwd,mail,name,me);
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
				this.previous();
			}
		}
	}
});
