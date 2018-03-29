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

    getUserEvents: (req, res) => {
        req.app.get('db').get_user_events(req.params.user_id).then((response) =>{
            console.log(response);
            res.status(200).send(response)
        }).catch(console.log);
    },
    
    cancelEvent: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        
    dbInstance.delete_event([params.id])
    .then( () => res.status(200).send() )   
    .catch( () => res.status(500).send() );   
    },

}