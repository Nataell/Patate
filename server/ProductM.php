<?

/**
* Modéle qui permet de manipuler la base de données et de renvoyer des informations<hr />
* Functions
* <ul>
*	<li>Searc inside the list of product</li>
*	<li>get the full list of products & meal</li>
* </ul>
* @author trilunaire
* @version 1.0
*/
defined('BASEPATH') OR exit('No direct script access allowed');
class ProductM extends CI_Model{
  public function __construct(){
    parent::__construct();
    $this->load->database();
  }

  public function getFoodList()
  {
	return $this->db
				->select('v_food.name as foodname,v_food.id,v_food.price,_user.name as seller')
				->from('v_food')
				->join('_user','v_food.seller_id = _user.id')
				->order_by('foodname','ASC')
				->get()->result_array();
  }

  public function getMealList()
  {
	  return $this->db
  				->select('v_meal.name as mealname,v_meal.id,v_meal.price,_user.name as seller')
  				->from('v_meal')
  				->join('_user','v_meal.seller_id = _user.id')
  				->order_by('mealname','ASC')
  				->get()->result_array();
  }

  public function getFoodInfo($id){
	return $this->db->select('v_food.id as foodid, origin, v_food.name as foodname, price, picture, v_food.seller_id, _user.name as seller')
	            ->from('v_food')
				->join('_user','v_food.seller_id=_user.id')
				->where('v_food.id',$id)
	            ->get()
	            ->result_array();
  }

  public function getMealInfo($id){
	  return $this->db->select('v_meal.id as mealid, cal_report, v_meal.name as mealname, price, picture, v_meal.seller_id, _user.name as seller')
                    ->from('v_meal')
					->join('_user','v_meal.seller_id=_user.id')
  					->where('v_meal.id',$id)
                    ->get()
                    ->result_array();
  }

	/**
	*	Research on list
	* @see  https://www.codeigniter.com/user_guide/database/query_builder.html?highlight=like#CI_DB_query_builder::like
	*/
  public function researchFood($name){
	return $this->db
				->select('v_food.name as foodName,v_seller.name as seller')
				->from('v_food')
				->join('v_seller','v_food.seller_id = v_seller.id')
				->like('foodName',$name,'both')
				->group_by('seller')
				->order_by('foodName','ASC');
  }

  public function researchMeal($name){
  return $this->db
			  ->select('v_meal.name as foodName,v_seller.name as seller')
			  ->from('v_meal')
			  ->join('v_seller','v_meal.seller_id = v_seller.id')
			  ->like('foodName',$name,'both')
			  ->group_by('seller')
			  ->order_by('foodName','ASC');
  }
}

?>
