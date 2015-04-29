LogsController = AppController.extend({
  waitOn: function() {
    //return this.subscribe('alarms');
  },
  data: {
    logs: Logs.find({})
  }

});
