/**
 * Created by xichen on 7/19/17.
 */
function sayHello() {
    var name;
    var target;
    name = document.getElementById("name").value;


    if (name.length === 0) {
        name = "World";
    }
    target = document.getElementById("result")
    target.innerHTML = "Hello, " + name + "!";
    return false;
}

function setup() {
    var button;
    button = document.getElementById("hello");
    button.onclick = sayHello;
    var formelements = document.getElementsByTagName("form");
    formelements.onsubmit = sayHello();
}

if (document.getElementById) {
    window.onload = setup;
}