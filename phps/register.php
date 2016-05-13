<?php
	// echo('anyone listening');
	$postdata = file_get_contents("php://input");
	$req = json_decode($postdata);
	
	echo($req);
?>