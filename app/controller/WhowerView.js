Ext.define('fr.ESIR.GreenVentory.controller.WhowerView', {
    extend: 'Ext.app.Controller',

		config: {
			refs: {
				MainView : 'welcome',
				BtnBack: 'whowerview button[action=back]'
			},
			control: {
				'BtnBack':{
					tap:'previous'
				}
			}
		},

		previous : function(){
			Ext.Viewport.setActiveItem(this.getMainView());
		},

		onLaunch : function(app){
			if (navigator.userAgent.match("Android")) {
				document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
				function onBackKeyDown(eve) {
					eve.preventDefault();
					this.previous();
				}
			}
		}
});
