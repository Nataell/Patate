Ext.define('fr.ESIR.GreenVentory.view.meal.MealView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'mealview',

    config: {
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
