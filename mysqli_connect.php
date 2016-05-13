<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

DEFINE ("DB_USER", "admin");
DEFINE ("DB_PASSWORD", "pokemanz2552");
DEFINE ("DB_HOST", "localhost");
DEFINE ("DB_NAME", "vengeful_spirit");

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die("could not connect to MySql".mysqli_connect_error());

$result = $dbc->query("SELECT account_id, userid, email FROM login")

$outp = '{"records:"['.$outp']}';

$dbc->close();

echo($outp);
?>