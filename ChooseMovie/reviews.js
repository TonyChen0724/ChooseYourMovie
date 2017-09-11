/**
 * Created by xichen on 8/10/17.
 */

var Reviews = (function() {
    var pub = {};

    function showReviews() {
        window.console.log("Show Reviews called");
    }

    pub.setup = function() {
        jQuery(".film").append("<input type='button' class='showReviews' value='Show Reviews'> <div class='review'></div>");
        $(".showReviews").click(showReviews);
    }
    return pub;
}());

$(document).ready(Reviews.setup);



