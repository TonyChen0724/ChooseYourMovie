/**
 * Show/Hide movie details on the Classic Cinema site.
 *
 * Created by: Steven Mills, 09/04/2014
 * Last Modified by: Steven Mills 08/08/2016
 */

/**
 * Module pattern for Show/Hide functions
 */
var ShowHide = (function () {
    "use strict";

    var pub;

    // Public interface
    pub = {};

    /**
     * Show or hide the details of a given movie
     *
     * Which movie is determined by a mouse click, accessed via 'this'.
     */
    function showHideDetails() {
        var paragraphs, p, images, i;
        /* jshint -W040 */
        paragraphs = this.parentNode.getElementsByTagName("p");
        /* jshint +W040 */
        for (p = 0; p < paragraphs.length; p += 1) {
            if (paragraphs[p].style.display === "none") {
                paragraphs[p].style.display = "block";
            } else {
                paragraphs[p].style.display = "none";
            }
        }
        /* jshint -W040 */
        images = this.parentNode.getElementsByTagName("img");
        /* jshint +W040 */
        for (i = 0; i < images.length; i += 1) {
            if (images[i].style.display === "none") {
                images[i].style.display = "block";
            } else {
                images[i].style.display = "none";
            }
        }
    }

    /**
     * Setup function for the ShowHide
     *
     * Attaches showHide as a callback when movie titles are clicked on.
     */
    pub.setup = function () {
        var films, f, title;
        films = document.getElementsByClassName("film");
        for (f = 0; f < films.length; f += 1) {
            title = films[f].getElementsByTagName("h3")[0];
            title.onclick = showHideDetails;
            title.style.cursor = "pointer";
        }
    };

    // Expose public interface
    return pub;
}());

// The usual onload event handling to call ShowHide.setup
if (window.addEventListener) {
    window.addEventListener('load', ShowHide.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', ShowHide.setup);
} else {
    window.alert("Could not attach 'ShowHide.setup' to the 'window.onload' event");
}