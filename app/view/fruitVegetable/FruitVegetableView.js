Ext.define('fr.ESIR.GreenVentory.view.fruitVegetable.FruitVegetableView', {
	extend: 'Ext.carousel.Carousel',
	xtype: 'fruitvegetableview',
	requires:[
		'Ext.Img',
		'Ext.Label',
		'fr.ESIR.GreenVentory.view.fruitVegetable.OverviewFV',
		'fr.ESIR.GreenVentory.view.CommandProd'
	],
	config: {
		itemId: 'vegetableView',
		items: [
			{
				xtype: 'titlebar',
				name: 'fruitVegetableTB',
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
				itemId: 'overviewFruitVege',
				xtype: 'overviewfv'
			},
			{
				xtype: 'commandprod',
				itemId: 'commandProd'
			}
		]
	}
});
