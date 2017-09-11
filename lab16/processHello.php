<html>

<head>
    <title>Hello from PHP</title>
    <meta charset="utf-8">
</head>

<body>
<p><?php
    if (!isset($_GET['user'])) {
        echo "worked";
        header("Location: helloForm.html");
        exit;
    }
    $user = htmlentities($_GET['user']);
    echo"Hello " . $user . "!";
    ?></p>
</body>
</html>