    
    function animateFrom(elem, direction) {
      direction = direction | 1;

      var x = 0,
          y = direction * 100;
      if(elem.classList.contains("fromLeft")) {
        x = -100;
        y = 0;
      } else if(elem.classList.contains("fromRight")) {
        x = 100;
        y = 0;
      } else if(elem.classList.contains("fromTop")) {
        x = 0;
        y = -100;
      } else if(elem.classList.contains("fromBottom")) {
        x = 0;
        y = 100;
      }
      gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 2, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
      });
    }

    function hide(elem) {
      gsap.set(elem, {autoAlpha: 0});
    }

    document.addEventListener("DOMContentLoaded", function() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          onEnter: function() { animateFrom(elem) }, 
          onEnterBack: function() { animateFrom(elem, -1) },
          onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
      });
        
      gsap.utils.toArray(".pannel-text").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          onEnter: function() { animateFrom(elem) }, 
          onEnterBack: function() { animateFrom(elem, -1) },
          onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
      });
    });