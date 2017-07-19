Ext.define('fr.ESIR.GreenVentory.view.recipe.ListRecipeView', {
    extend: 'Ext.TabPanel',
    xtype: 'listrecipeview',

    config: {
		tabBar : {
			layout : {
				pack : 'center'
			}
		},
        items: [
            {
				title : 'Nouveautés',
                xtype: 'recipelistnew'
            },
            {
                title : 'Liste',
                xtype: 'recipelist'
            },
            {
                title: 'Proposer',
				xtype : 'newrecipe'
            }
        ]
    }
});
