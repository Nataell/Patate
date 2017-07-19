var recipeViewNew;
Ext.define('fr.ESIR.GreenVentory.controller.RecipeListNew', {
    extend: 'Ext.app.Controller',
    requires :[
        'fr.ESIR.GreenVentory.view.recipe.RecipeListNew',
        'fr.ESIR.GreenVentory.model.RecipeListModel'
    ],
    config: {
        refs: {
            recipeListNew: 'recipelistnew',
			main : 'welcome',
			refreshBtn: 'recipelistnew button[action=refreshList]'
        },
        control: {
			'recipelistnew' : {
				leafitemtap : 'showDetail'
			},
			'refreshBtn': {
				tap: 'refreshList'
			}
        }
    },
	refreshList: function(){
		console.log('Refreshing new recipes');
		this.getRecipeListNew().getStore().reload();
	},
	showDetail : function(nestedList, list, index, target, record){ //overwrite leafitemtap with a function that have the args. See https://docs.sencha.com/touch/2.4/guides/components/nested_list.html examples with the listener if you don't understand it
        if(recipeViewNew!=null){
            recipeViewNew.destroy();
        }
        recipeViewNew = Ext.create('fr.ESIR.GreenVentory.view.recipe.RecipeView');
        Ext.getCmp('RecipeListNew').setDetailCard(recipeViewNew);
		this.getApplication().getController('RecipeView').loadRecipe(record.get('url'),recipeViewNew);
	},

    //called when the Application is onLaunched, remove if not needed
  onLaunch: function(app) {
        //this.loadList();
  },
  loadList: function() {
        var listData = Ext.create('Ext.data.TreeStore', {
            model: 'fr.ESIR.GreenVentory.model.RecipeListModel',
            autoLoad: true,
			defaultRootProperty: 'items',
            sorters: 'title',
            proxy: {
                type: 'ajax',
                noCache: true,
                enablePagingParams: false,
                limitParam: null,
                url: "./data/recipes/listNew.json",
                reader: {
					type: 'json',
                    totalProperty: 'totalCount'
                },
                extraParams: null
            }
        });
        this.getRecipeListNew().setStore(listData);
  }
});
