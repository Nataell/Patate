Ext.define('fr.ESIR.GreenVentory.view.recipe.IngredientListView', {
    extend: 'Ext.List',
    xtype: 'ingredientlistview',
    config: {
        title: 'Ingrédients',
        itemTpl: '- {ing_name} : {quantity}',
        disableSelection: true
        // fullscreen: true,
    }
});
