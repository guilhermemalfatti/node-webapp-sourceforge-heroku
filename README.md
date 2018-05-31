# node-webapp-sourceforge-heroku
This is a simple web app that can be used to sync (and then view) data from Salesforce using Heroku Connect and Nodejs.

The web app uses PostgresSQL, in which we store the data by salesForce.

This web app uses Heroku Connect, which will sync data from a Salesforce Org to the Heroku Postgres database, which is attached to the app. Also was created a mapping that instructs Heroku Connect on which Salesforce Objects to sync to Heroku Postgres, in which was created the map for the "Contact" object, mapping 'firstname', 'lastname' and 'email'.

The project uses automated deploy, using Github integration.

# Deploy

The easiest way to deploy this is to push the button:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


##Resources:
 - https://devcenter.heroku.com/articles/getting-started-with-heroku-and-connect-without-local-dev#next-steps
 - Google
 - Developerforce.com

