Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.grid.Grid',
    xtype: 'basket',
		columns: [
			{
				flex: 1,
				text: 'Produit',
				dataIndex: 'name',
			},{
				flex: 1,
				text: 'Quantité',
				dataIndex: 'quantity',
			},{
				flex: 1,
				text: '',
				cell: {
					xtype: 'widgetcell',
					widget: {
						xtype: 'button',
						iconCls: 'x-fa fa-minus-circle',
						ui: 'decline',
						// handler: 'onDellTap'
					}
				},
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
