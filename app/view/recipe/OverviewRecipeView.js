Ext.define('fr.ESIR.GreenVentory.view.recipe.OverviewRecipeView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'overviewrecipeview',

    config: {
        name: 'overview',
        title: 'Présentation',
        scrollable: true,
        items: [
            // {
            //     name: 'recipePic',
            //     xtype: 'image',
            //     maxWidth: '100%',
            //     itemid: 'recipePic',
            //     tpl: '{img}'
            // },
            // {
            //     xtype: 'button',
            //     text: 'Ingrédients',
            //     id: 'ingredientsButton',
            //     maxWidth: '50%',
            //     minWidth: '50%',
            //     style: 'display: inline-block'
            // },
            // {
            //     xtype: 'button',
            //     text: 'Étapes',
            //     id: 'stepsButton',
            //     maxWidth: '50%',
            //     minWidth: '50%',
            //     style: 'display: inline-block'
            // }
            // ,
            // {
            //     xtype: 'panel',
            //     tpl: 'Satisfaction: {rating}',
            //     itemid: 'satisfaction'
            // },
            // {
            //     xtype: 'panel',
            //     tpl: 'Niveau: {level}',
            //     itemid: 'level'
            // },
            // {
            //     xtype: 'panel',
            //     tpl: 'Temps de préparation: {preparation} min',
            //     itemid: 'prepTime'
            // },
            // {
            //     xtype: 'panel',
            //     tpl: 'Temps de cuisson: {cooking} min',
            //     itemid: 'cooktime'
            // }
        ],
        itemTpl: [
			'<div style="text-align: center;margin:20px;">',
				'<img src="{pic}" alt="{name}" style="max-width: 100%;border-radius: 15px;border: 4px solid black;"/>',
				'<div style="margin:20px;">',
					'<p>Satisfaction : {rating}/5</p><p>Niveau : {level}</p>',
					'<p>Temps de préparation : {preparation_time}</p>',
					'<p>Temps de cuisson : {cooking_time}</p>',
				'</div>',
			'</div>'
		]
    }
});
