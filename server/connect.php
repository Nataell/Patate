<?php
/**
* Modéle qui permet de manipuler la base de données et de renvoyer des informations<hr />
* Functions
* <ul>
*
* </ul>
* @author trilunaire
* @version 1.0
*/

// initialise la connection
function dbConnect(){
  $dsn = 'mysql:dbname=dbo672075027;host=db672075027.db.1and1.com';
  $user = 'dbo672075027';
  $password = '';

  try{
	$dbh = new PDO($dsn, $user, $password);
  }catch (PDOException $e) {
	echo 'Erreur de la connection: '. $e->getMessage();
  }
  return $dbh; //permettra d'avoir les infos de la base de données
}

function get_foodList($dbh){
  $foodList = array();
  foreach ($dbh->query("select id,name from v_food", PDO::FETCH_ASSOC) as $row) {
	$foodList[]=$row; //les compétences ont pour clé leur catégorie (plus facile pour l'affichage);
  }
  return $foodList;
}

function get_specificFood($dbh, $idFood){
	return $dbh->query("select * from food WHERE id=".$idFood, PDO::FETCH_ASSOC);
}

function get_specificMeal($dbh, $idMeal){
	return $dbh->query("select * from meal WHERE id=".$idMeal, PDO::FETCH_ASSOC);
}
?>
