Ext.define('fr.ESIR.GreenVentory.view.param.MyAccount', {
	extend: 'Ext.TabPanel',
	xtype: 'myaccount',

	config: {
		// titlebar : {
		// 	docked: 'top',
		// 	title: 'Mon compte',
		// 	items: [
		// 		{
		// 			xtype: 'button',
		// 			action: 'back',
		// 			align: 'left',
		// 			iconCls: 'x-fa fa-arrow-left'
		// 		}
		// 	]
		// },
		fullscreen: true,
		tabBarPosition: 'bottom',
		items:[
			{
				xtype: 'titlebar',
				name: 'myAccountTB',
				docked: 'top',
				title: 'Mon compte',
				items: [
					{
						xtype: 'button',
						action: 'back',
						align: 'left',
						iconCls: 'x-fa fa-arrow-left'
					}
				]
			},
			{
				iconCls : 'x-fa fa-info',
				title : 'Infos',
				xtype: 'information'
			},
			{
				iconCls : 'x-fa fa-cubes',
				title : 'Commandes',
				xtype: 'mycommands'
			},
			{
				iconCls: 'x-fa fa-book',
				title: 'Recettes',
				xtype: 'panel'
			},
			{
				iconCls : 'x-fa fa-history',
				title : 'Historique',
				xtype: 'story'
			}
		]
	}
});
