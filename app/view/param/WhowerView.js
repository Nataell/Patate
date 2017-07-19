Ext.define('fr.ESIR.GreenVentory.view.param.WhowerView', {
	extend: 'Ext.form.Panel',
	xtype: 'whowerview',

	config: {
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Qui sommes nous?',
				items: [
					{
						xtype: 'button',
						action : 'back',
						align: 'left',
						iconCls: 'x-fa fa-arrow-left'
					}
				]
			},
			{
				flex: 2,
				xtype: 'panel',
				html: "Nous sommes trois étudiants à l'ESIR à RENNES. Dans le  cadre du cours Innovation et politique dispensé par Nathalie Molines, nous avons été amené à nous lancer dans un projet répondant aux enjeux du développement durable. C'est pourquoi nous avons pensé à <b>Green'Ventory<\/b>. <br\/>Permettant de réunir les étudiants autour du partage du recette, tout en leur proposant des fruits et légumes ainsi que des repas. Nous essayons de créer un lien avec les AMAPs afin de favoriser la nourriture bio et de faciliter son accès sur le campus."
			},
			{
				flex: 1,
				xtype:'carousel',
				items:[
					{
						xtype: 'image',
						src: 'http://static8.viadeo-static.com/rp3kawutprbjIDZbfa8ShkK1Z1c=/140x185/smart/member/0021ojx51odchwl1?ts=1485173534000'
						// html:"<p align=\"center\"><img src=\"http://static8.viadeo-static.com/rp3kawutprbjIDZbfa8ShkK1Z1c=/140x185/smart/member/0021ojx51odchwl1?ts=1485173534000\" alt=\"\" style=\"max-width: 100%;border-radius: 15px;border: 4px solid black; margin : 20px; max-width : 200px;\"/><\/p><p align=\"center\"><i>\"Sensodyne ...\"<\/i></p>"
					},
					{
						xtype: 'image',
						src: 'https://tristanlaurent.com/pictures/profil.jpg'
						// html:"<p align=\"center\"><img src=\"https://tristanlaurent.com/pictures/profil.jpg\" alt=\"\" style=\"max-width: 100%;border-radius: 15px;border: 4px solid black; margin : 20px; max-width : 200px;\"/><\/p><p align=\"center\"><i>\"Sencha Touch ... C\'est d\'la merde !\"<\/i></p>"
					},
					{
						xtype: 'image',
						src: 'https://www.quadcopter-maupertuis.tk/assets/images/Groupe/Anthony.jpg'
						// html:"<p align=\"center\"><img src=\"https://www.quadcopter-maupertuis.tk/assets/images/Groupe/Anthony.jpg\" alt=\"\" style=\"max-width: 100%;border-radius: 15px;border: 4px solid black; margin : 20px; max-width : 200px;\"/><\/p><p align=\"center\"><i>\"Regardez, il a l\'air concentré ...\"<\/i></p>"
					}
				]
			}
		]
	}
});
