Ext.define('fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableList', {
    extend: 'Ext.dataview.List',
    xtype: 'fruitvegetablelist',

    config: {
        id: 'FruitVegetableList',
	    itemTpl: '{foodname}: {price}€',
		fullscreen: true,
		grouped: true,
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				items: [
					{
						iconCls: 'x-fa fa-search',
						align: 'left'
					},
					{
						xtype: 'textfield',
						autoComplete: true,
						autoCorrect: true,
						placeHolder: 'Produits',
						name: 'rchProduct',
						align: 'left'
					},
					{
						xtype: 'button',
						action: 'refreshList',
						align: 'right',
						iconCls: 'x-fa fa-refresh'
					}
				]
			}
		]
    }
});
