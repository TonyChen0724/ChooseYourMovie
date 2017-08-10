/**
 * Created by xichen on 7/19/17.
 */
function showHideDetails() {
    "use strict";
    var paragraphs, p;
    // paragraphs
    /*jshint -W040*/
    paragraphs = this.parentNode.getElementsByTagName("p");
    var image = this.parentNode.getElementsByTagName("img")[0];
    /*jshint +W040*/
    for (p = 0; p < paragraphs.length; p+=1) {
        if (paragraphs[p].style.display === "none") {
            paragraphs[p].style.display = "block";
            image.style.display = "block";
        } else {
            paragraphs[p].style.display = "none";
            image.style.display = "none";
        }
    }

}

function setup() {
    "use strict";
    var films, f, title;
    films = document.getElementsByClassName("film");
    for (f = 0; f < films.length; f+=1) {
        title = films[f].getElementsByTagName("h3")[0];
        title.onclick = showHideDetails;
        title.style.cursor = "pointer";
    }
}

if (document.getElementById) {
    window.onload = setup;
}