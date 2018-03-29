module.exports = {
    getChild: (req, res)=>{
        const db = req.app.get('db');
        console.log('parents id', req.params.id);
        db.get_child([req.params.id]).then((response)=>{
            res.status(200).send(response)
        }).catch(console.log('error getting children'))
    },
    addChild: (req, res)=>{
        const db = req.app.get('db');
        console.log('new child', req.body);
        db.add_child([req.body.user_id, 
                    req.body.child_name,
                    req.body.dob, 
                    req.body.gender,
                    req.body.interests]).then((response)=>{
                        res.status(200).send(response)
                    })
    },
    getOneChild: (req, res)=>{
        const db = req.app.get('db');
        db.get_one_child([req.params.id]).then((response)=>{
            res.status(200).send(response)
        }).catch(console.log('Child not found'))
    }

}