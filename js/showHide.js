/**
 * Show/Hide movie details on the Classic Cinema site.
 *
 * Created by: Steven Mills, 09/04/2014
 * Last Modified by: Steven Mills 04/09/2016
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
     * Setup function for the ShowHide
     *
     * Attaches showHide as a callback when movie titles are clicked on.
     */
    pub.setup = function () {
        $(".film").each(function() {
            var title = $($(this).find("h3")[0]);
            title.on("click", function() {
                $(this).siblings().toggle();
            });
            title.css({cursor: "pointer"});
        });
    };

    // Expose public interface
    return pub;
}());

$(document).ready(ShowHide.setup);