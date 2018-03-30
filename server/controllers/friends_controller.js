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
        db.add_new_friend([])
    },
    getSenderRequest: (req, res) =>{
        const db = req.app.get('db')
        db.get_sender_requests([])
    },
    getReceiverRequest: (req, res) =>{
        const db = req.app.get('db')
        db.get_receiver_requests([])
    },
    acceptFriendRequest: (req, res) =>{
        const db = req.app.get('db')
        db.accept_friend_requests([])
    },

    

}