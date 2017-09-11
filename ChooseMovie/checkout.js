/**
 * Checkout display functions for the Classic Cinema site
 *
 * Created by: Steven Mills, 09/04/2014
 * Last Modified by: Steven Mills 08/08/2016
 */

/* global Cookie */

/**
 * Module pattern for Checkout functions
 */
var Checkout = (function () {
    "use strict";

    var pub;

    // Public interface
    pub = {};

    /**
     * Create an HTML table representing the current cart
     *
     * @param itemList an array of items to display
     * @return {string} HTML representing itemList as a table
     */
    function makeItemHTML(itemList) {
        var html, totalPrice;
        html = "<table>";
        html += "<tr><th>Title (Year)</th><th>Price</th></tr>";
        totalPrice = 0;
        itemList.forEach(function (item) {
            html += "<tr><td>" + item.title + "</td><td class='money'>" + item.price + "</td></tr>";
            totalPrice += parseFloat(item.price);
        });
        // Fix rounding errors
        totalPrice = Math.round(totalPrice * 100) / 100;
        html += "<tr><td>Total Price:</td><td class='money'>" + totalPrice + "</td></tr>";
        html += "</table>";
        return html;
    }

    /**
     * Setup function for the Checkout
     *
     * Fetches the current cart from the cookie, and displays it.
     * If there is no current cart, display a message to say so.
     */
    pub.setup = function () {
        var itemList, cartElement;
        itemList = Cookie.get("cart");
        cartElement = document.getElementById("cart");
        if (itemList) {
            itemList = JSON.parse(itemList);
            cartElement.innerHTML = makeItemHTML(itemList);
        } else {
            cartElement.innerHTML = "<p>There are no items in your cart</p>";
            document.getElementById("checkoutForm").style.display = "none";
        }
    };

    // Expose public interface
    return pub;
}());

// The usual onload event handling to call Checkout.setup
if (window.addEventListener) {
    window.addEventListener('load', Checkout.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', Checkout.setup);
} else {
    window.alert("Could not attach 'Checkout.setup' to the 'window.onload' event");
}