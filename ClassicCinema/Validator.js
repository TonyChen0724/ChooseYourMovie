/**
 * Created by xichen on 8/2/17.
 */
//todo: finish checkKeyIsDigit function
var SampleValidator = (function() {
    "use strict";

    var pub = {};

    // check if string empty
    function checkNotEmpty(textValue) {
        return textValue.trim().length > 0;
    }

    // check if it contains digits
    function checkDigits(textValue) {
        var pattern = /^[0-9]+$/;
        return pattern.test(textValue);
    }

    // check if a string's length is in given range
    function checkLength(textValue, minLength, maxLength) {
        var length = textValue.length;
        if (maxLength === undefined) {
            maxLength = minLength;
        }
        return (length >= minLength && length <= maxLength);
    }

    //check if a key is digit or not
    function checkKeyIsDigit(event) {

    }


})