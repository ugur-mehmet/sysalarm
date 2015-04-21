AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'loginLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'loginLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'loginLayout'});
AccountsTemplates.configure({
    texts: {
      title: {
        // changePwd: "Password Title",
        // enrollAccount: "Enroll Title",
        // forgotPwd: "Forgot Pwd Title",
        // resetPwd: "Reset Pwd Title",
        // signIn: "System Alarms Login Page"
        // signUp: "Sign Up Title",
        // verifyEmail: "Verify Email Title",
      }
    },
    forbidClientAccountCreation: false,
    hideSignUpLink: true
});
//Document for Customization
//https://github.com/meteor-useraccounts/core/blob/master/Guide.md#basic-customization

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
  _id: 'password',
    type: 'password',
    placeholder: {
        signUp: "At least five characters"
    },
    required: true,
    minLength: 5,
    // re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    // errStr: 'At least 1 digit, 1 lowercase and 1 uppercase'
    }
]);
