  $(document).ready(function() {
    //scrolls to a specified section on the when a navigation link is clicked
    $(".nav-link").on("click", function(){
    //find the inner text of the navigation link clicked, this should have the same name
    //as the the container divs of the section
    var menuClicked = "#"+$(this).text().trim();
    var offset = -70; //offsets so nav bar does not hide content;offset = navbar width
    //scroll to specified section
    $('html, body').animate({
        scrollTop: $(menuClicked).offset().top + offset
    }, 2000);
    
    });
  });