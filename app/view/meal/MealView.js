Ext.define('fr.ESIR.GreenVentory.view.meal.MealView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'mealview',
	requires:[
		'Ext.Img',
		'Ext.Label',
		'fr.ESIR.GreenVentory.view.meal.OverviewMeal',
		'fr.ESIR.GreenVentory.view.CommandProd'
	],
    config: {
		indicator: false,
        items: [
			{
				xtype: 'titlebar',
				name: 'mealTB',
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
                itemId: 'overviewMeal',
                xtype: 'overviewmeal'
            },
            {
                xtype: 'commandmeal'
            }
        ]
    }
});
