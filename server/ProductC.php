<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ProductC extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('ProductM');
	}

	public function index()
	{}

	public function foodList(){
		$callback = $this->input->get('callback');
		//start output
		if ($callback) { //if callback is set, return a javascript text
		    header('Content-Type: text/javascript');
		    echo $callback . '(' .json_encode(array("items"=>$this->ProductM->getFoodList())) . ');';
		} else { //if there is no callback, return the data json formated
		    header('Content-Type: application/x-json');
		    echo json_encode(array("items"=>$this->ProductM->getFoodList()));
		}
	}

	public function mealList(){
		$callback = $this->input->get('callback');
		//start output
		if ($callback) { //if callback is set, return a javascript text
		    header('Content-Type: text/javascript');
		    echo $callback . '(' .json_encode(array("items"=>$this->ProductM->getMealList())) . ');';
		} else { //if there is no callback, return the data json formated
		    header('Content-Type: application/x-json');
		    echo json_encode(array("items"=>$this->ProductM->getMealList()));
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
	}
}
