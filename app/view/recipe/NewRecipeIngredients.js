Ext.define('fr.ESIR.GreenVentory.view.recipe.NewRecipeIngredients', {
    extend: 'Ext.form.Panel',
    xtype: 'newrecipeingredients',

    config: {
        layout : {
            type  : 'vbox',
            align : 'stretch'
        },
        items: [
			{
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        text: 'retour',
						iconCls: 'x-fa fa-arrow-left',
                        name: 'backbtn',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: 'Étapes',
						iconCls: 'x-fa fa-arrow-right',
						iconAlign: 'right',
                        name: 'stepsBtn',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'fieldsetingr',
                title: 'Ingrédients',
                instructions: 'Listez les ingrédients et la quantité requise.',
                items : [
                    {
                        itemId: 'newIngrName',
                        xtype: 'textfield',
                        label: 'Nom'
                    },
                    {
                        itemId: 'newQuantity',
                        xtype: 'textfield',
                        label: 'Quantité'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        text: 'ajouter',
						iconCls: 'x-fa fa-plus',
                        name: 'addIngredient'
                    }
                ]
            },
			{
				flex: 1,
				xtype: 'list',
				name: 'ingList',
				itemTpl: '{ing_name}: {quantity}',
				scrollable : false //Don't know why but it works with it
			}
        ]
    }
});
