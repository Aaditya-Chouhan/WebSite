<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$favouriteAnimal = $_POST['favouriteAnimal'];
	$email = $_POST['email'];
	$feedback = $_POST['feedback'];

	// Database connection
	$conn = new mysqli('localhost','root','','feedback');
	if($conn->connect_error){
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstName, lastName, favouriteAnimal, email, feedback) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("sssss", $firstName, $lastName, $favouriteAnimal, $email, $feedback);
		$execval = $stmt->execute();
		echo $execval;
		echo "Thank you for your feedback. Your inputs have been recorded";
		$stmt->close();
		$conn->close();
	}
?> 