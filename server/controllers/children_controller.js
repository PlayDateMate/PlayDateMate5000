module.exports = {
    getChild: (req, res)=>{
        const db = req.app.get('db');
        console.log('parents id', req.params.id);
        db.get_child([req.params.id]).then((response)=>{
            res.status(200).send(response)
        }).catch(console.log('error getting children'))
    },
  

}