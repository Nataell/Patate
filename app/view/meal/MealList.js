Ext.define('fr.ESIR.GreenVentory.view.meal.MealList', {
    extend: 'Ext.dataview.List',
    xtype: 'meallist',
    config: {
        id: 'MealList',
		itemTpl: '{mealname}: {price}€',
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
						placeHolder: 'Repas',
						name: 'rchRepas',
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
