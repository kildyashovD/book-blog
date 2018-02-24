(function ($) {
    $(window).on("load", function () {
        $("a[href='#top'], a[rel='m_PageScroll2id']").mPageScroll2id(/*{
				highlightSelector:"#myTopNav a[rel='m_PageScroll2id']",
				liveSelector:"#myTopNav a[rel='m_PageScroll2id']"
		}*/
		);
    });
})(jQuery);

// Scroll to Top button

window.onscroll = function () {scrollToTopFunction()};

var toTop = document.getElementById('toTopButton');

function scrollToTopFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction () {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Modal for Article

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
	
}

// Carousel

var slideIndexCarousel = 1;
showSlidesCarousel(slideIndexCarousel);

function plusSlidesCarousel(m){
	showSlidesCarousel(slideIndexCarousel += m);
}

function currentSlidesCarousel(m){
	showSlidesCarousel(slideIndexCarousel = m);
}

function showSlidesCarousel(m) {
	var i;
	var slidesSlideshow = document.getElementsByClassName("slideshow-container-slides");
	
	if (m > slidesSlideshow.length) {slideIndexCarousel = 1} 
	if (m < 1) {slideIndexCarousel = slidesSlideshow.length}
  	for (i = 0; i < slidesSlideshow.length; i++) {
      slidesSlideshow[i].style.display = "none"; 
  	}

  	slidesSlideshow[slideIndexCarousel-1].style.display = "block"; 	
}

// Send form function open modal

var formSendModal = document.getElementById('formModal');

var formButton = document.getElementById('formSend');

var span = document.getElementsByClassName('close')[1];

formButton.onclick = function() {
  formSendModal.style.display = "block";
}

span.onclick = function() {
  formSendModal.style.display = "none";
}

// On scroll function

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	var animate = document.getElementById('animateHeader');
	
	if (document.body.scrollTop > 30) {
		document.getElementById("test").classList.remove("titles_display_none");
	};
	
    if (document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700) {
      animate.classList.add('active-header');
    } else {
      animate.classList.remove('active-header');
    };
} 




