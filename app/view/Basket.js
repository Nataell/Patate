Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.grid.Grid',
    xtype: 'basket',
	requires: [
		'Ext.grid.plugin.Editable'
	],
	plugins: {
		type: 'grideditable',
		enableDeleteButton: false,
		formConfig: {
			items: [{
				xtype: 'textfield',
				name: 'quantityMDF',
				label: 'Nouvelle quantité'
			}]
		}
	},
	columns: [
		{
			flex:1.5,
			text: 'Produit',
			dataIndex: 'name'
		},
		{
			flex: 0.5,
			align: 'right',
			editable: true,
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
 			align: 'center',
			text: '',
 			cell: {
 				xtype: 'widgetcell',
 				widget: {
 					xtype: 'button',
 					iconCls: 'x-fa fa-minus-circle',
 					ui: 'decline',
					action: 'deleteSingle'
 				}
 			}
 		}
	]
});
