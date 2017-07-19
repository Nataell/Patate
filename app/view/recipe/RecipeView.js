Ext.define('fr.ESIR.GreenVentory.view.recipe.RecipeView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'recipeview',
    requires:[
        'Ext.Img',
        'Ext.Label',
        'fr.ESIR.GreenVentory.view.recipe.IngredientListView',
        'fr.ESIR.GreenVentory.view.recipe.RecipeStepListView',
        'fr.ESIR.GreenVentory.view.recipe.OverviewRecipeView'
    ],
    config: {
		fullscreen: true,
        items: [
			{
				xtype: 'titlebar',
				name: 'recipeTB',
				docked: 'top',
				title: '',
				items: [
					{
						xtype: 'button',
						action: 'back',
						align: 'left',
						iconCls: 'x-fa fa-arrow-left'
					}
				]
			},
            {
                title: 'Présentation',
                itemId: 'overview',
                xtype: 'overviewrecipeview'
            },
            {
                title: 'Ingredients',
                itemId: 'ingredients',
                xtype: 'ingredientlistview'
            },
            {
                title: 'Étapes',
                itemId: 'steps',
                xtype: 'recipesteplistview'
            }
        ]
    }
});
