<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, x-prototype-version,x-requested-with');
class NewRecipeC extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('RecipeM');
	}

	public function index()
	{}

	public function recordRecipe(){
		//FIRST: take the basics informations with post (be careful with the picture & rating)
		date_default_timezone_set('Europe/Paris');//avoid php warning about date() by setting a defaut timezone
		$recipeBase = array( //the rating is null
			'name' => $this->input->post('recipeName'),
			'rating' => 0,
			'level' => $this->input->post('level'),
			'preparation_time' => $this->input->post('pTime'),
			'cooking_time' => $this->input->post('cTime'),
			'date_publi' => date("Y-m-d H:i:s")
		);
		print_r($recipeBase);
		//if we have a picture
		if($this->input->post('pictureUrl')){
			$recipeBase['pic'] = $this->input->post('pictureUrl');
		}
		//call the model to record it
		$recipeId = $this->RecipeM->recordPrimaryInfo($recipeBase);

		//initialize empty var
		$ingredientsName = [];
		$ingredientsQuantity = [];
		$stepsDesc = [];
		
		if($recipeId != -1){
			//Now the differents ingredients (in the post list)
			if($this->input->post('ingredientNameJson')){
				$ingredientsName = json_decode($this->input->post('ingredientNameJson'));
			}
			else{
				$ingredientsName = $this->input->post('ingredientName');
			}

			if($this->input->post('ingredientQTJson')){
				$ingredientsQuantity = json_decode($this->input->post('ingredientQTJson'));
			}
			else{
				$ingredientsQuantity = $this->input->post('ingredientQT');
			}

			for ($i=0; $i < count($ingredientsName); $i++) {
				$this->RecipeM->recordIngredient($recipeId, $ingredientsName[$i], $ingredientsQuantity[$i]);
			}

			//And the steps (already in order in the post)
			if($this->input->post('stepDescJson')){
				$stepsDesc = json_decode($this->input->post('stepDescJson'));
			}
			else{
				$stepsDesc = $this->input->post('stepDesc');
			}
			for ($i=0; $i < count($stepsDesc); $i++) {
				$this->RecipeM->recordStep($recipeId, $stepsDesc[$i], $i);
			}
		}
		else{
			echo("invalidBasicsInfo");
		}
	}


}
