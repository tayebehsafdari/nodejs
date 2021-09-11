console.log("window2: ", window);

var jq = $.noConflict();

jQuery(document).ready(function () {
    jQuery("p").click(function () {
        console.log(this);
    });
});