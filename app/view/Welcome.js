Ext.define('fr.ESIR.GreenVentory.view.Welcome', {
	extend: 'Ext.TabPanel',
	xtype: 'welcome',

	config: {
		tabBar : {
			id : 'myTabBar',
			docked : 'bottom'
		},
		items : [
			{
				iconCls : 'x-fa fa-book',
				title : 'Recettes',
				xtype : 'listrecipeview'
			},
			{
				iconCls: 'x-fa fa-lemon-o',
				title : 'Produits',
				xtype : 'fruitvegetablelist'
			},
			{
				title : 'Repas',
				iconCls: 'x-fa fa-cutlery',
				xtype: 'meallist'
			},
			{
				title : 'Réglages',
				name: 'reglages',
				iconCls: 'x-fa fa-gear',
				xtype: 'paramview'
			},
			{
				id: 'panier',
				name: 'panier',
				title: 'Panier',
				iconCls: 'x-fa fa-shopping-cart',
				xtype: 'basket'
			}
		]
	}
});
