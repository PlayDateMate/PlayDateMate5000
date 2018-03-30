module.exports = {

    findFriends: (req, res) => {
        console.log('Hitt')
        const db = req.app.get('db')
        db.friend_search_results([`%${req.params.id}%`]).then(response => {
            console.log(response)
            res.status(200).send(response)
        }).catch('DIDNT WORK!!!')
    },
    addNewFriend: (req, res) =>{
        const db = req.app.get('db')
        const {user_id, friend_id} = req.body
        db.add_new_friend([user_id, friend_id]).then(response =>{
            console.log('YAY! You might get a new friend!')
        }).catch(console.log('no friends for you'))
    },
    getSenderRequest: (req, res) =>{
        console.log('did we check for friends?', req.user.id)
        const db = req.app.get('db')
        db.get_sender_requests([req.user.id]).then(response=>{
            res.status(200).send(response)
        })
    },
    getReceiverRequest: (req, res) =>{
        console.log('Are my requests here yet?!')
        const db = req.app.get('db')
        db.get_receiver_requests([req.user.id]).then((response) => {
            res.status(200).send(response)
        })
    },
    acceptFriendRequest: (req, res) =>{
        console.log('accepting friends')
        const db = req.app.get('db')
        db.accept_friend_requests([req.body.sender, req.user.id]).then(response=>{
            console.log('successfully added friend')
        })
    },

    getFriends: (req, res) => {
        const db = req.app.get('db')
        db.get_friend([req.user.id]).then(response => {
            console.log('getting friends')
            res.status(200).send(response)
        }).catch(console.log('here are your friends'))
    },
    denyFriends: (req, res) =>{
        console.log('lets deny someone!')
        const db = req.app.get('db')
        db.deny_friend_request([req.body.sender, req.user.id]).then(response => {
            res.status(200).send(console.log('DENIED'))
            
        }).catch(console.log('no dice'))
    },

}