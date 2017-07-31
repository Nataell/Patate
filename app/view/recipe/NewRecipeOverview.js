Ext.define('fr.ESIR.GreenVentory.view.recipe.NewRecipeOverview', {
	extend: 'Ext.form.Panel',
	xtype: 'newrecipeoverview',
	requires: [
		'Ext.field.Url'
	],
	config: {
		items: [
			{
				itemId: 'recipeName',
				xtype: 'textfield',
				label: 'Titre'
			},
			{
				itemId: 'pic',
				xtype: 'urlfield',
				label: 'Image'
			},
			{
				xtype: 'fieldset',
				title: 'Difficulté',
				itemId: 'lvlFieldset',
				instructions: 'Évaluer le niveau de difficulté de votre recette',
				items : [
					{
						xtype: 'radiofield',
						name: 'level',
						value: 'facile',
						label: 'Facile',
						checked: true
					},
					{
						xtype: 'radiofield',
						name: 'level',
						value: 'moyen',
						label: 'Moyen'
					},
					{
						xtype: 'radiofield',
						name: 'level',
						value: 'dur',
						label: 'Dur'
					}
				]
			},
			{
				xtype: 'fieldset',
				title: 'Temps',
				itemId:'timeFieldSet',
				instructions: 'Vos temps de cuisson et de préparation',
				items : [
					{
						xtype: 'numberfield',
						label: 'Préparation',
						itemId: 'preparation_time'
					},
					{
						xtype: 'numberfield',
						label: 'Cuisson',
						itemId: 'cooking_time'
					}
				]
			},
			{
				name: 'btnIngrediens',
				xtype: 'button',
				text: 'Ingrédients',
				iconCls: 'x-fa fa-arrow-right',
				iconAlign: 'right'
			}
		]
	}
});
