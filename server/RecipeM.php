<?

/**
* Modéle qui permet de manipuler la base de données et de renvoyer des informations<hr />
* Functions
* <ul>
*	<li>Search inside the list of recipe</li>
*	<li>get the full list of recipe</li>
* </ul>
* @author trilunaire
* @version 1.0
*/
defined('BASEPATH') OR exit('No direct script access allowed');
class RecipeM extends CI_Model{
	public function __construct(){
		parent::__construct();
		$this->load->database();
	}

	public function getRecipeList()
	{
		return $this->db
					->select('name,id')
					->from('_recipe')
					->order_by('name','ASC')
					->get()->result_array();
	}

	/**
	* @desc Get all the informations
	*/
	public function getRecipeInfo($id){
		$recipeData = array();
		$recipeData['descr'] = $this->db->select('*') //be careful about the picture
										->from('_recipe')
										->where('id',$id)
										->get()
										->result_array();
		//take ordering steps
		$recipeData['steps'] = $this->db->select('*')
										->from('_step_recipe')
										->where('id_recipe',$id)
										->order_by('rank')
										->get()
										->result_array();
		// NOTE: Implement rank système in database for ingredients
		$recipeData['ingredients'] = $this->db->select('*')
										->from('_ingredient_recipe')
										->where('id_recipe',$id)
										->get()
										->result_array();
		return $recipeData;
	}

	public function recordPrimaryInfo($infoArray){
		if($this->db->insert('_recipe',$infoArray)){ //insert the data
			return $this->db->insert_id(); //return the recipe id (used for other query)
		}
		else{
			return -1;
		}

	}

	public function recordIngredient($rId, $name, $quantity){
		$iForRecipe = array(
						'id_recipe' => $rId,
						'ing_name' => $name,
						'quantity' => $quantity
		);
		return $this->db->insert('_ingredient_recipe',$iForRecipe);
	}

	public function recordStep($rId, $sDetail, $rank){
		$sForRecipe = array(
						'id_recipe' => $rId,
						'detail' => $sDetail,
						'rank' => $rank
		);
		return $this->db->insert('_step_recipe',$sForRecipe);
	}

	public function delete($rId){
		echo "test";
		$this->db->delete('_step_recipe', array('id_recipe' => $rId));
		$this->db->delete('_ingredient_recipe', array('id_recipe' => $rId));
		$this->db->delete('_recipe', array('id' => $rId));
	}

	//TODO: search on recipe list
}

?>
