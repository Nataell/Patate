Ext.define('fr.ESIR.GreenVentory.view.recipe.RecipeStepListView', {
    extend: 'Ext.List',
    xtype: 'recipesteplistview',
    config: {
        title: 'Étapes',
        itemTpl: '- {detail}',
        disableSelection: true
    }
});
