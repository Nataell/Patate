Ext.define('fr.ESIR.GreenVentory.controller.RecipeView', {
    extend: 'Ext.app.Controller',
    requires :[
        'fr.ESIR.GreenVentory.view.recipe.IngredientListView',
        'fr.ESIR.GreenVentory.view.recipe.RecipeView',
        'fr.ESIR.GreenVentory.view.recipe.RecipeStepListView',
        'fr.ESIR.GreenVentory.view.recipe.OverviewRecipeView',
        'fr.ESIR.GreenVentory.model.OverviewRecipeModel',
        'fr.ESIR.GreenVentory.model.IngredientListModel',
		'fr.ESIR.GreenVentory.model.StepListModel'
    ],
    config: {
        refs: {
            //views
            mainView: 'welcome',
			backBtn: 'recipeview button[action=back]',
			titleBar: 'recipeview titlebar[name=recipeTB]'
            // recentReciepeView: 'recipeview',
            // ingredientView: 'ingredientlistview',
            // stepView: 'recipesteplistview',
            // overView: 'overviewrecipeview',
            // buttons
            // buttonIngrediens: "#ingredientsButton",
            // buttonOverview: "#overviewButton",
            // buttonSteps: "#stepsButton"
        },
        control: {
            // 'buttonIngrediens' :{
            //     tap: 'onBtnIngredientTap'
            // },
            'backBtn' :{
                tap: 'backToList'
            }
            // 'buttonSteps' :{
            //     tap: 'onBtnStepTap'
            // }
        }
    },
	backToList : function() {
		console.log('Back to list');
		Ext.Viewport.setActiveItem(this.getMainView());
	},
    //called when the Application is onLaunched, remove if not needed
    onLaunch: function(app) {
    },

    loadRecipe: function(id, name, recipeview){
		this.getTitleBar().setTitle(name);
        var overviewData = Ext.create('Ext.data.Store', {
            model: 'fr.ESIR.GreenVentory.model.OverviewRecipeModel',
            autoLoad: true,
            proxy: {
                type: 'jsonp',
                noCache: true,
                enablePagingParams: false,
                limitParam: null,
                url: 'http://gv.anthonylohou.com/RecipeC/recipeDetail/'+id,
                reader: {
                    type: 'json',
                    rootProperty: 'descr',
                    totalProperty: 'totalCount'
                }
            }
        });

        console.log(overviewData.data);
        recipeview.getComponent('overview').setStore(overviewData);
        var ingredientsData = Ext.create('Ext.data.Store', {
            model: 'fr.ESIR.GreenVentory.model.IngredientListModel',
            autoLoad: true,
            proxy: {
                type: 'jsonp',
                noCache: true,
                enablePagingParams: false,
                limitParam: null,
                url: 'http://gv.anthonylohou.com/RecipeC/recipeDetail/'+id,
                reader: {
                    rootProperty: 'ingredients',
                    totalProperty: 'totalCount'
                }
            }
        });
        recipeview.getComponent('ingredients').setStore(ingredientsData);
        var stepsData = Ext.create('Ext.data.Store', {
			model: 'fr.ESIR.GreenVentory.model.StepListModel',
            autoLoad: true,
            proxy: {
                type: 'jsonp',
                url: 'http://gv.anthonylohou.com/RecipeC/recipeDetail/'+id,
                noCache: true,
                enablePagingParams: false,
                limitParam: null,
                reader: {
                    rootProperty: 'steps',
                    totalProperty: 'totalCount'
                }
            }
        });
        recipeview.getComponent('steps').setStore(stepsData);
    }
    //
    // onBtnOverviewTap: function() {
    //     this.getMainView().setActiveItem(0);
    // },
    //
    // onBtnIngredientTap: function() {
    //     this.getMainView().setActiveItem(1);
    // },
    //
    // onBtnStepTap: function() {
    //     this.getMainView().setActiveItem(2);
    // }
});
