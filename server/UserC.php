<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, x-prototype-version,x-requested-with');

class UserC extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('UserM');
	}

	public function userList(){
		$callback = $this->input->get('callback');
		foreach ($this->UserM->getUser() as $user) {
			/*echo "<pre>";
			print_r($user);
			echo "</pre>";*/
			$uList[] = $user;
		}
		//start output
		if ($callback) { //if callback is set, return a javascript text
		    header('Content-Type: text/javascript');
		    echo $callback . '(' .json_encode(array("items"=>$uList)) . ');';
		} else { //if there is no callback, return the data json formated
		    header('Content-Type: application/x-json');
		    echo json_encode(array("items"=>$uList));
		}
	}
	
	public function connect(){
		echo "use of connect";
		$login = $this->input->post('login');
		$pwd = $this->input->post('password');
		$result = $this->UserM->getUser($login,$pwd);
		
		if($result==null){
			echo "erreur";
		}else{
			echo "success";
			/*echo "<pre>";
			print_r($result);
			echo "</pre>";*/
		}
		//return $result;
		
	}

	/*public function mealList(){
		$callback = $this->input->get('callback');
		foreach ($this->ProductM->getMealList() as $meal) {
			$meal["leaf"] = true;
			$mList[] = $meal;
		}
		//start output
		if ($callback) { //if callback is set, return a javascript text
		    header('Content-Type: text/javascript');
		    echo $callback . '(' .json_encode(array("items"=>$mList)) . ');';
		} else { //if there is no callback, return the data json formated
		    header('Content-Type: application/x-json');
		    echo json_encode(array("items"=>$mList));
		}
	}

	public function foodDetail($id){
		$callback = $this->input->get('callback');
		if ($callback) { //if callback is set, return a javascript text
			header('Content-Type: text/javascript');
			echo $callback . '(' .json_encode(array("food"=>$this->ProductM->getFoodInfo($id))) . ');';
		} else { //if there is no callback, return the data json formated
			header('Content-Type: application/x-json');
			echo json_encode(array("food"=>$this->ProductM->getFoodInfo($id)));
		}
	}

	public function mealDetail($id){
		//start output
		$callback = $this->input->get('callback');
		if ($callback) { //if callback is set, return a javascript text
			header('Content-Type: text/javascript');
			echo $callback . '(' .json_encode(array("meal"=>$this->ProductM->getMealInfo($id))) . ');';
		} else { //if there is no callback, return the data json formated
			header('Content-Type: application/x-json');
			echo json_encode(array("meal"=>$this->ProductM->getMealInfo($id)));
		}
	}

	public function fresearch($name){
		$data["infoP"] = $this->ProductM->researchFood($name);
		$this->load->view('ProductV',$data);
	}

	public function fmeal($name){
		$data["infoP"] = $this->ProductM->researchMeal($name);
		$this->load->view('ProductV',$data);
	}*/
}