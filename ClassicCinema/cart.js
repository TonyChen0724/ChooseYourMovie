/**
 * Shopping cart functions for the category pages
 *
 * Created by: Steven Mills, 09/04/2014
 * Last Modified by: Steven Mills 08/08/2016
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
    /*function addToCart() {
        var itemList, newItem;
        itemList = Cookie.get("cart");
        if (itemList) {
            itemList = JSON.parse(itemList);
        } else {
            itemList = [];
        }
        newItem = {};
        newItem.title = this.parentNode.parentNode.getElementsByTagName("h3")[0].innerHTML;
        newItem.price = this.parentNode.getElementsByClassName("price")[0].innerHTML;
        jshint +W040
        itemList.push(newItem);
        Cookie.set("cart", JSON.stringify(itemList));
    }*/

    function addToCart() {
        var itemList, newItem;
        itemList = Cookie.get("cart");
        if (itemList) {
            itemList = JSON.parse(itemList);
        } else {
            itemList = [];
        }
        newItem = {};
        newItem.title = $(this).parent().parent().find("h3").html();
        newItem.price = $(this).parent().parent().find(".price").html();

        itemList.push(newItem);
        Cookie.set("cart", JSON.stringify(itemList));
    }

    /**
     * Setup function for the cart functions
     *
     * Gets a list of 'Buy' buttons, and sets them to call addToCart when clicked
     */
    pub.setup = function () {
        // var buyButtons, b;
        // buyButtons = document.getElementsByClassName("buy");
        // for (b = 0; b < buyButtons.length; b += 1) {
        //     buyButtons[b].onclick = addToCart;
        // }
        $(".buy").click(addToCart);
    };

    // Expose public interface
    return pub;
}());

// The usual onload event handling to call Cart.setup
// if (window.addEventListener) {
//     window.addEventListener('load', Cart.setup);
// } else if (window.attachEvent) {
//     window.attachEvent('onload', Cart.setup);
// } else {
//     window.alert("Could not attach 'Cart.setup' to the 'window.onload' event");
// }
$(document).ready(Cart.setup);