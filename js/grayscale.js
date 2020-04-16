/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})


window.addEventListener('DOMContentLoaded', () => {
  const titleVivius = new Vivus('title-svg', { type: 'oneByOne', duration: 200, delay: 0 }).stop().reset();
setTimeout(() => {
  titleVivius.play((obj) => {
    obj.el.classList.add('finished');

    obj.el.getElementById('titleSvgText').setAttribute('filter', 'url(#titleTextFilter)');
    setTimeout(() => {
      document.getElementById('cta-button').classList.remove('invisible');
    }, 600);
  });
}, 1000);
});
