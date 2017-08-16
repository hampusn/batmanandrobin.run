/**
 * Skyline module
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */

(function ($, window, document, undefined) {
  // Default options
  var defaultOptions = {
    "num": 64
  };

  // Document Ready
  $(function () {
    $('[data-skyline]').each(function (i, skyline) {
      var $skyline = $(skyline);
      var opts = $.extend({}, defaultOptions, $skyline.data('skyline'));

      for (var i = opts.num - 1; i >= 0; i--) {
        var $building = $('<div>');

        $building.css({
          "width": Math.floor((Math.random() * 4) + 1) + "%",
          "height": Math.floor((Math.random() * 75) + 1) + "%",
          "left": 5 + (i * 1.5) + "%"
        });

        $skyline.append($building);
      }

    });
  });
})(jQuery, this, this.document);
