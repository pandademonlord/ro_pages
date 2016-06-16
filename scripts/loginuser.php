<?php
	DEFINE ("DB_HOST", "localhost");
	DEFINE ("DB_USER", "admin");
	DEFINE ("DB_PASSWORD", "pokemanz2552");
	DEFINE ("DB_NAME", "vengeful_spirit");	
	
	//retrieve data
	$data = file_get_contents("php://input");
	$req = json_decode($data);
	
	$conn = new sqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	
	$q = ("SELECT userid, user_pass, account_id FROM login WHERE userid=$data->username AND user_pass=$data->password");
	
	$result = $conn->query($q);
	
	if($result->num_rows == 1){
		echo $result;
	}
	else{
		echo 'Nah bruh'
	}
	
	$conn->close();
?>