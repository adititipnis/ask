$(document).ready(function () {

    $(".overlay").hide();

    $(".navigation-narrow").on("click", function () {
        $(".overlay").show();
    })

    $(".closebtn").on("click", function () {
        $(".overlay").hide();
    })
})