Package.describe({
  summary: "Smartsheet OAuth flow",
  version: "1.0.0",
  name: "sangd:meteor-smartsheet",
  git: "https://github.com/sangd/meteor-smartsheet.git"
});

Package.on_use(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('sha', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Smartsheet');

  api.add_files(
    ['smartsheet_configure.html', 'smartsheet_configure.js'],
    'client');

  api.add_files('smartsheet_server.js', 'server');
  api.add_files('smartsheet_client.js', 'client');
});
