<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserManager extends CI_Controller {

	public function index()
	{
    if($this->session->userdata('logged')){
  		$data["page_title"] = "Gestion du compte";
  		$data["userdata"] = $this->User->getUser($this->session->userdata('id_user'));
  		$this->load->view('header',$data);
  		$this->load->view('user_manager',$data);
    }else{
      header('location:http://gv.anthonylohou.com/');
    }
	}
}
