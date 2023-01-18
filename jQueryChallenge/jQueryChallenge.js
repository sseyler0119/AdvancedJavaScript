// $(document).ready() method
$(document).ready(function() {
    // use element selector to hide all p tags
    $("h5").hide(); // hide h5 tag by default
    // use click() method
    $("button").click(function() {
        $("p").hide(); // use hide() method
        $("h5").show(); // show h5 after hiding p tags, use show() method
    });

    // class selector
    $(".buttonTest").click( function () {
        $(".color").css("color", "blue");
    });

    // id selector
    $("#testme").click(function() {
        $("#bold").css({"font-size": "300%", "font-weight": "bold"});
    });

    // $("ul li: first-child") selector
    $(".child").click(function () {
        $("ul li:first-child").css({"font-weight":"bold", "color": "red"});
    });

    // hover() method
    $(".hover").hover( function() {
        $(".hover").css({"background-color":"blue", "color": "yellow"});
    });

    // blur() method
    $(".blur").blur(function() {
        // change input field to black with white text and 150% font size
        $(this).css({"background-color": "black", "color": "white", "font-size": "150%"});
    });

    // toggle
    $(".toggle").click( function () {
        $(".toggleMe").toggle();
    });

    // fadeOut
    $(".fade").click(function () {
        $("#red").fadeOut();
        $("#green").fadeOut("2000");
        $("#blue").fadeOut("slow");
    });

    // slideDown()
    $(".flip").click(function (){
        $(".slide").slideDown(5000);
    });

    // animate()
    $(".animate").click(function() {
        $(".animation").animate( {
            left: '250px',
            opacity: '0.5',
            height: '250px',
            width: '250px'
        });
    });

    // stop()

    // slideDown()
    $(".stop").click(function (){
        $(".slide").stop();
    });

    // callback 
    $(".callback1").click(function() {
        $(".callback").hide("slow", function () {
            alert("Voila! The paragraph will be gone when you close this alert!");
        });
    });

    // method chainging
    $(".chain").click(function() {
        $(".chain1").css("color", "purple").slideUp(3000).slideDown(2000);
    });

    // set attribute and change text
    $(".changeVal").click(function() {
        $("#hrefLink").attr("href", "https://www.google.com");
        $("#textChange").html("<b>Google!</b>");

    });

    // use get content to get text()
    $(".getAttrib").click(function() {
        alert("Here's our list: " + $(".list").text());
    });
});






