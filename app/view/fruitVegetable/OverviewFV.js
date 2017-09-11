Ext.define('fr.ESIR.GreenVentory.view.fruitVegetable.OverviewFV', {
	extend: 'Ext.dataview.DataView',
	xtype: 'overviewfv',

	config: {
		name: 'overviewFruitVege',
		title: 'Présentation',
		itemTpl: [
			'<div class="overview">',
			'<img src="{picture}" alt="{foodname}" class="overview-img"/>',
			'</div>',
			'<div style="margin:20px;">',
			'<p class="overview-txt-left">Prix :<span class="overview-txt-right"><B>{price}</B>/u €</span></p>',
			'<p class="overview-txt-left">Origine :<span class="overview-txt-right">{origin}</span></p>',
			'<p class="overview-txt-left">Vendeur :<span class="overview-txt-right">{seller}</span></p>',
			'</div>'
		],
		items: [
			{
				xtype: 'button',
				text: 'Commander',
				action: 'goToCommandView',
				docked: 'bottom'
			}
		]
	}
});
