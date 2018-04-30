$(document).ready(function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 35, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#411677"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#9763d8", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {"enable": true, "mode": "grab"},
                "onclick": {"enable": false, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });

    //fullpage
    const sectionAnchors = [];

    $('.section').each(function(){
        sectionAnchors.push($(this).attr('data-id'));
    });

    console.log(sectionAnchors);

    $('#main-container').fullpage({
        anchors: sectionAnchors,
        onLeave: function(index, nextIndex, direction){
            const aniSpeed = 500;
            const introItems = $('header .inner-wrapper > *:not(.logo, .section-info)');
            const header = $('header');
            const activeNav = $('.section').eq(nextIndex-1).attr('data-id');
            const sectionInfo = header.find('.section-info');

            $('.nav-link').removeClass('active');
            $('.nav-link[href="#'+activeNav+'"]').addClass('active');
            console.log('active = '+activeNav);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                introItems.fadeOut(aniSpeed, function(){showTitle(aniSpeed)});
                header.addClass('sticky');
            }

            if(nextIndex == 1){
                introItems.fadeIn(aniSpeed);
                sectionInfo.hide();
                header.removeClass('sticky');
            }

            if(nextIndex > 1) {
                const sectionHeader = $('.section').eq(nextIndex-1).find('.header');
                const title = sectionHeader.find('.title').html();
                const description = sectionHeader.find('.description').html();
                sectionInfo.find('.title').html(title);
                sectionInfo.find('.description').html(description);
            }
        }
    });
});

function showTitle(speed) {
    const sectionInfo = $('.section-info');
    if(!sectionInfo.is(':visible')) {
        sectionInfo.fadeIn(speed);
    }
}

new TypeIt('.webcrateTitle', {
  speed: 110,
  deleteSpeed: 90,
}).type('<span class="unset-bold">Hi, we are </span><span class="wc-purple-light">WEB</span>CRATE').pause(1500).delete(5).pause(1000).type('DEVELOPERS').pause(1500).delete(10).pause(1000).type('DESIGNERS').pause(1500).delete(9).pause(1000).type('CRATE');