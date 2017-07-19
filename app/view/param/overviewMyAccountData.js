Ext.define('fr.ESIR.GreenVentory.view.param.overviewMyAccountData',{
	extend: 'Ext.dataview.DataView',
	xtype: 'overviewmyaccountdata',

	config: {
		name : 'overviewMAD',
		itemTpl: [
			'<div style="width:200px;height:100px;background-color: #e7fff1;border:2px solid #999999;">',
			//'<div margin:20px;border-radius: 15px;border: 4px solid black;">',
			'<div style="margin:20px;">',
			'<p>Nom d\'utilisateur : <font size="5pt"><B>{login}</B></font></p>',
			'<p>Nom : {name}</p>',
			'<p>Mail : {mail}</p>',
			'</div>',
			'</div>'
		]
	}
});
