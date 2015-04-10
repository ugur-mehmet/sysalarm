Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/alarms', {
  name: 'alarms',
  controller: 'AlarmController'
});

Router.route('/config', {
  name: 'config'
});

Router.route('/logs', {
  name: 'logs'
});

Router.plugin('ensureSignedIn', {
  only: ['config','dashboard']
});
