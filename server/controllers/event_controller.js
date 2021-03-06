module.exports = {

    //=======events controller=============
    createEvent: (req, res) => {
        const dbInstance = req.app.get('db');
        // let user_id = req.user.user_id;
        console.log("test", req.body);
        let {user_id, event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy} = req.body;
        console.log(req.user);
        dbInstance.create_event(user_id, event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy). then((response) =>{
            console.log(response);
            res.status(200).send(response)

        }).catch(console.log);
    },

    myEvents: (req, res) => {
        req.app.get('db').get_user_events(req.params.user_id).then((response) =>{
            console.log(response);
            res.status(200).send(response)
        }).catch(console.log);
    },

    upComingEvents: (req, res) => {
        req.app.get('db').get_upcoming_events(req.params.user_id).then((response) =>{
            console.log(response);
            res.status(200).send(response)
        }).catch(console.log);
    },
    
    cancelEvent: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;   
    dbInstance.delete_event([req.user.id, params.id]).then( (response) => {
        console.log('response');
        res.status(200).send(response) 
        }).catch( () => res.status(500).send() );   
    },

    // delete: (req, res) => {
    //     for (let i  = 0; i < contacts.length; i++) {
    //         if (events[i].id === parseInt(req.params.id)) {
    //             events.splice(i, 1);
    //         }
    //     }
    //     res.status(200).send('Contact deleted :(');  
    // }

    searchEventsByName: (req, res) => {
        const db = req.app.get('db')
        db.events_search_results([`%${req.params.id}%`]).then(response => {
            console.log(response)
            res.status(200).send(response)
        }).catch(console.log);
    },

    addNewEvent: (req, res) =>{
        const db = req.app.get('db')
        const {user_id, event_id} = req.body
        db.add_new_friend([user_id, event_id]).then(response =>{
            console.log('Gat Ya!')
        }).catch(console.log(" :( "))
    },

    acceptEventInvite: (req, res) =>{
        console.log('accept event invite', req.body.sender, req.user.id)
        const db = req.app.get('db')
        db.accept_event_invite([req.body.sender, req.user.id]).then(response=>{
            console.log('You have accepted to attend an event')
        })
    },

    getSenderEventInvite: (req, res) =>{
        console.log('Waw!', req.user.id)
        const db = req.app.get('db')
        db.get_sender_event_invites([req.user.id]).then(response=>{
            res.status(200).send(response)
        })
    },

    getReceiverEventInvite: (req, res) =>{
        console.log('Are my requests here yet?!', req.user.id)

        const db = req.app.get('db')
        db.get_receiver_event_invites([req.user.id]).then((response) => {
            console.log("invite response", response)
            res.status(200).send(response)
        })
    },

    getAttendingEvent: (req, res) => {
        const db = req.app.get('db')
        db.get_attending_event([req.user.id]).then(response => {
            console.log('getting friends')
            res.status(200).send(response)
        }).catch(console.log('here are your friends'))
    },

    denyEventInvite: (req, res) =>{
        console.log('Unable to attend event')
        const db = req.app.get('db')
        db.deny_event_invite([req.body.sender, req.user.id]).then(response => {
            res.status(200).send(console.log('DENIED'))
            
        }).catch(console.log('no dice'))
    },


    /*===== ADD FRIEND TO EVENT =====*/

    addFriendToEvent: (req, res) =>{
        const db = req.app.get('db')
        const {user_id, friend_id, event_id} = req.body
        db.invite_to_event([user_id, friend_id, event_id]).then(response =>{
            console.log('YAY! You might get a new friend!')
        }).catch(console.log('no friends for you'))
    },

    eventId: (req, res) =>{
        console.log('HIT!!!')
        const db = req.app.get('db')
        db.get_event([req.params.id]).then(response => {
            res.send(200).send(response)
        })

    }
            /*===== END =====*/


            
}