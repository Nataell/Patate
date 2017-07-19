Ext.define('fr.ESIR.GreenVentory.view.param.ThemeV', {
	extend: 'Ext.form.Panel',
	xtype: 'themev',

	config: {
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Personnalisation',
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
				xtype: 'checkboxfield',
				name: 'dark-mode',
				label: 'dark-mode'
				//value is set on controler
			}
		]
	}
});
