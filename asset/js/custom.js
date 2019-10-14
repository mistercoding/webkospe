var deadline = 'Oct 20 2019 12:10:00 GMT-0400';

function time_remaining(endtime){

    var t = Date.parse(endtime) - Date.parse(new Date());

    var seconds = Math.floor( (t/1000) % 60 );

    var minutes = Math.floor( (t/1000/60) % 60 );

    var hours = Math.floor( (t/(1000*60*60)) % 24 );

    var days = Math.floor( t/(1000*60*60*24) );

    return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};

}

function run_clock(id,endtime){

    var clock = document.getElementById(id);

    

    // get spans where our clock numbers are held

    var days_span = clock.querySelector('.days');

    var hours_span = clock.querySelector('.hours');

    var minutes_span = clock.querySelector('.minutes');

    var seconds_span = clock.querySelector('.seconds');



    function update_clock(){

        var t = time_remaining(endtime);

        

        // update the numbers in each part of the clock

        days_span.innerHTML = t.days;

        hours_span.innerHTML = ('0' + t.hours).slice(-2);

        minutes_span.innerHTML = ('0' + t.minutes).slice(-2);

        seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

        

        if(t.total<=0){ clearInterval(timeinterval); }

    }

    update_clock();

    var timeinterval = setInterval(update_clock,1000);

}

run_clock('clockdiv',deadline);



$(document).ready(function(){

    // Add scrollspy to <body>

    $('body').scrollspy({target: ".scroll", offset: 50});   

  

    // Add smooth scrolling on all links inside the navbar

    $(".scroll").on('click', function(event) {

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

        }, 800, function(){

     

          // Add hash (#) to URL when done scrolling (default click behavior)

          window.location.hash = hash;

        });

      }  // End if

    });

  });