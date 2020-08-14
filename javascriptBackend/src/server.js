let cors =require("cors");
let express= require("express");
let {Application, Request, Response} =require("express");
let {steamRouter}=require("./routers/steamAuth");
const app=express();
const port =process.env.HERO_PORT || 8100;

var session = require('express-session');
app.use(session({
    secret: 'YOURSESSIONSECRETKEY', // Change this to anything else
    resave: false,
    saveUninitialized: true
}));
var OpenIDStrategy = require('passport-openid').Strategy;
var SteamStrategy = new OpenIDStrategy({
        // OpenID provider configuration
        providerURL: 'http://steamcommunity.com/openid',
        stateless: true,
        // How the OpenID provider should return the client to us
        returnURL: 'http://localhost:'+port+'/auth/openid/return',
        realm: 'http://localhost:'+port+'/',
    },
    // This is the "validate" callback, which returns whatever object you think
    // should represent your user when OpenID authentication succeeds.  You
    // might need to create a user record in your database at this point if
    // the user doesn't already exist.
    function(identifier, done) {
        // The done() function is provided by passport.  It's how we return
        // execution control back to passport.
        // Your database probably has its own asynchronous callback, so we're
        // faking that with nextTick() for demonstration.
        process.nextTick(function () {
            // Retrieve user from Firebase and return it via done().
            var user = {
                identifier: identifier,
                // Extract the Steam ID from the Claimed ID ("identifier")
                steamId: identifier.match(/\d+$/)[0]
            };
            // In case of an error, we invoke done(err).
            // If we cannot find or don't like the login attempt, we invoke
            // done(null, false).
            // If everything went fine, we invoke done(null, user).
            return done(null, user);
        });
    });
    var passport = require('passport');
    passport.use(SteamStrategy);

    passport.serializeUser(function(user, done) {
        done(null, user.identifier);
    });
    passport.deserializeUser(function(identifier, done) {
        // For this demo, we'll just return an object literal since our user
        // objects are this trivial.  In the real world, you'd probably fetch
        // your user object from your database here.
        done(null, {
            identifier: identifier,
            steamId: identifier.match(/\d+$/)[0]
        });
    });
    app.use(passport.initialize());
app.use(passport.session());
app.post('/auth/openid', passport.authenticate('openid'));


app.get('/auth/openid/return', passport.authenticate('openid'),
    function(request, response) {
        if (request.user) {
            response.redirect('/?steamid=' + request.user.steamId);
        } else {
            response.redirect('/?failed');
        }
});

app.get('/', function(request, response) {
    response.write('<!DOCTYPE html>')
    if (request.user) {
        response.write(request.session.passport &&
            JSON.stringify(request.user) || 'None');
        response.write('<form action="/auth/logout" method="post">');
        response.write('<input type="submit" value="Log Out"/></form>');
    } else {
        if (request.query.steamid) {
            response.write('Not logged in.');
        }
        response.write('<form action="/auth/openid" method="post">');
        response.write(
            '<input name="submit" type="image" src="http://steamcommunity-a.' +
            'akamaihd.net/public/images/signinthroughsteam/sits_small.png" ' +
            'alt="Sign in through Steam"/></form>');
    }
    response.send();
});

app.post('/auth/logout', function(request, response) {
    request.logout();
    // After logging out, redirect the user somewhere useful.
    // Where they came from or the site root are good choices.
    response.redirect(request.get('Referer') || '/')
});







app.listen(port, () => 
{
console.log("server started"+port);
});


app.use("/test",steamRouter);
module.exports.app=app;
module.exports.port=port;
/*
//Configure the middleware
app.use(function (req, res, next) 
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "true");
    // Pass to next layer of middleware
    next();
});
  
//allow jsons to be sent back and forth
app.use(express.json())
//





*/