<?php
if (strlen(trim($_GET['user'])) > 0) {
    $user = htmlentities($_GET['user']);
    echo"Hello " . $user . "!";
} else {
    ?>
<form name="myForm" action="<?php echo $_SERVER['PHP_SELF'];?>" method="GET">
    User:<input type="text" name="user"> <br>
    <input type="submit" name="submit" value="Submit" >
</form>
<?php } ?>
