Package.describe({
  summary: "Smartsheet OAuth flow",
  version: "1.0.1",
  name: "sangd:meteor-smartsheet",
  git: "https://github.com/sangd/meteor-smartsheet.git"
});

Package.on_use(function(api) {
  api.use('oauth2@1.1.11', ['client', 'server']);
  api.use('oauth@1.1.12', ['client', 'server']);
  api.use('http@1.2.10', ['server']);
  api.use('sha@1.0.9', ['server']);
  api.use(['underscore@1.0.10', 'service-configuration@1.0.11'], ['client', 'server']);
  api.use(['random@1.0.10', 'templating@1.2.15'], 'client');

  api.export('Smartsheet');

  api.add_files(
    ['smartsheet_configure.html', 'smartsheet_configure.js'],
    'client');

  api.add_files('smartsheet_server.js', 'server');
  api.add_files('smartsheet_client.js', 'client');
});
