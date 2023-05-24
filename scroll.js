window.addEventListener("DOMContentLoaded", function() {
    var scrollEffectImages = document.querySelectorAll(".scroll-effect");
  
    function handleScroll() {
      var windowHeight = window.innerHeight;
  
      scrollEffectImages.forEach(function(image) {
        var imageTop = image.getBoundingClientRect().top;
  
        // Sprawdź, czy obrazek jest w obszarze widzenia
        if (imageTop < windowHeight && imageTop > 0) {
          image.classList.add("scroll-effect-hover");
        } else {
          image.classList.remove("scroll-effect-hover");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Wywołaj funkcję na początku, aby zastosować efekt do widocznych obrazków
  });
  