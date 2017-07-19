Ext.define('fr.ESIR.GreenVentory.view.param.CreateAccountView', {
	extend: 'Ext.form.Panel',
	xtype: 'createaccountview',

	config: {
		items:[
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Créer un compte',
				items: [
					{
						xtype: 'button',
						action: 'previousButton',
						align: 'left',
						iconCls: 'x-fa fa-arrow-left'
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Nom d\'utilisateur :',
				items: [
					{
						xtype: 'textfield',
						placeHolder: 'ex : JeanDurand',
						name: 'userNameTextField',
						value:""
					}
				]
			},
			{
				xtype: 'label',
				itemId: 'usernameFailedLabel',
				hidden: true,
				style: 'color:#990000;text-align: center;'
			},
			{
				xtype: 'fieldset',
				title: 'Mot de passe :',
				items: [
					{
						xtype: 'passwordfield',
						placeHolder: 'ex : Mdp857!',
						revealable : true,
						clearIcon : false,
						name: 'passwordTextField',
						value:""
					},
					{
						xtype: 'passwordfield',
						placeHolder: 'confirmation mot de passe',
						revealable : true,
						clearIcon : false,
						name: 'password2TextField',
						value:""
					}
				]
			},
			{
				xtype: 'label',
				itemId: 'pwdFailedLabel',
				hidden: true,
				style: 'color:#990000;text-align: center;'
			},
			{
				xtype: 'fieldset',
				title: 'Nom :',
				items: [
					{
						xtype: 'textfield',
						placeHolder: 'ex : Jean Durand',
						name: 'nameTextField',
						value:""
					}
				]
			},
			{
				xtype: 'label',
				itemId: 'nameFailedLabel',
				hidden: true,
				style: 'color:#990000;text-align: center;'
			},
			{
				xtype: 'fieldset',
				title: 'Adresse mail :',
				items: [
					{
						xtype: 'textfield',
						placeHolder: 'ex : JeanDurand@mail.com',
						name: 'mailTextField',
						value:""
					}
				]
			},
			{
				xtype: 'label',
				itemId: 'mailFailedLabel',
				hidden: true,
				style: 'color:#990000;text-align: center;'
			},
			{
				xtype: 'button',
				action: 'createAccountButton',
				ui: 'confirm',
				iconCls: 'x-fa fa-check',
				text: 'Créer votre compte'
			}
		]
	}
});
