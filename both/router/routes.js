// Router.route('/', {
//   name: 'home'
// });

Router.route('/dashboard', {
  name: 'dashboard',
  onBeforeAction: function(){
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])){
        this.next();
    }
    else {
      //this.redirect('/');
      this.render('notFound');
    }
  }
});

Router.route('/', {
  name: 'alarms',
  controller: 'AlarmController'
});

Router.route('/config', {
  name: 'config',
  onBeforeAction: function(){
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])){
        this.next();
    }
    else {
      //this.redirect('/');
      this.render('notFound');
    }
  }

});

Router.route('/logs', {
  name: 'logsTable',
  controller: 'LogsController'
});

Router.plugin('ensureSignedIn', {
  only: ['home', 'alarms', 'config','dashboard', 'logs']
});
