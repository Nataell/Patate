Ext.define('fr.ESIR.GreenVentory.view.recipe.NewRecipeSteps', {
    extend: 'Ext.form.Panel',
    xtype: 'newrecipesteps',

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
                        text: 'ingrédients',
						iconCls: 'x-fa fa-arrow-left',
                        name: 'backingredbtn',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: 'Proposer',
						iconCls: 'x-fa fa-check',
                        ui: 'confirm',
                        name: 'proposer',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'stepsfieldset',
                title: 'Étapes',
                instructions: 'Décrivez chacunes des étapes de votre recette',
                items : [
                    {
                        itemId: 'steptextfield',
                        xtype: 'textfield',
                        label: 'Étape'
                    },
                    {
                        name: 'addNewStep',
                        xtype: 'button',
                        ui: 'action',
						iconCls: 'x-fa fa-plus',
                        text: 'ajouter'
                    }
                ]
            },
			{
				flex: 1,
				xtype: 'list',
				name: 'stepsList',
				itemTpl: '{detail}',
				scrollable : false
			}
        ]
    }
});
