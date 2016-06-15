<?php
	DEFINE ("DB_USER", "admin");
	DEFINE ("DB_PASSWORD", "pokemanz2552");
	DEFINE ("DB_HOST", "localhost");
	DEFINE ("DB_NAME", "vengeful_spirit");

	//connect to the database
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	
	if($conn->connect_error){
		die('Connection failed: '.$conn->connect_error);
	}
	
	$del = ("DELETE FROM login WHERE account_id='2000001'");
	
	if($conn->query($del) === TRUE){
		echo "user was deleted";
	}
	else{
		echo "ERROR: ". $del . "<br>" . $conn->error;
	}
	
	$conn->close();
?>