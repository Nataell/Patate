Ext.define('fr.ESIR.GreenVentory.controller.ThemeC', {
    extend: 'Ext.app.Controller',

	config: {
		refs: {
			MainView: 'welcome',
			btnBack: 'themev button[action=back]',
			checkerBT: 'themev checkboxfield[name=dark-mode]'
		},
		control: {
			'btnBack' : {
				tap: 'backToSetting'
			},
			'checkerBT' : {
				check: 'enableDarkMode',
				uncheck: 'disableDarkMode'
			}
		}
	},

	backToSetting: function(){
		Ext.Viewport.setActiveItem(this.getMainView());
	},
	enableDarkMode : function(){
		// Fashion.css.setVariables({"dark-mode": "true"});
	},
	disableDarkMode : function(){
		// Fashion.css.setVariables({"dark-mode": "false"});
	},

	onLaunch: function(app) {
		// var blackModeActivate = Fashion.css.getVariables()['dark-mode'];
		// if(blackModeActivate=="false"){
		// 	this.getcheckerBT().setChecked(false);
		// }
		// else{
		// 	this.getcheckerBT().setChecked(true);
		// }
		if (navigator.userAgent.match("Android")) {
			document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
			function onBackKeyDown(eve) {
				eve.preventDefault();
				this.backToSetting();
			}
		}
	}
});
