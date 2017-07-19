Ext.define('fr.ESIR.GreenVentory.view.fruitVegetable.OverviewFV', {
	extend: 'Ext.dataview.DataView',
	xtype: 'overviewfv',

	config: {
		name: 'overviewFruitVege',
		title: 'Présentation',
		itemTpl: [
			'<div style="text-align: center;margin:20px;">',
			'<img src="{picture}" alt="{foodname}" style="max-width: 100%;border-radius: 15px;border: 4px solid black;"/>',
			'<div style="margin:20px;">',
			'<p><B>{price}</B>/u €</p>',
			'<p>Origine: {origin}</p>',
			'<p>Vendeur: {seller}</p>',
			'</div>',
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
