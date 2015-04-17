AlarmController = AppController.extend({
  waitOn: function() {
    //return this.subscribe('alarms');
  },
  data: {
    alarms: Alarms.find({})
  }

});
