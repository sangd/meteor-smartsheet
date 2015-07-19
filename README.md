meteor-smartsheet
-----------

A Oauth2 wrapper for the Smartsheet API

Installation
-----------

* Install accounts-ui package: `mrt accounts-ui`
* `meteor add sangd:meteor-smartsheet`

Usage
-----------

Creates a new function `Meteor.loginWithSmartsheet(options, callback)`

This is the backbone of `meteor-accounts-smartsheet`

References
-----------
* Meteor documentation: http://docs.meteor.com/
* Smartsheet API: http://www.smartsheet.com/developers/api-documentation

html (jade)
```
h5 This composite document reads data from Smartsheet. Smartsheet authentication is required.
  button.btn.btn-primary#btn-connect-smartsheet(title="Get data from Smartsheet", style="margin-right: 10px;")
    | Connect to Smartsheet
```

javascript handler
```
'click #btn-connect-smartsheet': function (e) {
  function smartsheetCallback() {
    Session.set(SS_NEED_SMARTSHEET_LOGIN, false)
  }

  var options = {}

  Meteor.loginWithSmartsheet(options, smartsheetCallback)
}
```

server side API calls
```
getSmartsheetList: function() {
  try {
    var url = 'https://api.smartsheet.com/1.1/home'
    var res = Meteor.http.get(url, {headers:
                { 'User-Agent': userAgent,
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + Meteor.user().services.smartsheet.accessToken
                  }})
    return res.content
  } catch (e) {
    Meteor.users.update(Meteor.userId(), {$unset: {'services.smartsheet': ''}})
    console.log(e)
    throw e
  }
},
getSmartsheetData: function(dataset) {
  try {
    var url = 'https://api.smartsheet.com/1.1/sheet/' + dataset.id
    var res = Meteor.http.get(url, {headers:
                { 'User-Agent': userAgent,
                  'Accept': 'text/csv',
                  'Authorization': 'Bearer ' + Meteor.user().services.smartsheet.accessToken
                  }})
    return res.content
  } catch (e) {
    Meteor.users.update(Meteor.userId(), {$unset: {'services.smartsheet': ''}})
    console.log(e)
    throw e
  }
}
```

client-side API call
```
Meteor.call('getSmartsheetData', dataset.smartsheetDataset, function(err, strData) {
  if (!err) {
    console.log(strData)
  }
})
```
