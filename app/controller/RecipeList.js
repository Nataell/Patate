var recipeView;
Ext.define('fr.ESIR.GreenVentory.controller.RecipeList', {
    extend: 'Ext.app.Controller',
    requires :[
        'fr.ESIR.GreenVentory.view.recipe.RecipeList',
        'fr.ESIR.GreenVentory.model.RecipeListModel'
    ],
    config: {
        refs: {
            recipeList: 'recipelist',
			main : 'welcome',
			recipeView: 'recipeview',
			refreshBtn: 'recipelist button[action=refreshList]'
        },
        control: {
			'recipelist' : {
				itemTap : 'showDetail'
			},
			'refreshBtn': {
				tap: 'refreshList'	
			}
        }
    },
	refreshList: function(){
		console.log('Refreshing recipes');
		this.getRecipeList().getStore().reload();
	},
    showDetail : function(list, index, target, record, e, eOpts){ //overwrite leafitemtap with a function that have the args. See https://docs.sencha.com/touch/2.4/guides/components/nested_list.html examples with the listener if you don't understand it
        if(recipeView!=null){
            recipeView.destroy();
        }
        recipeView = Ext.create('fr.ESIR.GreenVentory.view.recipe.RecipeView');
        Ext.Viewport.setActiveItem(recipeView);
		this.getApplication().getController('RecipeView').loadRecipe(record.get('id'),record.get('name'),recipeView);
	},

    //called when the Application is onLaunched, remove if not needed
    onLaunch: function(app) {
        this.loadList();
	},
    loadList: function() {
        var listData = Ext.create('Ext.data.Store', {
            model: 'fr.ESIR.GreenVentory.model.RecipeListModel',
            autoLoad: true,
			grouper: {
				groupFn: function(record) {
					return record.get('name')[0];
				}
			},
            proxy: {
                type: 'jsonp',
				enablePagingParams: false,
				extraParams: null,
				limitParam: null,
                url: "http://gv.anthonylohou.com/RecipeC/recipeList",
                reader: {
					type: 'json',
					rootProperty: 'items'
                }
            }
        });
        this.getRecipeList().setStore(listData);
    }
});
