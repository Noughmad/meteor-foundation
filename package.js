Package.describe({
  summary: "The most advanced responsive front-end framework in the world."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  
  api.add_files('js/vendor/custom.modernizr.js', 'client');
  api.add_files('js/vendor/zepto.js', 'client');
  
  api.add_files('js/foundation/foundation.js', 'client');
  api.add_files('js/foundation/foundation.alerts.js', 'client');
  api.add_files('js/foundation/foundation.clearing.js', 'client');
  api.add_files('js/foundation/foundation.cookie.js', 'client');
  api.add_files('js/foundation/foundation.dropdown.js', 'client');
  api.add_files('js/foundation/foundation.forms.js', 'client');
  api.add_files('js/foundation/foundation.joyride.js', 'client');
  api.add_files('js/foundation/foundation.magellan.js', 'client');
  api.add_files('js/foundation/foundation.orbit.js', 'client');
  api.add_files('js/foundation/foundation.placeholder.js', 'client');
  api.add_files('js/foundation/foundation.reveal.js', 'client');
  api.add_files('js/foundation/foundation.section.js', 'client');
  api.add_files('js/foundation/foundation.tooltips.js', 'client');
  api.add_files('js/foundation/foundation.topbar.js', 'client');
  
  api.add_files('css/normalize.css', 'client');
  api.add_files('css/foundation.css', 'client');
});
