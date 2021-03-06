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

function pointerClicked(){
  $('html, body').animate({
    scrollTop: $("#Portfolio").offset().top -70
  }, 2000);
}


$('.portfolioTitle').css({"font-size": (0.3*minlength)+"%"})
$('.fa-chevron-left').css({"font-size": (0.3*minlength)+"%"})
$('.fa-chevron-right').css({"font-size": (0.3*minlength)+"%"})

$(".fa-chevron-left").on("click", function(){
 var objConsidered = $(this);
 var grandfatherElement = $(objConsidered[0]).parents().eq(2)[0].id;
 if(grandfatherElement==="frontEnd"){$('#carouselPortfolio').carousel('prev');}
 if(grandfatherElement==="dataViz"){$('#carouselPortfolio2').carousel('prev');}
 if(grandfatherElement==="backEnd"){$('#carouselPortfolio3').carousel('prev');}
});
$(".fa-chevron-right").on("click", function(){
 var objConsidered = $(this);
 var grandfatherElement = $(objConsidered[0]).parents().eq(2)[0].id;
 if(grandfatherElement==="frontEnd"){$('#carouselPortfolio').carousel('next');}
 if(grandfatherElement==="dataViz"){$('#carouselPortfolio2').carousel('next');}
 if(grandfatherElement==="backEnd"){$('#carouselPortfolio3').carousel('next');}
});

//carousel functionality
$('.carousel').on('slide.bs.carousel', function (event) {
 var portfolioType = event.relatedTarget.id;
 switch (portfolioType){
   case 'frontEndBasic':
     $('#frontEnd .subPortfoilo').empty();
     $('#frontEnd .subPortfoilo').append("Basic");
     break;
   case 'frontEndIntermediate':
     $('#frontEnd .subPortfoilo').empty();
     $('#frontEnd .subPortfoilo').append("Intermediate");
     break;
   case 'frontEndAdvanced':
     $('#frontEnd .subPortfoilo').empty();
     $('#frontEnd .subPortfoilo').append("Advanced");
     break;
   case 'datavizReact':
     $('#dataViz .subPortfoilo').empty();
     $('#dataViz .subPortfoilo').append("React");
     break;
   case 'datavizReactD3':
     $('#dataViz .subPortfoilo').empty();
     $('#dataViz .subPortfoilo').append("React / D3");
     break;
   case 'datavizD3':
     $('#dataViz .subPortfoilo').empty();
     $('#dataViz .subPortfoilo').append("D3");
     break;
   case 'backEndApi':
     $('#backEnd .subPortfoilo').empty();
     $('#backEnd .subPortfoilo').append("API Projects");
     break;
   case 'backEndApiDynamic':
     $('#backEnd .subPortfoilo').empty();
     $('#backEnd .subPortfoilo').append("API / Dynamic Web Apps");
     break;
   case 'backEndDynamic':
     $('#backEnd .subPortfoilo').empty();
     $('#backEnd .subPortfoilo').append("Dynamic Web Apps");
     break;
   }
 //console.log($('#carouselPortfolio').children()[0].firstElementChild)
})

$(".cards").flip({autoSize: false});
