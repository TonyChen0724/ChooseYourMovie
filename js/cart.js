/**
 * Shopping cart functions for the category pages
 *
 * Created by: Steven Mills, 09/04/2014
 * Last Modified by: Steven Mills 04/09/2016
 */

/* global Cookie */

/**
 * Module pattern for Cart functions
 */
var Cart = (function () {
    "use strict";

    var pub;

    // Public interface
    pub = {};

    /**
     * Add items to the cart
     *
     * This function is called when a 'Buy' button is clicked.
     * The cart itself is stored in a cookie, which is updated each time this function is called.
     */
    function addToCart() {
        var itemList, newItem, film;
        itemList = Cookie.get("cart");
        if (itemList) {
            itemList = JSON.parse(itemList);
        } else {
            itemList = [];
        }
        /* jshint -W040 */
        film = $($(this).parent().parent());
        /* jshint +W040 */

        newItem = {};
        newItem.title = $(film.find("h3")[0]).html();
        newItem.price = $(film.find(".price")[0]).html();
        itemList.push(newItem);
        Cookie.set("cart", JSON.stringify(itemList));
    }

    /**
     * Setup function for the cart functions
     *
     * Gets a list of 'Buy' buttons, and sets them to call addToCart when clicked
     */
    pub.setup = function () {
        var buyButtons, b;
        $(".buy").on("click", addToCart);
    };

    // Expose public interface
    return pub;
}());

$(document).ready(Cart.setup);