Ext.define('fr.ESIR.GreenVentory.view.recipe.RecipeList', {
    extend: 'Ext.dataview.List',
    xtype: 'recipelist',
    config: {
        id: 'RecipeList',
		itemTpl: '{name}',
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
						placeHolder: 'Recettes',
						name: 'rchRecettes',
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
