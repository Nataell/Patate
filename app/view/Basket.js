Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.grid.Grid',
    xtype: 'basket',
	items: [
		{
			xtype: 'panel',
			docked: 'bottom',
			layout: 'hbox',
			items: [
				{
					flex: 1,
					xtype: 'button',
					ui: 'decline',
					text: 'Tout vider',
					iconCls: 'x-fa fa-trash',
					name: 'delAll'
				},
				{
					flex: 1,
					xtype: 'button',
					text: 'Commander',
					iconCls: 'x-fa fa-credit-card',
					name: 'commander',
				}
			]
		}
	],
	columns: [
		{
			flex:1.5,
			text: 'Produit',
			dataIndex: 'name'
		},
		{
			flex: 0.5,
			text: 'Quantité',
			align: 'right',
			dataIndex: 'quantity'
		},
		{
			flex: 1,
			text: 'Prix',
			dataIndex: 'totalPrice',
			align: 'right',
			renderer: function(value) {
            	return Ext.util.Format.currency(value,'€',2,true,' ');
        	}
		},
		{
			flex: 0.5,
			text: '',
			align: 'right',
			cell: {
				xtype: 'widgetcell',
				widget: {
					xtype: 'button',
					iconCls: 'x-fa fa-minus-circle',
					ui: 'decline'
				}
			}
		}
	]
});
