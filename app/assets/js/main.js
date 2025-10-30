(function ($) {
  'use strict';
  // **********************************************************************//
  // ! Init variables global
  // **********************************************************************//

  var $body = $('body');

  // **********************************************************************//
  // ! Owl Slider
  // **********************************************************************//
  var owlCarousel = function () {
    var $owlCarousel = $('[data-carousel]'),
      defaults = {
        items: 3,
        loop: false,
        center: false,
        margin: 20,
        autoWidth: false,
        rtl: false,
        responsive: {},
        responsiveBaseElement: window,
        lazyLoad: false,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        navText: '',
        navElement: 'button',
        navClass: ['owl-prev', 'owl-next'],
        dots: true
      };

    // Check exit owl element
    if($owlCarousel.length > 0) {
      $owlCarousel.each(function() {
        // config mode
        var configs = $(this).data('carousel'),
          opts = $.extend({}, defaults, configs),
          $scope = $('.' + $(this).data('scope')),
          $prev = $scope.find('.' + $(this).data('prev')),
          $next = $scope.find('.' + $(this).data('next'));

        // Run owl carousel with option merged
        var  owl = $(this).owlCarousel(opts);

        // Trigger next
        $next.on('click', function() {
          owl.trigger('next.owl.carousel');
        });

        // Trigger prev
        $prev.on('click', function() {
          owl.trigger('prev.owl.carousel');
        });
      });
    }
  };

  // **********************************************************************//
  // ! Scroll to item
  // **********************************************************************//
  var scrollTo = function () {
    var $scrollItem = $('[data-action="scroll"]');

    $scrollItem.on('click', function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')) || $('#' + $(this).data('target')),
        offset = parseInt($(this).data('offset')) || 0;
      $('html, body').animate({
        scrollTop: $target.offset().top - offset
      }, 800);
    });
  };

  // **********************************************************************//
  // ! Check hash
  // **********************************************************************//
  var scrollToHash = function () {
    var $target = $(window.location.hash),
      offset = $target.data('offset') || 0;

    if($target.length > 0) {
      $('html, body').animate({
        scrollTop: $target.offset().top - offset
      }, 800);
    }
  };

  // **********************************************************************//
  // ! Window load
  // **********************************************************************//
  $(window).on('load', function() {
    scrollToHash();
  });

  // **********************************************************************//
  // ! Window resize
  // **********************************************************************//
  $(window).on('resize', function() {

  });

  // **********************************************************************//
  // ! Window scroll
  // **********************************************************************//
  $(window).on('scroll', function() {

  });
  // **********************************************************************//
  // ! window dome ready
  // **********************************************************************//
  $(document).on('ready', function () {
    scrollTo();
    owlCarousel();
  });
})(jQuery);
