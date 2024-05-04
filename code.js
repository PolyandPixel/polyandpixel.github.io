<script src="https://unpkg.com/swup@4"></script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>
<script src="https://unpkg.com/@swup/preload-plugin@3"></script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>
<script src="https://unpkg.com/@swup/scroll-plugin@3"></script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>
<!-- SwiperJS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>
<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5d057925e1a8682f6ba01f61" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>

<style>
.transition-fade {
	transform: translate(0, 0);
	transition: .7s cubic-bezier(.49,.16,.33,1);
	-webkit-transition: .7s cubic-bezier(.49,.16,.33,1);
	-o-transition: .7s cubic-bezier(.49,.16,.33,1);
    -moz-transition: .7s cubic-bezier(.49,.16,.33,1);
	-ms-transition: .7s cubic-bezier(.49,.16,.33,1);
}
  
  
html.is-animating .transition-fade {
transform: translate(0, 100vh);

}

html.is-leaving .transition-fade {
transform: translate(0, -150px);

}


  /* PAGE OVERLAY ANIMATION */
  
@-webkit-keyframes page-overlay-anim {
  0%   	{ transform: translate(0, 100%); }
  45% 	{ transform: translate(0, 0%); }
  54% 	{ transform: translate(0, 0%); }
  100% 	{ transform: translate(0, -100%); }
}
@-moz-keyframes page-overlay-anim {
  0%   	{ transform: translate(0, 100%); }
  45% 	{ transform: translate(0, 0%); }
  54% 	{ transform: translate(0, 0%); }
  100% 	{ transform: translate(0, -100%); }
}
@-o-keyframes page-overlay-anim {
  0%   	{ transform: translate(0, 100%); }
  45% 	{ transform: translate(0, 0%); }
  54% 	{ transform: translate(0, 0%); }
  100% 	{ transform: translate(0, -100%); }
}
@keyframes page-overlay-anim {
  0%   	{ transform: translate(0, 100%); }
  45% 	{ transform: translate(0, 0%); }
  54% 	{ transform: translate(0, 0%); }
  100% 	{ transform: translate(0, -100%); }
}

.page-overlay-in {
  	display: block !important;
	transform: translate(0, 100%);
}
  
html.is-changing .page-overlay-in {
  	-webkit-animation: 	page-overlay-anim 1.45s 1; /* Safari 4+ */
  	-moz-animation: 	page-overlay-anim 1.45s 1; /* Fx 5+ */
  	-o-animation: 		page-overlay-anim 1.45s 1; /* Opera 12+ */
  	animation: 			page-overlay-anim 1.45s 1; /* IE 10+, Fx 29+ */
  
  	animation-timing-function: cubic-bezier(.49,.16,.33,1);
}

</style>

<script>
function pagereload() {   
    $("a").not('.lightbox-link').click(function(){
        setTimeout(function(){
            $("html, body").animate({ scrollTop: 0 }, 0);
        }, 700);
    });
}

document.addEventListener('swup:pageView', pagereload);

    </script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>

  <script>
    //To reload the webflow animations
    function wfscriptreload() {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require( 'ix2' ).init();
    document.dispatchEvent( new Event( 'readystatechange' ) );
    }
  
  	document.addEventListener('swup:pageView', wfscriptreload);
    document.addEventListener("DOMContentLoaded", wfscriptreload);
  
</script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>

<script>
  document.addEventListener("DOMContentLoaded", (event) => {
      function resetWebflow(data) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(data.next.html, "text/html");
      let webflowPageId = $(dom).find("html").attr("data-wf-page");
      $("html").attr("data-wf-page", webflowPageId);
      window.Webflow && window.Webflow.destroy();
      window.Webflow && window.Webflow.ready();
      window.Webflow && window.Webflow.require("ix2").init();
    }
  });
</script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>


<script>
    /* Cases SwiperJS to work before any page has been clicked*/
    let swiperCases;
    function casesSlider() {
      swiperCases = new Swiper('.swiper-projects', {
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        speed: 600,
        navigation: {
          nextEl: ".swiper-button.next",
          prevEl: ".swiper-button.prev"
        }
      });
    }
    casesSlider();
</script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>

<script>
function changeOpacity() {
    // Select the element with class navbar-menu_button-line and is-line2
    const line2 = document.querySelector('.navbar-menu_button-line.is-line2');

    // Check if the element exists
    if (line2) {
        // Select the elements with class navbar-menu-link-text and hover
        const menuLinks = document.querySelectorAll('.navbar-menu-link-text.hover');

        // Loop through each menu link element
        menuLinks.forEach(link => {
            // Add a click event listener to each menu link element
            link.addEventListener('click', () => {
                // Change the opacity of line2 to 1
                line2.style.opacity = '1';
            });
        });
    } else {
        console.log('Element with class "navbar-menu_button-line.is-line2" not found');
    }
}

  
  //scroll to top for 
  
 // var scrollTopValue = document.scrollingElement.scrollTop;
        
        // You can now use scrollTopValue variable to do something with the scroll position
    //    console.log("Scroll Top:", scrollTopValue);
  
// Define a function to handle the navbar-logo movement
function moveNavbarLogo() {
    // Select the .navbar-logo element
    const navbarLogo = document.querySelector('.navbar-logo');

    // Check if the .navbar-logo element exists
    if (navbarLogo) {
        // Listen for the swup:transition:start event
        swup.hooks.on('visit:start', () => {
            // During page transition, change position to fixed
            navbarLogo.style.position = 'fixed';
        });

        // Listen for the swup:transition:end event
        swup.hooks.on('visit:end', () => {
            // After page transition, change position to relative
            navbarLogo.style.position = 'relative';
        });
    }
}
  
function topper() {
    $('#top').animate({ scrollTop: 0 }, function() {
        console.log("Animation fired successfully!");
    });
}

  // Define the casesSlider function in the global scope after a link has been clicked
  function casesSlider() {
    let swiperCases = new Swiper('.swiper-projects', {
      direction: "horizontal",
      slidesPerView: "auto",
      freeMode: true,
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      speed: 600,
      navigation: {
        nextEl: ".swiper-button.next",
        prevEl: ".swiper-button.prev"
      }
    });
        $("a").click(function(){
        setTimeout(function(){
            $("html, body").animate({ scrollTop: 0 }, 0);
        }, 700);
    });
  }

  // This event listener ensures that the DOM content is fully loaded before executing the script
  document.addEventListener("DOMContentLoaded", (event) => {
    const options = {
      containers: ["#swup, #impressum, #script-reload"]
    };

 const swup = new Swup({
  plugins: [
    new SwupPreloadPlugin(), // Existing plugin
    new SwupScrollPlugin({   // Swup Scroll Plugin with offset option
      offset: 100,            // Adjust the offset value as needed
    }),
  ],
});

// Attach the moveNavbarLogo function to the swup:transition:start hook
swup.hooks.on('visit:end', moveNavbarLogo);
    
    // Register the 'page:view' hook
    swup.hooks.on('page:view', (visit) => {
      // Call the casesSlider function when a new page is viewed
      casesSlider();
      changeOpacity();
      topper();
    });
  });
</script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>

<script>
    function wfscriptreload() {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require( 'ix2' ).init();
    document.dispatchEvent( new Event( 'readystatechange' ) );
    $("a").click(function(){
        setTimeout(function(){
            $("html, body").animate({ scrollTop: 0 }, 0);
        }, 700);
    });
    }
  
  	document.addEventListener('swup:page:view', wfscriptreload);
    document.addEventListener("DOMContentLoaded", wfscriptreload);
  
</script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>

<script>
// Define a function to handle animations after page transition
function handlePageTransition() {
 //  Fade in and slide up the div with class _7-column-grid
 $('._7-column-grid').hide().fadeIn(1000).slideDown(500);
}

// Add event listener for Swup page transition event
document.addEventListener('swup:page-view', handlePageTransition);
</script><script src="https://min30327.github.io/luxy.js/dist/js/luxy.js" charset="utf-8"></script><script>luxy.init({wrapper: '#luxy',wrapperSpeed:  0.04});</script>
