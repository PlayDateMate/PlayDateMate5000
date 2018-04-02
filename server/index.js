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

const children_controller = require('./controllers/children_controller');
const event_controller = require('./controllers/event_controller');
const location_controller = require('./controllers/location_controller');
const friends_controller = require('./controllers/friends_controller');

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
    const { user_name, image, sub } = profile._json;
    db.find_user([sub]).then( response => {
        console.log(sub)
        if(response[0]){
            console.log("step here", response[0].id)
            done(null, response[0].id)
        }else{
            console.log()
            db.create_user([ user_name, image, sub ]).then( response => {
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
// ******************* Loading user endpoint***********************
app.get('/getUserInfo', (req, res)=>{
    const db = app.get('db');
    console.log('can you find me?', req.user)
    db.get_user([req.user.id]).then(response =>{
        res.status(200).send(response)
    }).catch('cannot find user!')
})


//******************* Children Endpoints ***************************
app.get('/getchildren/:id', children_controller.getChild);
app.post('/addchild', children_controller.addChild);
app.get('/getonechild/:id', children_controller.getOneChild)
app.get('/getuser', children_controller.getUser)
app.get('/getchildage/:id', children_controller.getChildAge)
app.put('/updatechild/:id', children_controller.updateChild)



//******************* Events Endpoints *****************************
app.post('/api/events', event_controller.createEvent);
app.get('/api/user/:user_id/myevents', event_controller.getUserEvents)
app.get('/findUser/:id', event_controller.searchEventsByName)
app.post('/addevent', event_controller.addNewEvent )



//******************** Dashboard Endpoints **************************
app.put('/api/location',location_controller.updateLocation)



//******************** Friends Endpoints ****************************
app.get('/findUser/:id', friends_controller.findFriends)
app.post('/addfriend', friends_controller.addNewFriend )
app.get('/getsent', friends_controller.getSenderRequest)
app.get('/getfriends', friends_controller.getFriends)
app.get('/receivedRequests', friends_controller.getReceiverRequest)
app.put('/acceptfriend', friends_controller.acceptFriendRequest)
app.put('/denyfriend', friends_controller.denyFriends)

//******************** Event Invite Endpoints ****************************
app.post('/addFriendToEvent', event_controller.addFriendToEvent)


//******************** View Profile Endpoints ****************************

app.get('/viewprofile')




// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });


app.listen(SERVER_PORT, ()=> console.log(`The server is running WITHOUT NATIVE ERRORS on ${SERVER_PORT}`))


