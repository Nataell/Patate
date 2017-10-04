Ext.define('fr.ESIR.GreenVentory.view.Basket',{
	extend: 'Ext.grid.Grid',
	xtype: 'basket',
	requires: [
		'Ext.grid.plugin.Editable'
	],
	// plugins: {
	// 	type: 'grideditable',
	// 	/* Work for mobile but not on pc
	// 	triggerEvent: 'longpress',
	// 	*/
	// 	enableDeleteButton: false,
	// 	name: 'pluginEditor',
	// 	id: 'editBasketQT',
	//
	// 	formConfig: {
	// 		items: [{
	// 			xtype: 'numberfield',
	// 			name: 'quantity',
	// 			label: 'Nouvelle quantité'
	// 		}]
	// 	},
	// 	defaultFormConfig: null
	// },
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
			name: 'editQTBox',
			message: 'Quelle est votre nouvelle quantité?',
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
							xtype: 'numberfield',
							name: 'newQuantity',
							label: 'Nouvelle quantité:'
						},
						{
							xtype: 'button',
							ui: 'valid',
							text: 'Modifier',
							action: 'modifyQT',
							iconCls: 'x-fa fa-pencil'
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
			dataIndex: 'quantity',
			renderer: function(value) {
				return 'x '+value;
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
					iconCls: 'x-fa fa-pencil',
					ui: 'valid',
					action: 'modifyQTProduct'
				}
			}
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
