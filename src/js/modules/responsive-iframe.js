/**
 * Responsive iframe module
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */

(function ($, window, document, undefined) {
  // Default options
  var defaultOptions = {
    "width": null,
    "height": null
  };

  // Document Ready
  $(function () {
    $('[data-responsive-iframe]').each(function (i, iframe) {
      var $iframe = $(iframe);
      var opts    = $.extend({}, defaultOptions, $iframe.data('responsiveIframe'));

      var width  = Number.isInteger(opts.width) ? opts.width : $iframe.width();
      var height = Number.isInteger(opts.height) ? opts.height : $iframe.height();
      var ratio  = height / width;

      $iframe.data('responsiveIframeRatio', ratio);

      $iframe
        .removeAttr('height')
        .removeAttr('width')
        .css({
          "width": "100%"
        });
    });

    $(window).trigger('resize');
  });

  $(window).smartresize(function (ev) {
    $('[data-responsive-iframe]').each(function (i, iframe) {
      var $iframe = $(iframe);
      var ratio   = $iframe.data('responsiveIframeRatio');
      var width   = $iframe.width();
      
      $iframe.height(width * ratio);
    });
  });
})(jQuery, this, this.document);
