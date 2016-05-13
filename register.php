<?php
	DEFINE ("DB_USER", "admin");
	DEFINE ("DB_PASSWORD", "pokemanz2552");
	DEFINE ("DB_HOST", "localhost");
	DEFINE ("DB_NAME", "vengeful_spirit");	
	
	//retrieve post data
	$postdata = file_get_contents("php://input");
	$req = json_decode($postdata);
	
	//connect to the database
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	
	if($conn->connect_error){
		die('Connection failed: '.$conn->connect_error);
	}
	
	$reg = ("INSERT INTO login (account_id, userid, user_pass, sex, email, 
		group_id, state, unban_time, expiration_time, logincount, lastlogin, last_ip, birthdate, character_slots, pincode, pincode_change, vip_time, old_group)
		VALUES ('2000001', '$req->username', '$req->password', '$req->sex', '$req->email',
		'99', '0', '0', '0', '0', '0000-00-00 00:00:00', '', '0000-00-00', '9', '', '0', '0', '0')");
		
	if($conn->query($reg) === TRUE){
		echo "User creation was successful";
	}
	else{
		echo "ERROR: ". $reg . "<br>" . $conn->error;
	}
	
	$conn->close();
?>