const ViettelAIO = {
  Init: function() {
    this.test()
    this.menu()
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
        $('.js-btn-menu-close').trigger('click');
      }
    })
  },

  test: function() {
    $('#owl-carousel').on('initialized.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', $('#owl-carousel')).eq(event.item.index)
      const currentColor = $currentItem.find('.item').data('color')
      $('.contain').css('background-color', currentColor)
    })

    $('#owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      nav: true,
      items: 1
    })

    $('#owl-carousel').on('changed.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', $('#owl-carousel')).eq(event.item.index)
      const currentColor = $currentItem.find('.item').data('color')
      $('.contain').css('background-color', currentColor)
    })
  }
}

$(document).ready(function() {
  ViettelAIO.Init()
})
