Ext.define('fr.ESIR.GreenVentory.view.CommandMeal', {
    extend: 'Ext.form.Panel',
    xtype: 'commandmeal',
    require:[
      'Ext.field.Hidden',
      'Ext.field.Number',
      'Ext.field.DatePicker'
    ],
    config: {
        items: [
            {
              xtype: 'fieldset',
              title: 'Details de la commande',
              items:[
                {
                    name: 'quantityMeal',
                    xtype: 'numberfield',
                    minValue: 0,
                    value: 0,
                    label: 'Quantité'
                },
                {
                    name: 'dateMeal',
                    xtype: 'datepickerfield',
                    value: new Date(),
                    label: 'Date',
                    //NOTE: faudrait mettre une limite de commande dans la semaine
                    picker: {
                      yearFrom: 2016,
                      yearTo: 2030
                    }
                }
              ]
            },
            {
                xtype: 'button',
                text: 'Ajouter au panier',
                ui: 'confirm',
				iconCls: 'x-fa fa-cart-plus',
                action: 'addMealToBasket'
            },
            {
                xtype: 'button',
                text: 'Annuler',
				iconCls: 'x-fa fa-ban',
                action: 'backToMealView'
            }
        ]
    }

});
