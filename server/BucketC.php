<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, x-prototype-version,x-requested-with');
class BucketC extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('BucketM');
	}

	public function index()
	{}

	public function add(){
		$idUser = $this->input->post('id_U');
		$idProduct = $this->input->post('id_P');
		$quantity = $this->input->post('quantity');
		if($idUser!= null && $idProduct!=null && $quantity	!=null){
			echo($this->BucketM->addProductToBucket($idUser,$idProduct,$quantity));
		}
		// $callback = $this->input->get('callback');
		//
		// if($callback){
		// 	header('Content-Type: text/javascript');
		// 	echo $callback . '(' . json_encode(array("items"=>$this->$this->BucketM->getBucket($idUser))).');';
		// }
		// else{
		// 	header('Content-Type: application/x-json');
		// 	echo  json_encode(array("items"=>$this->$this->BucketM->getBucket($idUser)));
		// }
		//
	}

	public function get($idUser){
		$callback = $this->input->get('callback'); //callback needed for sencha
		//$idUser = strval($idUser); //convert number to string
		if($callback){
			header('Content-Type: text/javascript');
			echo $callback . '(' . json_encode(array("items"=>$this->BucketM->getBucket($idUser))).');';
		}
		else{
			header('Content-Type: application/x-json');
			echo  json_encode(array("items"=>$this->BucketM->getBucket($idUser)));
		}
	}

	public function delete($idUser, $idProduct){
		$this->BucketM->removeProd($idUser,$idProduct);
	}

	public function change($idUser, $idProduct, $newQuantity){
		$this->BucketM->modifyProdQty($idUser,$idProduct,$newQuantity);
	}

	public function commander(){
		$idUser = $this->input->post('id_User');
		$error = false;
		if($idUser!=null){
			date_default_timezone_set('Europe/Paris');
			$commandInfo = array( //the rating is null
				'id_user' 	=> $idUser,
				'statut' => 0,
				'message_user' => null,
				'message_seller' => null,
				'date' => date("Y-m-d H:i:s")
			);
			$sellersForBucket = $this->BucketM->getSellers($idUser);
			foreach ($sellersForBucket as $seller) {
				if(!$error){
					$idCommande = $this->BucketM->sendCommand($idUser, $commandInfo); //on fait une commande
					if($idCommande!=-1){
						echo $idCommande;
						$separateCMD = $this->BucketM->getBucketBySellerId($idUser,$seller['seller_id']);
						foreach ($separateCMD as $commandItem) {
							$articleToCommand = array(
								'id_product' => $commandItem['id_product'],
								'quantity' => $commandItem['quantity'],
								'id_commande' => $idCommande
							);
							$this->BucketM->sendCommandDetail($articleToCommand); //et on ajoute les détails
						}
					}
					else{
						$error = true;
						echo "Error";
					}
				}
			}
			if(!$error){
				echo "success";
				$this->BucketM->emptyBucket($idUser);
			}
		}
	}
	//  ####### #######  #####  #######  #####
	//     #    #       #     #    #    #     #
	//     #    #       #          #    #
	//     #    #####    #####     #     #####
	//     #    #             #    #          #
	//     #    #       #     #    #    #     #
	//     #    #######  #####     #     #####
	/*
	http://gv.anthonylohou.com/BucketC/get/1?callback=test
	http://gv.anthonylohou.com/BucketC/add/1/1/12
	http://gv.anthonylohou.com/BucketC/get/1?callback=test
	http://gv.anthonylohou.com/BucketC/add/1/1/12
	http://gv.anthonylohou.com/BucketC/get/1?callback=test
	http://gv.anthonylohou.com/BucketC/add/1/2/12
	http://gv.anthonylohou.com/BucketC/get/1?callback=test
	http://gv.anthonylohou.com/BucketC/delete/1/2
	http://gv.anthonylohou.com/BucketC/get/1?callback=test
	http://gv.anthonylohou.com/BucketC/change/1/1/5
	http://gv.anthonylohou.com/BucketC/get/1?callback=test

	*/
}
