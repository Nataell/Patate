<?

/**
* Modéle qui permet de manipuler le panier et les commandes<hr />
* Functions
* <ul>
*	<li>Ajouter un produit dans le panier</li>
*	<li>Supprimer un produit dans le panier</li>
*	<li>Modifier la quantité d'un produit dans le panier</li>
*	<li>Vider la totalité du panier</li>
* 	<li>Passer une commande</li>
* </ul>
* @author trilunaire
* @version 1.0
*/
defined('BASEPATH') OR exit('No direct script access allowed');
class BucketM extends CI_Model{
  public function __construct(){
    parent::__construct();
    $this->load->database();
  }

  public function getBucket($idUser)
  {
	return $this->db
				->select('name,seller_id,price,quantity,picture,id_product,id as id_user')
				->from('v_bucket')
				->where('id',$idUser)
				->order_by('name','ASC')
				->get()->result_array();
  }

	public function getSellers($idUser){
		return $this->db
				 ->select('seller_id')
				 ->distinct()
				 ->from('v_bucket')
				 ->where('id',$idUser)
				 ->get()->result_array();
	}

  public function getBucketBySellerId($idUser, $sellerID){
	  return $this->db
				  ->select('name,seller_id,price,quantity,picture,id_product,id as id_user')
				  ->from('v_bucket')
				  ->where('id',$idUser)
				  ->where('seller_id',$sellerID)
				  ->get()->result_array();
  }

  public function addProductToBucket($idUser, $idProd, $qty)
  {
	$newProduct = array(
		'id' => $idUser,
		'id_product' => $idProd,
		'quantity' => $qty
	);
	$quantityIfExist = $this->db->select('quantity')
			->from('_bucket')
			->where('id',$idUser)
			->where('id_product',$idProd)
			->get()->result_array();
	if(!empty($quantityIfExist)){ //si on avait déjà ajouté le produit, on met à jour la quantité
		$newQty = $quantityIfExist[0]['quantity']+$qty;
		return $this->modifyProdQty($idUser,$idProd,$newQty);
	}
	else{
		$this->db->insert('_bucket',$newProduct);
		return "insert product";
	}
  }

  public function modifyProdQty($idUser, $idProd, $newQty){
	  $this->db->set('quantity',$newQty);
	  $this->db->where('id',$idUser);
	  $this->db->where('id_product',$idProd);
	  $this->db->update('_bucket');
	  return "modify quantity";
  }

  public function removeProd($idUser,$idProd){
	  $prodToRemove = array(
		'id' => $idUser,
		'id_product' => $idProd
	  );
	  return $this->db->delete('_bucket', $prodToRemove);
  }

  public function emptyBucket($idUser){
	  return $this->db->delete('_bucket', array('id'=>$idUser));
  }

  public function sendCommand($idUser, $commandInfo){
	  //insert bucket in command table
	  if($this->db->insert('_commande',$commandInfo)){ //insert the data
		  return $this->db->insert_id();//return the command id (used for other query)
	  }
	  else{ //something wrong
		  return -1;
	  }
  }

  public function sendCommandDetail($details){
	  $this->db->insert('_commande_detail',$details);
  }
}

?>
