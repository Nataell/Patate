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
					text: 'Vider',
					iconCls: 'x-fa fa-trash',
					name: 'delAll'
				},
				{
					flex: 2,
					xtype: 'button',
					text: 'Commander',
					iconCls: 'x-fa fa-credit-card',
					name: 'commander',
				}
			]
		},
		{
			xtype: 'messagebox',
			name: 'editionMsgBox',
			message: 'Que souhaitez vous faire?',
			items: [
				{
					xtype: 'button',
					docked: 'top',
					ui: 'decline',
					text: '',
					action: 'closeMsgBox',
					iconCls: 'x-fa fa-times',
					iconAlign: 'right'
				},
				{
					xtype: 'panel',
					docked: 'bottom',
					layout: 'vbox',
					items: [
						{
							xtype: 'button',
							ui: 'action',
							text: 'Quantité',
							action: 'modifQT',
							iconCls: 'x-fa fa-pencil'
						},
						{
							xtype: 'button',
							ui: 'decline',
							text: 'Retirer',
							action: 'deleteItem',
							iconCls: 'x-fa fa-trash'
						}
					]
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
		}
	]
});
