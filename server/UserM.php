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
class UserM extends CI_Model{
  public function __construct(){
    parent::__construct();
    $this->load->database();
  }

  public function getUser($login,$pwd)
  {
	return $this->db
				->select('login')
				->from('_user')
				->where('login',$login)
				->where('password',$pwd)
				->get()->result_array();
  }

  public function getPwd()
  {
	  return $this->db
  				->select('v_meal.name as mealname,v_meal.id, _user.name as seller')
  				->from('v_meal')
  				->join('_user','v_meal.seller_id = _user.id')
  				->order_by('mealname','ASC')
  				->get()->result_array();
  }
}

?>