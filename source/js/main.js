const ViettelAIO = {
  Init: function() {
    this.homeSlider()
    // this.menu()
    this.commonCarousel()
    this.commonCarousel2()
    this.inputNumber()
    this.featureImageProductDetail()
    this.mobileMenu()
    this.mobileHeader()
    this.changeView()
    this.zoomImage()
    this.popupGallery()
  },

  popupGallery: function() {
    $('.js-popup-gallery').on('click', function() {
      $('.popup-gallery').magnificPopup('open');
    });
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  },

  zoomImage: function() {
    $('.js-product-zoom').zoom();
  },

  changeView: function() {
    $('.js-grid').on('click', function() {
      $('.products-filter-result').removeClass('list-view')
      $('.card-product').removeClass('list-view')
    })

    $('.js-list').on('click', function() {
      $('.products-filter-result').addClass('list-view')
      $('.card-product').addClass('list-view')
    })
  },

  mobileHeader: function() {
    let headerHeight = $('.js-header-wrap').outerHeight()
    $('body').css('padding-top', headerHeight)
  },

  mobileMenu: function() {
    var selection = document.querySelector('#js-mobile-menu') !== null;
    if (selection) {
      var menu = new MmenuLight( /* eslint-disable-line */
        document.querySelector('#js-mobile-menu'),
        'all'
      )

      var navigator = menu.navigation({ /* eslint-disable-line */
        // selectedClass: 'Selected',
        // slidingSubmenus: true,
        // theme: 'dark',
        // title: 'Menu'
      })

      var drawer = menu.offcanvas({
        // position: 'left'
      })

      //	Open the menu.
      document
        .querySelector('a[href="#js-mobile-menu-btn"]')
        .addEventListener('click', evnt => {
          evnt.preventDefault()
          drawer.open()
        })
    }
  },

  featureImageProductDetail: function() {
    $('.js-product-detail-thumb').on('click', function() {
      let mainImage = $(this)
        .parents('.js-product-detail-feature-images')
        .find('.js-product-detail-feature-image-main')
      let url = $(this).attr('src')
      mainImage.attr('src', url)
      $('.js-product-zoom').trigger('zoom.destroy');
      $('.js-product-zoom').zoom({url: url});
    })
  },

  inputNumber: function() {
    $('.js-btn-number').click(function(e) {
      e.preventDefault()

      var fieldName = $(this).attr('data-field')
      var type = $(this).attr('data-type')
      var input = $(this)
        .parent()
        .find("input[name='" + fieldName + "']")

      var currentVal = parseInt(input.val())
      if (!isNaN(currentVal)) {
        if (type == 'minus') {
          if (currentVal > input.attr('min')) {
            input.val(currentVal - 1).change()
          }
          if (parseInt(input.val()) == input.attr('min')) {
            $(this).attr('disabled', true)
          }
        } else if (type == 'plus') {
          if (currentVal < input.attr('max')) {
            input.val(currentVal + 1).change()
          }
          if (parseInt(input.val()) == input.attr('max')) {
            $(this).attr('disabled', true)
          }
        }
      } else {
        input.val(0)
      }
    })

    $('.js-input-number').focusin(function() {
      $(this).data('oldValue', $(this).val())
    })

    $('.js-input-number').change(function() {
      var minValue = parseInt($(this).attr('min'))
      var maxValue = parseInt($(this).attr('max'))
      var valueCurrent = parseInt($(this).val())

      var name = $(this).attr('name')
      if (valueCurrent >= minValue) {
        $(
          ".js-btn-number[data-type='minus'][data-field='" + name + "']"
        ).removeAttr('disabled')
      } else {
        alert('Sorry, the minimum value was reached')
        $(this).val($(this).data('oldValue'))
      }
      if (valueCurrent <= maxValue) {
        $(
          ".js-btn-number[data-type='plus'][data-field='" + name + "']"
        ).removeAttr('disabled')
      } else {
        alert('Sorry, the maximum value was reached')
        $(this).val($(this).data('oldValue'))
      }
    })
  },

  // menu: function() {
  //   $('.js-btn-menu').on('click', function() {
  //     $(this).toggleClass('active')
  //     if ($('body').hasClass('menu-is-open'))
  //       $('body').removeClass('menu-is-open')
  //     else $('body').addClass('menu-is-open')
  //   })

  //   $('.js-btn-menu-close').on('click', function() {
  //     $('body').removeClass('menu-is-open')
  //     $('.js-btn-menu').removeClass('active')
  //   })

  //   const $menu = $('.js-menu')
  //   $(document).mouseup(e => {
  //     if (
  //       !$menu.is(e.target) && // if the target of the click isn't the container...
  //       $menu.has(e.target).length === 0
  //     ) {
  //       // ... nor a descendant of the container
  //       $('.js-btn-menu-close').trigger('click')
  //     }
  //   })
  // },

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
      autoplay: true,
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
  },

  commonCarousel2: function() {
    $('.js-carousel-product-2').owlCarousel({
      loop: true,
      dots: false,
      margin: 13,
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
  $('#js-mobile-menu').removeClass('d-none')
})

$(window).on('resize', function() {
  ViettelAIO.mobileHeader()
})
