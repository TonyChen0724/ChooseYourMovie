/**
 * Created by xichen on 8/10/17.
 */
function doAjax() {
    $("#helloResult").load("ajaxResponse.html");
}

function setup() {
    $("#helloButton").click(doAjax);
}

$(document).ready(setup);