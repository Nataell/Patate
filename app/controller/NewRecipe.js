Ext.define('fr.ESIR.GreenVentory.controller.NewRecipe', {
    extend: 'Ext.app.Controller',
    requires :[
        'fr.ESIR.GreenVentory.view.recipe.NewRecipe',
        'fr.ESIR.GreenVentory.view.recipe.NewRecipeIngredients',
        'fr.ESIR.GreenVentory.view.recipe.NewRecipeOverview',
        'fr.ESIR.GreenVentory.view.recipe.NewRecipeSteps',
		'fr.ESIR.GreenVentory.model.StepListModel'
    ],
    config: {
        refs: {
            main: 'newrecipe',
            globalAttr: 'newrecipeoverview',
            ingrRecipe: 'newrecipeingredients',
            stepRecipe: 'newrecipesteps',
            btnIngre: 'newrecipeoverview button[name=btnIngrediens]',
            btnGlobal: 'newrecipeingredients button[name=backbtn]',
            btnStep: 'newrecipeingredients button[name=stepsBtn]',
            btnBackIngredient: 'newrecipesteps button[name=backingredbtn]',
            btnAddNewIngredient: 'newrecipeingredients button[name=addIngredient]',
            btnAddNewStep: 'newrecipesteps button[name=addNewStep]',
            btnProposer: 'newrecipesteps button[name=proposer]',
			ingredientsList: 'newrecipeingredients list[name=ingList]',
			stepsList: 'newrecipesteps list[name=stepsList]'
        },
        control: {
            'btnIngre' :{
                tap: 'onBtnIngreTap'
            },
            'btnGlobal' :{
                tap: 'onBtnGlobalTap'
            },
            'btnStep' :{
                tap: 'onBtnStepTap'
            },
            'btnBackIngredient' :{
                tap: 'onBtnIngBckTap'
            },
            'btnAddNewIngredient' :{
                tap: 'onBtnAddIngrTap'
            },
            'btnAddNewStep' :{
                tap: 'onBtnAddStepTap'
            },
			'btnProposer' :{
				tap: 'onBtnProposerTap'
			}
        }
    },

	onBtnProposerTap: function() {
		//thePrincipalInfos
		console.log('test');
		//console.log(this.getGlobalAttr().getValue());
		var rName = this.getGlobalAttr().getComponent('recipeName').getValue();
		var pictureUrl =this.getGlobalAttr().getComponent('pic').getValue();
		var level=	this.getGlobalAttr().getValues().level;
		var pTime=this.getGlobalAttr().getComponent('timeFieldSet').getComponent('preparation_time').getValue();
		var cTime=this.getGlobalAttr().getComponent('timeFieldSet').getComponent('cooking_time').getValue();

		//the ingredients
		var lTmp = this.getIngredientsList().getData();
		var ingredientsName = [];
		var ingredientsQT = [];
		if(lTmp!=null){//si on a des ingredients
			for(i = 0; i<lTmp.length; i++){
				ingredientsName.push(lTmp[i]['ing_name']);
				ingredientsQT.push(lTmp[i]['quantity']);
			}
		}
		//theSteps
		lTmp = this.getStepsList().getData();
		var stepsL = [];
		if(lTmp!=null){//si on a des étapes
			for(i = 0; i<lTmp.length; i++){
				stepsL.push(lTmp[i]['detail']);
			}
			console.log(ingredientsName);
			console.log(ingredientsQT);
			console.log(stepsL);
			Ext.Viewport.mask({ xtype: 'loadmask', message: "Enregistrement de la recette.." });
			this.recordRecipe(rName,pTime,cTime,pictureUrl,level,ingredientsName,ingredientsQT,stepsL);
		}
		else{
			Ext.toast({
				timeout: 1500,
				message: 'Vous devez mettre au moins une étape',
				title: 'Erreur'
			});
		}
	},

	recordRecipe: function(rName, pTime, cTime, pictureUrl, level, ingredientslist, ingredientQT, stepDesc) {
		console.log('appel record Recipe');
		Ext.Ajax.request({
			url: "http://gv.anthonylohou.com/NewRecipeC/recordRecipe",
			method: 'POST',
			params: { //to post an array, we need to encode it here and decode it on server side. Solution here: https://www.sencha.com/forum/showthread.php?66048-post-an-array-in-ajax-request
				recipeName: rName,
				pTime: pTime,
				cTime: cTime,
				pictureUrl: pictureUrl,
				level: level,
				ingredientNameJson: Ext.encode(ingredientslist),
				ingredientQTJson: Ext.encode(ingredientQT),
				stepDescJson: Ext.encode(stepDesc)
			},
			success: function(response){
				Ext.Viewport.unmask();
				if(response['responseText'].includes("invalidBasicsInfo")){
					Ext.toast({
						timeout: 1500,
						message: 'Vos informations de base sont invalides (page 1)',
						title: 'Erreurs'
					});
				}
				else{
					Ext.toast({
						timeout: 1500,
						message: 'Votre recette est maintenant disponible',
						title: 'Succès'
					});
				}
			},
			failure: function() {
				Ext.Viewport.unmask();
				Ext.toast({
					timeout: 1500,
					message: 'Erreur dans la requète, veuillez réessayer ou nous avertir du bug',
					title: 'Erreur'
				});
			}
		});
	},
    onBtnIngreTap: function() {
        //NOTE: record the global attributes first in temp file
		var rName = this.getGlobalAttr().getComponent('recipeName').getValue();
		var pictureUrl =this.getGlobalAttr().getComponent('pic').getValue();
		var level=this.getGlobalAttr().getValues().level;
		//console.log(this.getLevelRadioField());
		console.log(level);
		var pTime=this.getGlobalAttr().getComponent('timeFieldSet').getComponent('preparation_time').getValue();
		var cTime=this.getGlobalAttr().getComponent('timeFieldSet').getComponent('cooking_time').getValue();
		if(rName=="" || rName == null){
			Ext.toast({
				timeout: 1500,
				message: 'Vous avez oublié de donner un nom à votre recette',
				title: 'Champs manquant'
			});
		}else if(level=="" || level == null){
			Ext.toast({
				timeout: 1500,
				message: 'Vous avez oublié de choisir un niveau',
				title: 'Champs manquant'
			});
		}
		else if(pTime=="" || pTime == null){
			Ext.toast({
				timeout: 1500,
				message: 'Vous avez oublié de préciser le temps de préparation',
				title: 'Champs manquant'
			});
		}
		else if(cTime=="" || cTime == null){
			Ext.toast({
				timeout: 1500,
				message: 'Vous avez oublié de préciser le temps de cuisson',
				title: 'Champs manquant'
			});
		}
		else{
			this.getMain().setActiveItem(1);
		}
    },
    onBtnGlobalTap: function() {
        this.getMain().setActiveItem(0);
    },
    onBtnStepTap: function(){
		var listIng = this.getIngredientsList().getData();
		if(listIng==null){
			Ext.toast({
				timeout: 1500,
				message: 'Vous cuisinez sans ingrédients?',
				title: 'Liste vide'
			});
		}
		else {
			this.getMain().setActiveItem(2);
		}
    },
    onBtnIngBckTap: function(){
        this.getMain().setActiveItem(1);
    },
    /**
    * When we add a new ingredient, it update the store with this new ingredient, and it update the height off the list.
    */
    onBtnAddIngrTap: function(){
        var newIngr = this.getIngrRecipe().getComponent('fieldsetingr').getComponent('newIngrName').getValue();
        var newQuantity = (this.getIngrRecipe().getComponent('fieldsetingr').getComponent('newQuantity').getValue() == "") ? null : this.getIngrRecipe().getComponent('fieldsetingr').getComponent('newQuantity').getValue();
        var listIngr = this.getIngredientsList();
        if(newIngr!=""){
			var lIngre = listIngr.getData();
			if(lIngre == null){
				lIngre = [];
			}
			lIngre.push({ing_name: newIngr, quantity: newQuantity});
			if(listIngr.getData()==null){
				listIngr.setData(lIngre);
			}
			else{
				listIngr.updateData({ing_name: newIngr, quantity: newQuantity});
			}
			console.log(listIngr.getData());
			this.getIngrRecipe().getComponent('fieldsetingr').getComponent('newIngrName').setValue("");
            this.getIngrRecipe().getComponent('fieldsetingr').getComponent('newQuantity').setValue("");
            // if(listIngr.getStore().getCount()<5){
            //     listIngr.setHeight(listIngr.getStore().getCount()*listIngr.getItemHeight());
            // }
        }
    },

    onBtnAddStepTap: function() {
        var newStep = this.getStepRecipe().getComponent('stepsfieldset').getComponent('steptextfield').getValue();
        var listSteps = this.getStepsList();
        if(newStep!=""){
			var stepsData = listSteps.getData();
			if(stepsData==null){
				stepsData = [];
			}
			stepsData.push({detail: newStep, rank: stepsData.length+1});
			if(listSteps.getData()==null){
				listSteps.setData(stepsData);
			}
			else{
				listSteps.updateData({detail: newStep, rank: stepsData.length+1});
			}
			console.log(listSteps.getData());
            this.getStepRecipe().getComponent('stepsfieldset').getComponent('steptextfield').setValue("");
            // if(listSteps.getStore().getCount()<5){
            //     listSteps.setHeight((stepsData.length)*listSteps.getItemHeight());
            // }
        }
    },

    onLaunch: function(app) {
        // var storeForOverview = Ext.create('Ext.data.Store', {
        //     model: 'fr.ESIR.GreenVentory.model.OverviewRecipeModel',
        //     autoLoad: true,
        //     proxy: {
        //         type: 'ajax',
        //         url: 'data/recipes/newRecipeSave.json',
        //         reader: {
        //             type: 'json',
        //             rootProperty: 'descr',
        //             totalProperty: 'totalCount'
        //         }
        //     }
        // });
        // var storeIngredientsData = Ext.create('Ext.data.Store', {
        //     model: 'fr.ESIR.GreenVentory.model.IngredientListModel',
        //     autoLoad: true,
        //     proxy: {
        //         type: 'ajax',
        //         url: 'data/recipes/newRecipeSave.json',
        //         reader: {
        //             rootProperty: 'ingredients',
        //             totalProperty: 'totalCount'
        //         }
        //     }
        // });
        // var storeStepsData = Ext.create('Ext.data.Store', {
        //     autoLoad: true,
        //     model: 'fr.ESIR.GreenVentory.model.StepListModel',
        //     proxy: {
        //         type: 'ajax',
        //         url: 'data/recipes/newRecipeSave.json',
        //         reader: {
        //             rootProperty: 'steps',
        //             totalProperty: 'totalCount'
        //         }
        //     }
        // });
		//
        // this.getIngredientsList().setStore(storeIngredientsData);
        // this.getStepsList().setStore(storeStepsData);
    }
});
