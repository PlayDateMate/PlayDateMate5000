module.exports = {

    findFriends: (req, res) => {
        console.log('Hitt')
        const db = req.app.get('db')
        db.friend_search_results([`%${req.params.id}%`]).then(response => {
            console.log(response)
            res.status(200).send(response)
        }).catch('DIDNT WORK!!!')
    }

}