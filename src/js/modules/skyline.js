/**
 * Skyline module
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */

(function ($, window, document, undefined) {
  // Default options
  var defaultOptions = {
    "num": 64,
    "minWidth": 1,
    "maxWidth": 4,
    "minHeight": 5,
    "maxHeight": 90
  };



  function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Document Ready
  $(function () {
    $('[data-skyline]').each(function (i, skyline) {
      var $skyline = $(skyline);
      var opts = $.extend({}, defaultOptions, $skyline.data('skyline'));

      for (var i = opts.num - 1; i >= 0; i--) {
        var $building = $('<div>');

        $building.css({
          "width": randomInt(opts.minWidth, opts.maxWidth) + "%",
          "height": randomInt(opts.minHeight, opts.maxHeight) + "%",
          "left": 2 + (i * 1.5) + "%"
        });

        $skyline.append($building);
      }

    });
  });
})(jQuery, this, this.document);
