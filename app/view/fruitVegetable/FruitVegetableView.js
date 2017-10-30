Ext.define('fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableView', {
	extend: 'Ext.dataview.DataView',
	xtype: 'fruitvegetableview',
	fullscreen: true,
	config: {
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
				xtype: 'titlebar',
				name: 'titleBarProd',
				docked: 'top',
				title: '',
				items: [
					{
						xtype: 'button',
						action: 'back',
						align: 'left',
						iconCls: 'x-fa fa-arrow-left'
					}
				]
			},
			{
			xtype: 'panel',
			align: 'center',
			docked: 'bottom',
			items: [
					{
								name: 'productquantity',
								xtype: 'numberfield',
								minValue: 0,
								value: 0,
								label: 'Quantité'
					},
					{
						xtype: 'button',
						text: 'Ajouter au panier',
						iconCls: 'x-fa fa-cart-plus',
						ui: 'confirm',
						action: 'addTobasket'
					},
					{
							xtype: 'button',
							text: 'Annuler',
							iconCls: 'x-fa fa-ban',
							action: 'cancel'
					}
			]}
		]
	}
});
