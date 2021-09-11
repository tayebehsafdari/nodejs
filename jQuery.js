jQuery(document).ready(function ($) {
    console.log("window1: ", window);
    console.log("window: ", $(window).width());
    console.log("window: ", $(window).height());
    console.log("this1: ", this);
    console.log("this1: ", $(document).width(100));
    console.log("this1: ", $(document).height(100));
    $("#demo").click(function () {
        $(this).toggle("slow", function () {
            console.log("this hide: ", this);
        });
    });
    $(".my-p").click(function () {
        // $(this).hide();
        console.log("this text: ", $(this).text());
        console.log("this html: ", $(this).html());
        $(this).text(function (x, y) {
            console.log("this x: ", x);
            console.log("this y: ", y);
        });
    });
    $("section").on("click", function () {
        console.log("this on: ", this);
        $(this).hide();
    });
    $("#btn").click(function () {
        $("#demo").load("https://jsonplaceholder.typicode.com/users", function (responseTxt, statusTxt, xhr) {
            console.log("responseTxt: ", responseTxt);
            console.log("statusTxt: ", statusTxt);
            console.log("xhr: ", xhr);
            if (statusTxt === 'success') {
                console.log('External content loaded successfully!');
            }
            if (statusTxt === 'error') {
                console.log(`Error: ${xhr.status} : ${xhr.statusText}`);
            }
        });
        $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
});

jQuery(function () {
    console.log("this2: ", this);
});
