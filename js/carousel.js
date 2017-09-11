/**
 * Image Carousel for the front page of the Classic Cinema site.
 *
 * Created by: Steven Mills, 09/04/2014
 * Last Modified by: Steven Mills 08/08/2016
 */

/**
 * Module pattern for Carousel functions
 */
var Carousel = (function () {
    "use strict";

    var movieList, movieIndex, pub;

    // Public interface
    pub = {};

    /**
     * Constructor function for MovieCategory objects
     *
     * These objects represent movie categories as shown on the front page.
     * Note that as a constructor this function does not return a value.
     * Instead it should be called using the form: new MovieCategory(...);
     *
     * @param title The title of the category to display
     * @param image The image to display for the category
     * @param page The category page to link to
     */
    function MovieCategory(title, image, page) {
        /* Note that we can use a closure here to hide the internals */
        var title_ = title;
        var image_ = image;
        var page_ = page;
        this.makeHTML = function () {
            var html;
            html = "<a href='" + page_ + "'>";
            html += "<img src='" + image_ + "'>";
            html += "<br>" + title_;
            html += "</img>";
            html += "</a>";
            return html;
        };
    }

    /**
     * Update the carousel to the next category
     */
    function nextCategory() {
        $("#carousel").html(movieList[movieIndex].makeHTML());
        movieIndex += 1;
        if (movieIndex >= movieList.length) {
            movieIndex = 0;
        }
    }
    /**
     * Setup function for the carousel
     *
     * Creates a list of MovieCategory objects, and starts the timer
     */
    pub.setup = function () {
        movieList = [];
        movieList.push(new MovieCategory("Classics", "images/Metropolis.jpg", "classic.php"));
        movieList.push(new MovieCategory("Science Fiction and Horror", "images/Plan_9_from_Outer_Space.jpg", "scifi.php"));
        movieList.push(new MovieCategory("Alfred Hitchcock", "images/Vertigo.jpg", "hitchcock.php"));
        movieIndex = 0;
        nextCategory();
        setInterval(nextCategory, 2000);
    };

    pub.nextCategory = nextCategory;

    // Expose public interface
    return pub;
}());

$(document).ready(Carousel.setup);
