Ext.define('fr.ESIR.GreenVentory.view.Basket',{
    extend: 'Ext.form.Panel',
    xtype: 'basket',

    config:{
		layout : {
			type  : 'vbox',
			align : 'stretch'
		},
        items: [
			//TODO: add toolbar
            {
				flex: 1,
                name: 'articles',
                xtype: 'list',
                id: 'bracketList',
                itemTpl: [
					'{name}: {quantity}'
                ]
            },
            {
                xtype: 'panel',
                docked: 'bottom',
                layout: 'vbox',
                items: [
                    {
                        name: 'supprimer',
                        text: 'Supprimer',
                        iconCls: 'x-fa fa-trash-o',
                        title: 'Supprimer',
                        xtype: 'button',
                        ui: 'decline'
                    },
                    {
                        name: 'commander',
                        text: 'Commander',
						iconCls: 'x-fa fa-check',
                        title: 'Commander',
                        xtype: 'button',
                        ui: 'confirm'
                    }
                ]
            }
        ]
    }
});
