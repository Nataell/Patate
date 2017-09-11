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
			'<div class="overview">',
			'<img src="{pic}" alt="{name}" class="overview-img"/>',
			'</div>',
			'<div style="margin:20px;">',
			'<p class="overview-txt-left">Satisfaction :<span class="overview-txt-right">{rating}/5</span></p>',
			'<p class="overview-txt-left">Niveau :<span class="overview-txt-right">{level}</span></p>',
			'<p class="overview-txt-left">Temps de préparation :<span class="overview-txt-right">{preparation_time} mn</span></p>',
			'<p class="overview-txt-left">Temps de cuisson :<span class="overview-txt-right">{cooking_time} mn</span></p>',
			'</div>'
		]
	}
});
