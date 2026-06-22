// Afficher progressivement au scroll

ScrollReveal().reveal('.article6', { delay: 300 });
ScrollReveal().reveal('.article7', { delay: 500 });
ScrollReveal().reveal('.article8', { delay: 300 });
ScrollReveal().reveal('.article9', { delay: 500 });
ScrollReveal().reveal('.article10', { delay: 300 });
ScrollReveal().reveal('#formulaire', { delay: 300 });

// On refresh :
// Enlever transparence du menu 
// affichage progress-bar
// Changer la couleur de fond et la bordure du menu au scroll et au refresh
// Changer la couleur de fond et la bordure du menu au scroll et au refresh
$(document).ready(function() {
  var chevron = $('#nav-a-propos').offset();
  var scroll = $(window).scrollTop();
  if (chevron.top < scroll + 100) {
    $(".header, .header-burger").css("background", "#000000").css("border-bottom", "2px solid #ffbb33");
  } else {
    $(".header, .header-burger").css("background", "transparent").css("border-bottom", "none");
  }
});





// Au scroll :
// Enlever transparence du menu 
// affichage progress-bar
// affichage des projets
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var chevron = $('#nav-a-propos').offset();
  if (chevron.top < scroll + 100) {
    $(".header, .header-burger").css("background", "#000000").css("border-bottom", "2px solid #ffbb33");
  } else {
    $(".header, .header-burger").css("background", "transparent").css("border-bottom", "none");
  }
  // Other scroll-based animations...
});

// animation des ancres du menu
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Affiche le menu quand on clique sur le burger
$(function(){
  $('.menu-burger').click(function(){
    if($('input[type="checkbox"]').is(':checked') ){
      $('.menu-nav-burger').addClass("active-menu");
      $(".header-burger").css("background" , "#000000")
      $(".header-burger").css("border-bottom" , "1px solid white");
    } else {
      $('.menu-nav-burger').removeClass("active-menu");
      $(".header-burger").css("background" , "transparent");  
      $(".header-burger").css("border-bottom" , "none");
    }});
});

// Masque le menu déroulant quand on clique sur un élément du menu
$(function(){
  $('li>a').click(function(){
    $('input[type="checkbox"]').prop('checked', false);
    $('.menu-nav-burger').removeClass("active-menu");
  });
});


// Cacher le contenu de banner sous le menu au scroll et au refresh
$(document).ready(function(){
  var scroll = $(window).scrollTop();
  if(scroll > 240) {
    $(".banner-texte-js").css("opacity" , "0")
  } else {
    $(".banner-texte-js").css("opacity" , "1")
  }
});
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  
  if(scroll < 180) {
    $(".banner-texte-js").css("opacity" , "1")
  }
  
  if(scroll > 230) {
    $(".au-dessus-js").css("opacity" , "0")
  } else {
    $(".au-dessus-js").css("opacity" , "1")
  }
  if(scroll > 250) {
    $(".en-dessous-js").css("opacity" , "0");
  } else {
    $(".en-dessous-js").css("opacity" , "1");
  }
});
