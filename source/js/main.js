const ViettelAIO = {
  Init: function() {
    this.test()
  },

  test: function() {
    $('#owl-carousel').on('initialized.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', $('#owl-carousel')).eq(event.item.index);
      const currentColor = $currentItem.find('.item').data('color');
      $('.contain').css('background-color', currentColor)
    });

    $('#owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      nav: true,
      items: 1,
    })

    $('#owl-carousel').on('changed.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', $('#owl-carousel')).eq(event.item.index);
      const currentColor = $currentItem.find('.item').data('color');
      $('.contain').css('background-color', currentColor)
    });
  }
}

$(document).ready(function() {
  ViettelAIO.Init()
})
