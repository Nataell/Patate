Ext.define('fr.ESIR.GreenVentory.view.param.Information', {
	extend: 'Ext.form.Panel',
	xtype: 'information',
	requires:[
			'fr.ESIR.GreenVentory.view.param.overviewMyAccountData'
	],
	config: {
		itemId : 'titleInfo',
		items: [
			{
				itemId : 'dataInfo',
				xtype: 'fieldset',
				//padding: 5,
				items:[
					{
						itemId : 'overviewMAD',
						xtype : 'overviewmyaccountdata'
					},
					{
						xtype: 'button',
						iconCls: 'x-fa fa-lock',
						text: 'Modifier le mot de passe',
						action: 'modifyPwd'
					},
					{
						xtype: 'fieldset',
						hidden: true,
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
						],
						name: 'fieldChangePwd'
					},
					{
						xtype: 'label',
						itemId: 'pwdFailedLabel',
						hidden: true,
						style: 'color:#990000;text-align: center;'
					},
					{
						xtype: 'panel',
						layout: 'hbox',
						items: [
							{
								xtype: 'button',
								ui: 'confirm',
								text: 'Confirmer',
								iconCls: 'x-fa fa-check',
								action: 'confirmChange',
								hidden: true,
								flex: 1
							},
							{
								xtype: 'button',
								ui: 'decline',
								text: 'Annuler',
								iconCls: 'x-fa fa-ban',
								action: 'stopChange',
								hidden: true,
								flex: 1
							}
						]
					}
				]
			}
		]
	}
});
