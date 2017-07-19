Ext.define('fr.ESIR.GreenVentory.view.param.SigninView', {
	extend: 'Ext.form.Panel',
	xtype: 'signinview',

	config: {
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Se connecter',
				items: [
					{
						xtype: 'button',
						action: 'cancelButton',
						align: 'left',
						iconCls: 'x-fa fa-arrow-left'
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Authentification :',
				items: [
					{
						xtype: 'textfield',
						placeHolder: 'Nom d\'utilisateur',
						name: 'userNameTextField',
						value:""
					},
					{
						xtype: 'passwordfield',
						placeHolder: 'Mot de passe',
						revealable : true,
						name: 'passwordTextField',
						value:""
					}
				]
			},
			{
				xtype: 'button',
				action: 'logInButton',
				ui: 'confirm',
				text: 'Connexion',
				iconCls: 'x-fa fa-check'
			},
			{
				xtype: 'button',
				action: 'accountButton',
				text: 'Créer un compte',
				iconCls: 'x-fa fa-user-plus'
			}
		]
	}
});
