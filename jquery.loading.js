(function() {
  var __slice = [].slice;

  (function($) {
    var methods, template;
    template = Handlebars.compile("<div class='ui-loading-overlay'>\n  <div class='ui-loading-dot'></div>\n  <div class='ui-loading-dot'></div>\n  <div class='ui-loading-dot'></div>\n</div>");
    methods = {
      destroy: function() {
        $(this).removeClass("ui-loading").children(".ui-loading-overlay").remove();
        return this;
      }
    };
    return $.fn.loading = function() {
      var args, options;
      options = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (options == null) {
        options = {};
      }
      if (options && methods[options]) {
        return methods[options].apply(this, args);
      }
      options = $.extend(true, {}, {
        el: this,
        $el: $(this)
      }, options);
      $.each(options.el, function(i, el) {
        var $el, loading_cover, _ref;
        $el = $(el);
        $el.addClass("ui-loading");
        if ((_ref = $el.css("position")) !== "absolute" && _ref !== "relative" && _ref !== "fixed") {
          $el.css({
            position: "relative"
          });
        }
        $el.data("loading-state", true);
        loading_cover = template({});
        return $el.append(loading_cover);
      });
      return this;
    };
  })(jQuery);

}).call(this);

//# sourceMappingURL=jquery.loading.map