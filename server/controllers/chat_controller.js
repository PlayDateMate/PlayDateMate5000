module.exports = {
    getMessages: (req, res)=>{
        const db = req.app.get('db');
        const user_id = req.user.id *1;
        const friend_id = req.params.id *1
        console.log('test stuff', req.params.id)
        db.get_chat([user_id, friend_id]).then(response=>{
            res.status(200).send(response)
        }).catch('no chat found')
    },
    postMessage: (req, res)=>{
        console.log("post request", req.body)
        const db = req.app.get('db');
        const user_id = req.user.id *1;
        const friend_id = req.body.friend_id *1
        db.post_chat([user_id, friend_id, req.body.message]).then(response=>{
            res.status(200).send(response);
        })
    }


    
    

}