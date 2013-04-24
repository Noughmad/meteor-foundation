Package.describe({
  summary: "The most advanced responsive front-end framework in the world."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  
  api.add_files('js/foundation/foundation.topbar.js');
  
  api.add_files('js/foundation.min.js', 'client');
  api.add_files('css/foundation.min.css', 'client');
});
