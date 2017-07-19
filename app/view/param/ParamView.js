Ext.define('fr.ESIR.GreenVentory.view.param.ParamView', {
	extend: 'Ext.form.Panel',
	xtype: 'paramview',

	config: {
		id : 'ParamView',
		defaults:{
			margin: 5
		},
		items: [
			{
				xtype: 'button',
				ui: 'action',
				text: 'Se connecter',
				iconCls: 'x-fa fa-sign-in',
				action : 'signin'
			},
			{
				xtype: 'button',
				ui: 'action',
				text: 'Se déconnecter',
				iconCls: 'x-fa fa-sign-out',
				action: 'signup',
				hidden: true
			},
			{
				xtype: 'button',
				text: 'Mon Compte',
				iconCls: 'x-fa fa-user',
				action: 'seeaccount',
				hidden: true
			},
			{
				xtype: 'button',
				ui: 'decline',
				text: 'Un bug?',
				iconCls: 'x-fa fa-bug',
				action: 'crashreport'
			},
			{
				xtype: 'button',
				text: 'Qui sommes nous?',
				iconCls: 'x-fa fa-question',
				action: 'whoweR'
			},
			{
				xtype: 'button',
				text: 'À propos',
				iconCls: 'x-fa fa-university'
			},
			{
				xtype: 'button',
				text: 'Personnalisation',
				iconCls: 'x-fa fa-paint-brush',
				action: 'theme'
			}
		]
	}
});
