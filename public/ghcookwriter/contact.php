<?php

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contact.html");
    exit();
}

// Honeypot Spam Protection
if (!empty($_POST['company'])) {
    exit("Spam detected.");
}

// Sanitize Inputs
$name = htmlspecialchars(strip_tags($_POST['name'] ?? ''));
$email = str_replace(array("\r", "\n"), '', $_POST['email'] ?? '');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(strip_tags($_POST['subject'] ?? ''));
$message = htmlspecialchars(strip_tags($_POST['message'] ?? ''));

// Validate Email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit("Invalid email format.");
}

// MUST be a real email created inside cPanel
$to = "info@ghcookwriter.com";

$email_subject = "New Website Message: $subject";

// HTML Email Body
$body = "
<html>
<head>
    <meta charset='UTF-8'>
</head>
<body style='font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;'>
    <div style='background:#ffffff; padding:20px; border-radius:6px;'>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br>$message</p>
        <hr>
        <p style='font-size:12px;color:#777;'>
            Sent from ghcookwriter.com contact form
        </p>
    </div>
</body>
</html>
";

// Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: ghcookwriter info <info@ghcookwriter.com>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send Mail
if (mail($to, $email_subject, $body, $headers)) {
    header("Location: thank_you.html");
    exit();
} else {
    echo "<div class='form-error'>Email failed to send. Please try again later.</div>";
}

?>