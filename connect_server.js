var original_function = Accounts.updateOrCreateUserFromExternalService;

Accounts.updateOrCreateUserFromExternalService = function(serviceName, serviceData, options) {
    if(Meteor.userId()) {
        var stampedToken = Accounts._generateStampedLoginToken();
        var setAttrs = {};
        _.each(serviceData, function(value, key) {
          setAttrs["services." + serviceName + "." + key] = value;
        });
        Meteor.users.update(
          Meteor.userId(),
          {$set: setAttrs,
           $push: {'services.resume.loginTokens': stampedToken}});
        return {
          token: stampedToken.token,
          id: Meteor.userId(),
          tokenExpires: Accounts._tokenExpiration(stampedToken.when)
        };
    } else {
        return original_function(serviceName, serviceData, options);
    }
};
