<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//TODO: record recipe
class RecipeC extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('RecipeM');
	}

	public function index()
	{}

	public function recipeList(){
		$callback = $this->input->get('callback');
		foreach ($this->RecipeM->getRecipeList() as $recipe) {
			$recipe["leaf"] = true; //needed for sencha
			$rList[] = $recipe;
		}
		//start output
		if ($callback) { //if callback is set, return a javascript text
		    header('Content-Type: text/javascript');
		    echo $callback . '(' .json_encode(array("items"=>$rList)) . ');';
		} else { //if there is no callback, return the data json formated
		    header('Content-Type: application/x-json');
		    echo json_encode(array("items"=>$rList));
		}
	}

	public function recipeDetail($id){
		$callback = $this->input->get('callback');

		if ($callback) { //if callback is set, return a javascript text
			header('Content-Type: text/javascript');
			echo $callback . '(' .json_encode($this->RecipeM->getRecipeInfo($id)) . ');';
		} else { //if there is no callback, return the data json formated
			header('Content-Type: application/x-json');
			echo json_encode($this->RecipeM->getRecipeInfo($id));
		}
	}

	public function deleteRecipe($id){
		$this->RecipeM->delete($id);
	}
}
