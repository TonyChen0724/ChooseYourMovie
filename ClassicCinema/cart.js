/**
 * Created by xichen on 7/27/17.
 */
// todo: add obj to an array stored in cookie
var Cart = (function () {
    var pub = {};
    var cart = [];
    function addToCart() {
        var temptObj = new MovieObject(this.parentNode.parentNode.getElementsByTagName("h3")[0].innerHTML,
            this.parentNode.parentNode.getElementsByClassName("price")[0].innerHTML
        );
        if (window.Cookie.get("cart") === null) {
            cart.push(temptObj);
            window.Cookie.set("cart", JSON.stringify(cart)); // create new cart
        } else {
            cart = JSON.parse(window.Cookie.get("cart")); // load old cart cuz it's exist
            cart.push(temptObj);
            window.Cookie.set("cart", JSON.stringify(cart));
        }
    }

    function MovieObject(t, p){
        this.title = t;
        this.price = p;
    }

    pub.setup = function() {
        var f;

        var buybutton = document.getElementsByClassName("buy");
        for (f = 0; f < buybutton.length; f+=1) {
            buybutton[f].onclick = addToCart;
            buybutton[f].style.display = "pointer";
        }
    };
    return pub;
}());

if (window.addEventListener) {
    window.addEventListener('load', Cart.setup);
}
else if (window.attachEvent) {
    window.attachEvent('onload', Cart.setup);
}
else {
    alert("Could not attach 'cart.setup' to the 'window.onload' event");
}