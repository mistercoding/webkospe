$(document).ready(function () {
    $(".owl-carousel-1").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    }),
        $(".owl-carousel-2").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    $(".owl-carousel-3").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

newFunction();

function newFunction() {
    $(document).ready(function () {
        // Add scrollspy to <body>
        $('body').scrollspy({ target: ".scroll", offset: 50 });
        // Add smooth scrolling on all links inside the navbar
        $(".scroll").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    });

}

$(document).ready(function () {
    
    $("#survey2").hide();
    $("#survey3").hide();
    $(".btn-click").click(function () {
        $("#survey1").hide();
    })
    $(".btn-click").click(function () {
        $("#survey2").show();
    })
    $(".btn-click-2").click(function () {
        $("#survey2").hide();
    })
    $(".btn-click-2").click(function () {
        $("#survey3").show();
    })

    ada();
    function ada(){
        var t = 5000;
        setTimeout(function(){
        $("#tbl-1").attr("data-target","#daftar").attr("class","btn btn-primary btn-block btn-lg");
        
    },t);
    }
})
