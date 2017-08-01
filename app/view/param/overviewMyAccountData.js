Ext.define('fr.ESIR.GreenVentory.view.param.overviewMyAccountData',{
	extend: 'Ext.dataview.DataView',
	xtype: 'overviewmyaccountdata',

	config: {
		name : 'overviewMAD',
		itemTpl: [
			'<div style="margin:20px;">',
			'<p class="overview-txt-left">Nom d\'utilisateur :<span class="overview-txt-right"><B>{login}</B></span></p>',
			'<p class="overview-txt-left">Nom :<span class="overview-txt-right">{name}</span></p>',
			'<p class="overview-txt-left">Mail :<span class="overview-txt-right">{mail}</span></p>',
			'</div>'
		]
	}
});
