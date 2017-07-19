Ext.define('fr.ESIR.GreenVentory.view.recipe.RecipeListNew', {
    extend: 'Ext.dataview.List',
	xtype : 'recipelistnew',
	config: {
        id: 'RecipeListNew',
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
						placeHolder: 'Nouveautées',
						name: 'rchNvlRecettes',
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
