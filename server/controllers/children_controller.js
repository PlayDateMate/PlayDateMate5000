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
    },
    getUser: (req, res) =>{
        const db = req.app.get('db');
        db.get_user([req.user.id]).then(response=>{
            res.status(200).send(response)
        })
    }, 
   getChildAge: (req, res) =>{
       console.log('are we getting the kids age?')
    const db = req.app.get('db');
    db.get_child_age([req.params.id]).then((response)=>{
        console.log('child age', response)
        res.status(200).send(response)
    })
   },
   updateChild: (req, res)=>{
        console.log('are we updating this child?', req.body)
        const db = req.app.get('db');
        db.update_child([req.body.child_id, req.body.child_name, req.body.dob, req.body.gender, req.body.interests]).then(response=>{
            res.status(200).send(response)
        })
   }

}

// set child_name = $2, dob = $3, gender = $4, interests = $5
// where id = $1;
// user_id: this.state.parentId,
// child_name: this.state.childName,
// dob: this.state.dob,
// gender: this.state.childGender,
// interests: this.state.childInterests,