
var isMobile = 0, isAppleMobile = 0;
var wh = 0, ww = 0, st = 0;

var sec2_whitehall_top, sec2_nurse_top, sec2_patient_top;
var sec2_whitehall_bot, sec2_nurse_bot, sec2_patient_bot;

var tooth_jar_top = 0, tooth_jar_bottom = 0;
var trailer_video_top, trailer_video_h;

// For ripple animations
var ripple_top = 0;
var rippleTimer = 0,
    rippleSpeed = 150,
    ripple_frame = 0;
var ripple_frames = [];
var ripple_images = [
    'ripple/CureWellness_TrailerA_ProRes 01-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 02-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 03-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 04-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 05-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 06-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 07-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 08-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 09-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 10-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 11-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 12-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 13-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 14-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 15-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 16-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 17-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 18-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 19-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 20-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 21-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 22-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 23-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 24-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 25-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 26-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 27-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 26-min.jpg',
    'ripple/CureWellness_TrailerA_ProRes 25-min.jpg'
];

// For treatment animations
var treatmentTimer = 0,
    treatmentSpeed = 96.15,
    treatment_frame = 0;
var treatment_frames = [];
var treatment_images = [
    'water-treatment/CureWellness_TrailerA_ProRes 01-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 02-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 03-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 04-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 05-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 06-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 07-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 08-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 09-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 10-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 11-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 12-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 13-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 14-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 15-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 16-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 17-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 18-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 19-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 20-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 21-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 22-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 23-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 24-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 25-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 26-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 27-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 28-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 29-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 30-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 31-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 32-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 31-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 30-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 29-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 28-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 27-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 26-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 25-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 24-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 23-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 22-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 21-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 20-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 19-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 18-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 17-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 16-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 15-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 14-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 13-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 12-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 11-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 10-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 09-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 08-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 07-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 06-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 05-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 04-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 03-min.jpg',
    'water-treatment/CureWellness_TrailerA_ProRes 02-min.jpg'
];

// For floating animations
var floating_top = 0,
    floating_height = 0,
    floating_animated = 0;
var floatingTimer = 0,
    floatingSpeed = 60,
    floating_frame = 0;
var floating_frames = [];
var floating_images = [
    'floating/CureWellness_TrailerA_ProRes 01-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 02-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 03-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 04-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 05-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 06-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 07-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 08-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 09-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 10-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 11-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 12-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 13-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 14-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 15-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 16-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 17-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 18-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 19-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 20-min.jpg',
    'floating/CureWellness_TrailerA_ProRes 21-min.jpg'
];


$(window).scroll(function (event) {
    st = $(this).scrollTop();

    // Adjust bottom to simulate 3d effects for only desktop version.
/*    if (!isMobile && st >= sec2_whitehall_top) {
        bottom2 = (st - sec2_whitehall_top) / 5;
        bottom3 = (st - sec2_nurse_top) / 3.7;
        bottom4 = (st - sec2_nurse_top) / 3.7;

        if (bottom2 < 0) bottom2 = 0;
        if (bottom3 < 0) bottom3 = 0;
        if (bottom4 < 0) bottom4 = 0;

        bottom2 = sec2_whitehall_bot + bottom2;
        bottom3 = sec2_nurse_bot + bottom3;
        bottom4 = sec2_patient_bot + bottom4;
        $('#sec2-whitehall').css('bottom', bottom2+'px');
        $('#sec2-nurse').css('bottom', bottom3+'px');
        $('#sec2-patient').css('bottom', bottom4+'px');
    }
*/

    // Scrolldown arrow

    if (!isMobile && st >= 100) {
        $('#scroll_down_arrow').fadeOut(2000);
    }
    else if (!isMobile && st < 100){
        $('#scroll_down_arrow').fadeIn(2000);
    }

    // If tooth jar section go over half screen, ...
    if (!isAppleMobile && st + wh * 0.5 > tooth_jar_top) {
        $('#sec3-jar').animate({'opacity': '1', 'bottom': tooth_jar_bottom - 30}, 2000);
        $('#sec3-girl').delay(1000).animate({'opacity': '1'}, 1000);
        $('#sec3-guy').delay(2000).animate({'opacity': '1'}, 1000);
    }

    // Animate floating only once when comes in viewport, ...
    if (!isAppleMobile && floating_animated == 0 && st + wh * 0.3 >= floating_top && st <= floating_top + floating_height * 0.3) {
        floating_animated = 1;

        floatingTimer = setInterval(function() {
        if (floating_frame < 0) floating_frame = 0;
        else if (floating_frame >= 20) clearInterval(floatingTimer);

        $('#sec5-floating-div img').css('opacity', '0');
        $(floating_frames[floating_frame++]).css('opacity', '1');
        }, floatingSpeed);
    }
    else if (!isAppleMobile && floating_frame == 21 && (st + wh <= floating_top || st >= floating_top + floating_height)) {
        // When user scrolls away and completed animating, reset animation
        floating_animated = 0;
        floating_frame = 0;
        $('#sec5-floating-div img').css('opacity', '0');
        $(floating_frames[floating_frame]).css('opacity', '1');
    }

    // For auto play/stop video
    if ((st + wh * 0.3 >= trailer_video_top && st <= trailer_video_top + trailer_video_h * 0.5) &&         // Video is in viewport
        $('#trailer-video').data('autoplay') == 1 && $('#trailer-video').data('is-playing') == 0) {
        videojs("trailer-video").play();
        $('#trailer-video').data('is-playing', '1');
    }
    else if ((st + wh * 0.3 < trailer_video_top || st > trailer_video_top + trailer_video_h * 0.5) &&      // Video is out of viewoport
        $('#trailer-video').data('autoplay') == 1 && $('#trailer-video').data('is-playing') == 1) {
        videojs("trailer-video").pause();
        $('#trailer-video').data('autoplay', '0');
        $('#trailer-video').data('is-playing', '0');
    }

});

$(document).ready(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = 1;
    }

    if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        isAppleMobile = 1;
    }

    $(window).bind("resize", initializeAnimationArgs);
    $(window).bind("orientationchange", initializeAnimationArgs);

    // Load assets for ripple animation.
    preload(ripple_images, 'sec1-ripple-div');
    ripple_frames = $('#sec1-ripple-div').find('img');
    $(ripple_frames[0]).css('opacity', '1');

    // Load assets for treatment animation.
    preload(treatment_images, 'sec4-treatment-div');
    treatment_frames = $('#sec4-treatment-div').find('img');
    $(treatment_frames[0]).css('opacity', '1');

    // Load assets for floating window animation.
    preload(floating_images, 'sec5-floating-div');
    floating_frames = $('#sec5-floating-div').find('img');
    $(floating_frames[0]).css('opacity', '1');

});


$(window).load(function() {

});


function loadPage() {
    $("#preloader").fadeOut(500);     // fade out the loading animation firstly

    st = $(this).scrollTop();

    initializeAnimationArgs();

    // Animate ripple animation
    rippleTimer = setInterval(function() {
        if (ripple_frame < 0) ripple_frame = 0;
        else if (ripple_frame >= 29) ripple_frame = 23;

        $('#sec1-ripple-div img').css('opacity', '0');
        $(ripple_frames[ripple_frame++]).css('opacity', '1');
    }, rippleSpeed);

    // Animate intro section
    if (!isMobile && navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // Exception: runs on Safari Desktop
        $('#social-share').css('margin-left', '-153px');

//        $('#sec5-content1').css('top', '-135vw');
//        $('#sec5-content2').css('top', '-35vw');
    }

    $('#title-img').animate({'opacity': '1', 'top': '2.5vw'}, 2000);
    $('#release-title').animate({'opacity': '1'}, 2000);
    $('#social-share').animate({'opacity': '1'}, 2000);
    $('#scroll_down_arrow').animate({'opacity': '1'}, 2000);

    // Animate water treatment animation
    treatmentTimer = setInterval(function() {
        if (treatment_frame < 0) treatment_frame = 0;
        else if (treatment_frame >= 62) treatment_frame = 0;

        $('#sec4-treatment-div img').css('opacity', '0');
        $(treatment_frames[treatment_frame++]).css('opacity', '1');
    }, treatmentSpeed);

    if(isAppleMobile) {
        // If it works on iOS mobile devices,
        // animate tooth jar and floating section.
        // hide scroll down arrow.
        // Because scroll and position:fixed does not work in iFrame on iOS mobile.
        $('#sec3-jar').animate({'opacity': '1', 'bottom': tooth_jar_bottom - 30}, 2000);
        $('#sec3-girl').delay(1000).animate({'opacity': '1'}, 1000);
        $('#sec3-guy').delay(2000).animate({'opacity': '1'}, 1000);

        $('#sec5-floating-div img').css('opacity', '0');
        $(floating_frames[20]).css('opacity', '1');
    }

    if (isMobile) {
        $('#scroll_down_arrow').css('display', 'none');
    }
}

function initializeAnimationArgs() {
    wh = $(window).height();
    ww = $(window).width();
/*
    sec3_top = $('#sec3').offset().top;

    sec2_whitehall_top = $('#sec2-whitehall').offset().top;
    sec2_nurse_top = $('#sec2-nurse').offset().top;
    sec2_patient_top = $('#sec2-patient').offset().top;

    sec2_whitehall_bot = sec3_top - sec2_whitehall_top - $('#sec2-whitehall').height();
    sec2_nurse_bot = sec3_top - sec2_nurse_top - $('#sec2-nurse').height();
    sec2_patient_bot = sec3_top - sec2_patient_top - $('#sec2-patient').height();

    sec2_whitehall_top = sec2_whitehall_top - $('#sec2').offset().top;
    sec2_nurse_top = sec2_nurse_top - $('#sec2').offset().top;
    sec2_patient_top = sec2_patient_top - $('#sec2').offset().top;
*/

    tooth_jar_top = $('#sec3-div').offset().top;
    tooth_jar_bottom = $('#sec3-jar').css('bottom').replace(/[^-\d\.]/g, '');
    floating_top = $('#sec5-floating-div').offset().top;
    floating_height = $('#sec5-floating-div').height();

    // For video auto play/stop
    var $trailer_video = $('#trailer-video');
    trailer_video_top = $trailer_video.offset().top;
    trailer_video_h = $trailer_video.height();

}


// Preload assets for animations
function preload(arrayOfImages, parent_id) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src', '//cdn.wovendigitaldev.com/a-cure-for-wellness/images/ani/'+this).appendTo('#'+parent_id).addClass('ani-frame');
    });
}


function popupDlgCenterDual(url, title, w, h) {
// Fixes dual-screen position Most browsers Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    if (w > ww) w = ww - 20;
    if (h > wh) h = wh - 20;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

// Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}


document.onreadystatechange = function(e) {
    if (document.readyState=="interactive") {
        var all_el = document.getElementsByTagName("*");
        for (var i=0, max=all_el.length; i < max; i++) {
            check_element(all_el[i]);
        }
    }
}

function check_element(el) {
    var all_el = document.getElementsByTagName("*");
    var per_step = 100 / all_el.length;

    if($(el).on()) {
        var prog_height = Number($('#cover-div').data('height')) - per_step;
        $('#cover-div').data('height', prog_height);

        $("#cover-div").animate({height:prog_height+"%"}, 1, function(){
            if($('#cover-div').height() == 0) {
                loadPage();
            }
        });
    }
    else {
        check_element(el);
    }
}
