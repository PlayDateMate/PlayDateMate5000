module.exports ={
    
    viewProfile:(req, res, next)=>{
        
        const db = req.app.get('db');
        db.get_user([req.params.id]).then(response=>{
            console.log('is this id coming through?')
            res.status(200).send(response)
        }).catch('could not find profile')
       
    }
}