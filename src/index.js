import $ from "jquery";
import Rellax from 'rellax';

const rellax = new Rellax('.rellax');

// Show Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

function hasScrolled() {
  var st = $(window).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
      return;
  if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.header').addClass('show-nav');
  } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('.header').removeClass('show-nav');
      }
  }

  lastScrollTop = st;
}

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
     
        hasScrolled();
        didScroll = false;
    }
}, 250);

// Mobile Header
const mobileHeader = document.getElementById("header");
const mobileLink = $('.navigation li a');
$('#menu-toggle').on('click', function(e){
  $(mobileHeader).addClass('show-menu');
});

window.onclick = function(event) {
   if(event.target == mobileHeader){
    $(mobileHeader).removeClass('show-menu');
  }
}

$(mobileLink).on('click', function(){
  $(mobileHeader).removeClass('show-menu');
})


// Modal
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close-modal");

$('button.btn-speaker').on('click', function(e){
  e.preventDefault();
  modal.style.display = 'block';
  var data = $(this).attr('data');
  $('#content-modal').load(data);
})

closeModal.onclick = function() {
  modal.style.display = "none";
  $("#content-modal").html("");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $("#content-modal").html("");
  } 
}

// Load more - Agenda
$('#load-agenda').on('click', function(){
  $('#accordion-agenda').toggleClass('show');
})

// Load more - Speakers
$('button#load-speakers').on('click', function(){
  console.log('clickkkkkkk')
  $('#accordion-speakers').toggleClass('show');
})


// Forms toggle
function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.preventDefault();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}
var connectTabs = new Tabs();

// Accordion
const accordions = document.querySelectorAll(".accordion");

for (const accordion of accordions) {
  const panels = accordion.querySelectorAll(".col.accordion-panel");
  
  for (const panel of panels) {
    const toggleBtn = panel.querySelector(".toggle.accordion-toggle");
    
    toggleBtn.addEventListener('click', () => {
      for (const otherPanel of panels) {
        if (otherPanel !== panel) {
          otherPanel.classList.remove('accordion-expanded');
        }
      }
      panel.classList.toggle('accordion-expanded');
    });

  }
}
