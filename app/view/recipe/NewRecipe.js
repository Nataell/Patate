Ext.define('fr.ESIR.GreenVentory.view.recipe.NewRecipe', {
    extend: 'Ext.form.Panel',
    xtype: 'newrecipe',

    config: {
        scrollable: null,
        layout: {
            type: 'card',
            animation: {
                type: 'flip',
                duration: 500
            }
        },
        items: [
            {
                name: 'overview',
                xtype: 'newrecipeoverview'
            },
            {
                name: 'ingredientslist',
                xtype: 'newrecipeingredients'
            },
            {
                name: 'stepslist',
                xtype: 'newrecipesteps'
            }
        ]
    }
});
