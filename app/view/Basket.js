Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.grid.Grid',
    xtype: 'basket',
	layout: 'fit',
	requires: [
		'Ext.grid.plugin.Editable',
		'Ext.grid.plugin.ColumnResizing',
		'Ext.grid.plugin.RowExpander'
	],
	plugins: [{
		type: 'grideditable'
	},{
		type: 'columnresizing'
	}, {
		type: 'rowexpander'
	}],
	columns: [
		{
			xtype: 'checkcolumn',
			text: 'selection',
			headerCheckbox: true,
			dataIndex: 'selected',
			flex: 1,
			minWidth: 50
		},
		{
			text: 'Produit',
			dataIndex: 'name',
			flex: 1,
			minWidth: 50
		},
		{
			text: 'Quantité',
			flex: 1,
			dataIndex: 'quantity',
			minWidth: 50
		},
		{
			text: '',
			flex: 1,
			cell: {
				xtype: 'widgetcell',
				widget: {
					xtype: 'button',
					iconCls: 'x-fa fa-minus-circle',
					ui: 'decline',
					handler: 'onDellTap'
				}
			},
			minWidth: 50
		}
	]
    // config:{
		// layout : {
		// 	type  : 'vbox',
		// 	align : 'stretch'
		// },
        // items: [
		// 	//TODO: add toolbar
        //     {
		// 		flex: 1,
        //         name: 'articles',
        //         xtype: 'list',
        //         id: 'bracketList',
        //         itemTpl: [
		// 			'{name}: {quantity}'
        //         ]
        //     },
        //     {
        //         xtype: 'panel',
        //         docked: 'bottom',
        //         layout: 'vbox',
        //         items: [
        //             {
        //                 name: 'supprimer',
        //                 text: 'Supprimer',
        //                 iconCls: 'x-fa fa-trash-o',
        //                 title: 'Supprimer',
        //                 xtype: 'button',
        //                 ui: 'decline'
        //             },
        //             {
        //                 name: 'commander',
        //                 text: 'Commander',
		// 				iconCls: 'x-fa fa-check',
        //                 title: 'Commander',
        //                 xtype: 'button',
        //                 ui: 'confirm'
        //             }
        //         ]
        //     }
        // ]
    // }
});
