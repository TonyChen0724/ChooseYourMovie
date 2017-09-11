/**
 * Review functions for the Classic Cinema site.
 *
 * Created by: Steven Mills, 04/09/2016
 * Last Modified by: Steven Mills 04/09/2016
 */

/* global Cookie */

/**
 * Module pattern for Review functions
 */
var Reviews = (function(){
    "use strict";

    // Public interface
    var pub = {};

    /**
     * Parse review XML, creating an HTML Definition List
     *
     * @param xmlData XML to parse
     * @return {object} Definition list of the reviews
     */
    function parseReviews(xmlData) {
        var reviewList = $("<dl>");
        $(xmlData).find("review").each(function() {
            var user = $(this).find("user")[0].textContent;
            var rating = $(this).find("rating")[0].textContent;
            reviewList.append("<dt>" + user + "</dt>");
            reviewList.append("<dd>" + rating + "</dd>");
        });
        return reviewList;
    }

    /**
     * Fetch review XML and display the reviews.
     *
     * An Ajax request is used to get the XML from the server.
     * If the XML cannot be retrieved, or if there are no reviews,
     * then a short message is displayed saying there are no reviews
     */
    function showReviews() {
        var imgFile, xmlFile, target;
        /* jshint -W040 */
        imgFile = $(this).parent().find("img")[0].src;
        target = $(this).parent().find(".review")[0];
        /* jshint +W040 */
        xmlFile = imgFile.replace("jpg", "xml").replace("/images/", "/reviews/");
        $.ajax({
            type: "GET",
            url: xmlFile,
            cache: false,
            success: function(xmlData) {
                if ($(xmlData).find("review").length === 0) {
                    $(target).empty();
                    $(target).append("<p>No reviews found<p>");
                } else {
                    $(target).empty();
                    $(target).append(parseReviews(xmlData));
                }
            },
            error: function() {
                // Couldn't get the review XML, so no reviews available
                $(target).empty();
                $(target).append("<p>No reviews found<p>");
            }
        });
    }

    /**
     * Setup function for sample validation.
     *
     * Add a button to show the reviews, and set up events to handle pressing of the buttons.
     */
    pub.setup = function() {
        $(".film").append("<input type='button' class='showReviews' value='Show Reviews'> <div class='review'></div>");
        $(".showReviews").click(showReviews);
    };

    // Expose public interface
    return pub;

}());

$(document).ready(Reviews.setup);