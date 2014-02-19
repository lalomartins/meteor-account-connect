Package.describe({
  summary: "Connect meteor accounts (e.g. add facebook/google/twitter to an existing account). This is a TEMPORARY solution until this functionality is added to accounts-base.
"
});

Package.on_use(function (api) {
  api.use('accounts-base', 'server');
  api.use('underscore', 'server');
  api.add_files('connect_server.js', 'server');
});
