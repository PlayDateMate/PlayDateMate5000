module.exports = {

    //=======events controller=============
    createEvent: (req, res) => {
        const dbInstance = req.app.get('db');
        // let user_id = req.user.id;
        console.log("test", req.body);
        let {event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy} = req.body;
        console.log(req.user);
        dbInstance.create_event(event_name, event_description, start_date, end_date, age_min, age_max, address, city, zipcode, privacy). then((response) =>{
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