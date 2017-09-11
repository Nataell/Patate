Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.grid.Grid',
    xtype: 'basket',
	columns: [
		{
			flex: 1,
			text: 'Produit',
			dataIndex: 'name'
		},
		{
			flex: 1,
			text: 'Quantité',
			dataIndex: 'quantity'
		},
		{
			flex: 1,
			text: '',
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
