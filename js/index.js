 //find minimum of width/length of window to make a square a svg
var minlength = Math.min(window.innerWidth,window.innerHeight);
$(document).ready(function() {
        
  });

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
$('#portfolioTitle').css({"font-size": (0.35*minlength)+"%"})
$('#carLeft').css({"font-size": (0.35*minlength)+"%"})
$('#carRight').css({"font-size": (0.35*minlength)+"%"})

$(".fa-chevron-left").on("click", function(){
  $('#carouselPortfolio').carousel('prev');
});    
$(".fa-chevron-right").on("click", function(){
  $('#carouselPortfolio').carousel('next');
});  
    
//carousel functionality
$('#carouselPortfolio').on('slide.bs.carousel', function (event) {
  var portfolioType = event.relatedTarget.id
  $('#portfolioTitle').empty();
  $('#portfolioTitle').append('<strong>Front End Portfolio</strong>')
  switch (portfolioType){
    case 'frontEndBasic':
      $('.subPortfoilo').empty();
      $('.subPortfoilo').append("Basic");
      break;
    case 'frontEndIntermediate':
      $('.subPortfoilo').empty();
      $('.subPortfoilo').append("Intermediate");
      break;
    case 'frontEndAdvanced':
      $('.subPortfoilo').empty();
      $('.subPortfoilo').append("Advanced");
      break;
   }
  //console.log($('#carouselPortfolio').children()[0].firstElementChild)
})

$(".cards").flip({autoSize: false});