/**
 * Created by xichen on 8/1/17.
 */


var ShowCookie = (function() {
    var pub = {};
    var carts;
    var sum = 0;

    function printout() {

            carts = JSON.parse(window.Cookie.get("cart"));
            if (carts === null) {
                var form = document.getElementById("checkoutForm");
                form.style.display = 'none';
                return "<p> you haven't bought anything </p>";
            }
            var numbers = carts.length;

            // <p> name: price<p>
            var statement = "<table> <tr><th>title</th><th>price</th></tr>";
            for (var i = 0; i < numbers; i++) {
                statement += "<tr><td>" + carts[i].title + "</td><td> " + carts[i].price + "</td></tr>";
                sum += parseFloat(carts[i].price);
            }
            statement += "<p> the sum of prices is " + sum + "</p>";



        document.getElementById("cartInfo").innerHTML = statement;

    }

    pub.setup = function() {
        printout();
    };
    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', ShowCookie.setup);
} else if (window.attachEvent) {
    window.attachEvent('onload', ShowCookie.setup);
} else {
    window.alert("Could not attach 'ShowCookie.setup' to the 'window.onload' event");
}