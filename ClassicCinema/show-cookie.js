/**
 * Created by xichen on 8/1/17.
 */


var ShowCookie = (function() {
    var pub = {};
    var carts = [];

    function printout() {
        var body = document.getElementsByTagName("body");
        this.makeHTML = function() {
            carts = JSON.parse(window.Cookie.get("cart"));
            var numbers = carts.length;
            // <p> name: price<p>
            var statement = "";
            for (var i = 0; i < numbers; i++) {
                statement += "<p>" + carts[i].title + " " + carts[i].price + "</p>";
            }
            alert(carts[i].title);
            alert(carts[i].price);
            return statement;
        };
        body.innerHTML = this.makeHTML();
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
    alert("Could not attach 'Carousel.setup' to the 'window.onload' event");
}