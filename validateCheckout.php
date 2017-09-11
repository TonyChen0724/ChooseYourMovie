<?php
/**
 * Created by PhpStorm.
 * User: xichen
 * Date: 9/11/17
 * Time: 7:27 PM
 */
$scriptList = array('js/jquery-3.1.0.min.js', 'js/cookies.js');
include("privatePHP/header.php");
?>




<div id="main">
    <?php
    include("privatePHP/validationFunctions.php");

    $deliveryName = htmlentities($_POST['deliveryName']);
    $deliveryEmail = htmlentities($_POST['deliveryEmail']);
    $deliveryAddress1 = htmlentities($_POST['deliveryAddress1']);
    $deliveryAddress2 = htmlentities($_POST['deliveryAddress2']);
    $deliveryCity = htmlentities($_POST['deliveryCity']);
    $deliveryPostcode = htmlentities($_POST['deliveryPostcode']);

    function checkDeliveryName($deliveryName) {
        if (isEmpty($deliveryName)) {
            echo "You must enter a name to deliver to"."<br>";
        }
    }


    function checkDeliveryEmail($deliveryEmail) {
        if (isEmpty($deliveryEmail)) {
            echo "You must enter an email address"."<br>";
        } else if (!isEmail($deliveryEmail)) {
            echo "That doesn't look like a valid email address"."<br>";
        }
    }


    function checkDeliveryAddress($deliveryAddress) {
        if (isEmpty($deliveryAddress)) {
            echo "You must enter an address to deliver to"."<br>";
        }
    }


    function checkDeliveryCity($deliveryCity) {
        if (isEmpty($deliveryCity)) {
            echo "You must enter a city to deliver to"."<br>";
        }
    }


    function checkDeliveryPostcode($deliveryPostcode) {
        if (isEmpty($deliveryPostcode)) {
            echo "You must enter a postcode"."<br>";
        } else if (!isDigits($deliveryPostcode) || !checkLength($deliveryPostcode, 4)) {
            echo "Postcodes must be exactly 4 digits long"."<br>";
        }
    }


    $cardType = htmlentities($_POST['cardType']);
    $cardNumber = htmlentities($_POST['cardNumber']);
    function checkCreditCardNumber($cardType, $cardNumber) {

        if (isEmpty($cardNumber)) echo "Please enter card number."."<br>";
        else if (!checkCardNumber($cardType, $cardNumber)) {
            if ($cardType == "amex") echo "American Express card numbers must be 15 digits long and start with a '3'"."<br>";
            if ($cardType == "mcard") echo "MasterCard numbers must be 16 digits long and start with a '5'"."<br>";
            if ($cardType == "visa") echo "Visa card numbers must be 16 digits long and start with a '4'"."<br>";

        }
    }


    $cardMonth = htmlentities($_POST['cardMonth']);
    $cardYear = htmlentities($_POST['cardYear']);
    function checkCreditCardDate($cardMonth, $cardYear) {
        if (!checkCardDate($cardMonth, $cardYear)) {
            echo "Card Date invalid"."<br>";
        }
    }



    checkDeliveryName($deliveryName);
    checkDeliveryEmail($deliveryEmail);
    checkDeliveryAddress($deliveryAddress1);
    checkDeliveryCity($deliveryCity);
    checkDeliveryPostcode($deliveryPostcode);
    if (isEmpty($cardVerify)) {
        echo "Please enter card verification code."."<br>";
    } else if (!checkCardVerification($cardType, $cardVerify)) {
        echo "Please enter the valide verification code."."<br>";
    }
    checkCreditCardDate($cardMonth, $cardYear);
    checkCreditCardNumber($cardType, $cardNumber);



    ?>
</div>

<?php include("footer.php");?>
</body></html>
