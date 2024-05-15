<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fname"];
    $email = $_POST["fmail"];
    $message = $_POST["fmessage"];
    $vision = $_POST["fvision"];
    
    $to = "nczani@gmail.com";
    $subject = "New contact from Dupin Website";
    
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:$message\n";
    $email_body .= "Vision:\n$vision";
    
    // Enviar o email
    if (mail($to, $subject, $email_body)) {
        echo "Message sent successfully!";
    } else {
        echo "Your message could not be sent. Please, try again.";
    }
} else {
    echo "Error: This script cannot be accessed directly.";
}
?>
