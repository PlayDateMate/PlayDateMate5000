require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const axios = require('axios');
const path = require('path');

// const event_controller = require('./controllers/event_controller');

const  {
    SERVER_PORT,
    SESSION_SECRET, 
    DOMAIN, 
    CLIENT_ID, 
    CLIENT_SECRET, 
    CALLBACK_URL,
    CONNECTION_STRING

} = process.env;

const app = express();


// app.use(express.static(__dirname + "/../build"));

app.use(cors());

app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: true
}))

app.use(passport.initialize() );
app.use(passport.session() );

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: DOMAIN, 
    clientID: CLIENT_ID,  
    clientSecret: CLIENT_SECRET, 
    callbackURL: CALLBACK_URL, 
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    const { sub } = profile._json;
    db.find_user([sub]).then( response => {
        console.log(sub)
        if(response[0]){
            console.log("step here", response[0].id)
            done(null, response[0].id)
        }else{
            db.create_user([ sub ]).then( response => {
                done(null, response[0].id)
            })
        }
    })
}))

passport.serializeUser( (id, done)=> {
    console.log('I think we got here')
    done(null, id);
})

passport.deserializeUser( (id, done) =>{
    console.log('but I am not sure if we got HERE')
    const db = app.get('db');
    db.find_logged_in_user([id]).then( response => {
        done(null, response[0])  
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.LOGIN_HOME
}))

app.get('/auth/me', (req, res) => {
    if(!req.user){
        res.status(404).send('Not logged in!');
    }else{
        res.status(200).send(req.user);
    }
})

app.get('/getUserInfo', (req, res)=>{
    const db = app.get('db');
    console.log('can you find me?', req.user)
    db.get_user([req.user.id]).then(response =>{
        res.status(200).send(response)
    }).catch('cannot find user!')
})


// app.post('/api/events/create', event_controller.createEvent)

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(SERVER_PORT, ()=> console.log(`The server is running WITHOUT NATIVE ERRORS on ${SERVER_PORT}`))


