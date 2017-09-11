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
     * Note also that this version differs slightly from that given in the labs.
	 * A closure is used to hide the internal state. 
	 * 
     * @param title The title of the category to display
     * @param image The image to display for the category
     * @param page The category page to link to
     */
    function MovieCategory(title, image, page) {
        var title_ = title;
        var image_ = image;
        var page_ = page;
        this.makeHTML = function () {
            var html;
            html = "<figure><a href='" + page_ + "'>";
            html += "<img src='" + image_ + "'>";
            html += "<figcaption>" + title_ + "</figcaption>";
            html += "</a></figure";
            return html;
        };
    }

    /**
     * Update the carousel to the next category
     */
    function nextCategory() {
        var carousel;
        carousel = document.getElementById("carousel");
        carousel.innerHTML = movieList[movieIndex].makeHTML();
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
        movieList.push(new MovieCategory("Classics", "images/Metropolis.jpg", "classic.html"));
        movieList.push(new MovieCategory("Science Fiction and Horror", "images/Plan_9_from_Outer_Space.jpg", "scifi.html"));
        movieList.push(new MovieCategory("Alfred Hitchcock", "images/Vertigo.jpg", "hitchcock.html"));
        movieIndex = 0;
        nextCategory();
        setInterval(nextCategory, 2000);
    };

    // Expose public interface
    return pub;
}());

// The usual onload event handling to call Carousel.setup
if (window.addEventListener) {
    window.addEventListener('load', Carousel.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Carousel.setup);
} else {
    window.alert("Could not attach 'Carousel.setup' to the 'window.onload' event");
}