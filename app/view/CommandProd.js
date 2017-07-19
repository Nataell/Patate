Ext.define('fr.ESIR.GreenVentory.view.CommandProd', {
    extend: 'Ext.form.Panel',
    xtype: 'commandprod',
    require:[
      'Ext.field.Hidden',
      'Ext.field.Number',
      'Ext.field.DatePicker'
    ],
    config: {
        items: [
            {
              xtype: 'fieldset',
              name: 'detailcommand',
              title: 'Details de la commande',
              items:[
                {
                    name: 'productquantity',
                    xtype: 'numberfield',
                    minValue: 0,
                    value: 0,
                    label: 'Quantité'
                },
                {
                    name: 'dateCommand',
                    xtype: 'datepickerfield',
                    value: new Date(),
                    label: 'Date',
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
        ]
    }

});
