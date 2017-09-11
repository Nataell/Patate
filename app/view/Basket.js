Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.grid.Grid',
    xtype: 'basket',
	items: [{
		xtype: 'button',
		text: 'Commander',
		iconCls: 'x-fa fa-credit-card',
		handler: 'exportTo',
		docked: 'bottom'
	}],
	columns: [
		{
			flex: 2,
			text: 'Produit',
			dataIndex: 'name'
		},
		{
			flex: 1,
			text: 'Quantité',
			align: 'right',
			dataIndex: 'quantity'
		},
		{
			flex: 1,
			text: 'Prix',
			dataIndex: 'totalPrice',
			renderer: Ext.util.Format.currency(0,'€',2,true,true)
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
