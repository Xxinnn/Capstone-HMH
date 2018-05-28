/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

//$(function() {
//    $('a.page-scroll').bind('click', function(event) {
//        var $anchor = $(this);
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top
//        }, 600, 'easeInOutExpo');
//        event.preventDefault();
//    });
//});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        });
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// ----------------------------------------
    // Sticky double diamond

    // Setting up diamonds for research section
    var sectionHeightBefore_research = $("#diamonds-1").offset().top - 100; // height of sections before diamonds + nav
    var diamondHeight_research = $("#research-sections").height();
    $("#diamonds-1").css("height", diamondHeight_research);

    // Setting up diamonds for design section
    var sectionHeightBefore_design = $("#diamonds-2").offset().top - 100; // height of sections before diamonds + nav
    var diamondHeight_design = $("#design-sections").height();
    $("#diamonds-2").css("height", diamondHeight_design);

    // Scroll listener to make them stick
    $(window).scroll(function() {
        // First figure out if its the research or prototyping diamonds
        var diamonds, sectionHeightBefore, diamondHeight;


        if ( $(this).scrollTop() > sectionHeightBefore_research && $(this).scrollTop() < sectionHeightBefore_design)  {
            diamonds = $(".diamonds").first();
            sectionHeightBefore = sectionHeightBefore_research;
            diamondHeight = diamondHeight_research;

            // Remove stickiness for the other diamond set
            $(".diamonds").last().removeClass("stick-top");
        } else {
            diamonds = $(".diamonds").last();
            sectionHeightBefore = sectionHeightBefore_design;
            diamondHeight = diamondHeight_design;

            $(".diamonds").first().removeClass("stick-top");
        }

        if( ($(this).scrollTop() > sectionHeightBefore)){
            if (($(this).scrollTop() > (sectionHeightBefore + diamondHeight - 500))) {
                diamonds.removeClass("stick-top"); // scroll past = remove sticky, align bottom
                diamonds.find(".diamond-cont").addClass("stick-bottom");
            } else {
                diamonds.addClass("stick-top");    // scrolling in = sticky
                diamonds.find(".diamond-cont").removeClass("stick-bottom");

                diamonds.find(".diamond-fill").css("height", (($(this).scrollTop() - sectionHeightBefore) / diamondHeight) * 300 + "%");
                // diamonds.find(".diamond-fill").css("height", ($(this).scrollTop() - sectionHeightBefore) + "px");
            }
        } else { // Might not be necessary since it can't get in here due to the first check
        // Could remove in future, but there's 2 days left
            diamonds.removeClass("stick-top"); // scroll before = remove
            diamonds.find(".diamond-cont").removeClass("stick-bottom");
        }
    });



