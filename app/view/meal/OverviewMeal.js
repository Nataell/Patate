Ext.define('fr.ESIR.GreenVentory.view.meal.OverviewMeal', {
	extend: 'Ext.dataview.DataView',
	xtype: 'overviewmeal',

	config: {
		name: 'overviewMeal',
		title: 'Présentation',
		scrollable: true,
		itemTpl: [
			'<div class="overview">',
			'<img src="{picture}" alt="{mealname}" class="overview-img"/>',
			'</div>',
			'<div style="margin:20px;">',
			'<p class="overview-txt-left">Prix :<span class="overview-txt-right"><B>{price}</B>/u €</span></p>',
			'<p class="overview-txt-left">Rapport calorique :<span class="overview-txt-right">{cal_report}</span></p>',
			'<p class="overview-txt-left">Vendeur :<span class="overview-txt-right">{seller}</span></p>',
			'</div>'
		],
		items: [
			{
				xtype: 'button',
				text: 'Commander',
				action: 'goToCommandMealView',
				docked: 'bottom'
			}
		]
	}
});
