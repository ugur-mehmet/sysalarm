if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    var users = [
        {name:"Normal User",username:"alarm",roles:[]},
        // {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
        // {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
        {name:"Admin User",username:"admin",roles:['admin']}
      ];

    _.each(users, function (userData) {
      var id,user;

      console.log(userData);

      id = Accounts.createUser({
        username: userData.username,
        password: "alarm",
        profile: { name: userData.name }
      });

      // email verification
      // Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);

    });
  }

if (Alarms.find().count()===0){
  Alarms.insert({
    //alarm_id: 1,
    text: 'Elektrik kesintisi var',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 2,
    text: 'Jenerator-1 Calisiyor',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 3,
    text: 'Jenerator-1 Arizali',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });
  Alarms.insert({
    //alarm_id: 4,
    text: 'Jenerator-2 Calisiyor',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 5,
    text: 'Jenerator-2 Arizali',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 6,
    text: 'Giris Kapisi Acik',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

}
