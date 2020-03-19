const ViettelAIO = {
  Init: function() {
    this.homeSlider()
    this.menu()
    this.commonCarousel()
  },

  menu: function() {
    $('.js-btn-menu').on('click', function() {
      $(this).toggleClass('active')
      if ($('body').hasClass('menu-is-open'))
        $('body').removeClass('menu-is-open')
      else $('body').addClass('menu-is-open')
    })

    $('.js-btn-menu-close').on('click', function() {
      $('body').removeClass('menu-is-open')
      $('.js-btn-menu').removeClass('active')
    })

    const $menu = $('.js-menu')
    $(document).mouseup(e => {
      if (
        !$menu.is(e.target) && // if the target of the click isn't the container...
        $menu.has(e.target).length === 0
      ) {
        // ... nor a descendant of the container
        $('.js-btn-menu-close').trigger('click')
      }
    })
  },

  homeSlider: function() {
    $('.js-home-carousel').on('initialized.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', $('.js-home-carousel')).eq(
        event.item.index
      )
      const currentColor = $currentItem.find('.item').data('color')
      $('.js-home-slider').css('background-color', currentColor)
    })

    $('.js-home-carousel').owlCarousel({
      loop: true,
      dots: true,
      center: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    })

    $('.js-home-slider-next').click(function() {
      $('.js-home-carousel').trigger('next.owl.carousel')
    })

    $('.js-home-slider-prev').click(function() {
      $('.js-home-carousel').trigger('prev.owl.carousel')
    })

    $('.js-home-carousel').on('changed.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', $('.js-home-carousel')).eq(
        event.item.index
      )
      const currentColor = $currentItem.find('.item').data('color')
      $('.js-home-slider').css('background-color', currentColor)
    })
  },

  commonCarousel: function() {
    $('.js-carousel-product').owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: [
        '<span class="ic-prev" aria-hidden="true"></span>',
        '<span class="ic-next" aria-hidden="true"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    })
  }
}

$(document).ready(function() {
  ViettelAIO.Init()
})
