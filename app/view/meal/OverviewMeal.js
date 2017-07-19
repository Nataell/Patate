Ext.define('fr.ESIR.GreenVentory.view.meal.OverviewMeal', {
	extend: 'Ext.dataview.DataView',
	xtype: 'overviewmeal',

	config: {
		name: 'overviewMeal',
		title: 'Présentation',
		scrollable: true,
		itemTpl: [
			'<div style="text-align: center;margin:20px;">',
			'<img src="{picture}" alt="{mealname}" style="max-width: 100%;border-radius: 15px;border: 4px solid black;"/>',
			'<div style="margin:20px;">',
			'<p><B>{price}</B>/u €</p>',
			'<p>Rapport calorique: {cal_report}</p>',
			'<p>Vendeur: {seller}</p>',
			'</div>',
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
