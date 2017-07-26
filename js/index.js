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

      $('#carouselPortfolio').on('slide.bs.carousel', function (event) {

      var portfolioType = event.relatedTarget.id
      switch (portfolioType){
        case 'frontEndBasic':
          $('#portfolioTitle').empty();
          $('#portfolioTitle').append('Front End Portfolio');
          $('.subPortfoilo').empty();
          $('.subPortfoilo').append("Basic");
          break;
        case 'frontEndIntermediate':
          $('#portfolioTitle').empty();
          $('#portfolioTitle').append('Front End Portfolio');
          $('.subPortfoilo').empty();
          $('.subPortfoilo').append("Intermediate");
          break;
        case 'frontEndAdvanced':
          $('#portfolioTitle').empty();
          $('#portfolioTitle').append('Front End Portfolio');
          $('.subPortfoilo').empty();
          $('.subPortfoilo').append("Advanced");
          break;
       }
      //console.log($('#carouselPortfolio').children()[0].firstElementChild)
      })
  });


