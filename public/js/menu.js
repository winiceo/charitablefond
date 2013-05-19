// Generated by CoffeeScript 1.6.2
(function() {
  var set_active_tab;

  set_active_tab = function() {
    var id, regex, req_str, _i, _len, _ref, _results;
    _ref = ["web", "cloud", "ip", "support"];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      id = _ref[_i];
      req_str = "\/page\/" + id + "\/";
      regex = new RegExp(req_str);
      if (document.URL.match(regex)) {
        $("#" + id).addClass("active");
        break;
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  $(document).ready(function() {
    return set_active_tab();
  });

}).call(this);