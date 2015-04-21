Meteor.methods({

  rmAllAlarms: function(){
    Alarms.remove({});
  }
});
