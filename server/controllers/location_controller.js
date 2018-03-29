module.exports ={
    
        updateLocation:(req, res, next)=>{
            let {userId, latitude, longitude} = req.body;
            const dbInstance = req.app.get('db');
            console.log('Location hit')
            dbInstance.add_location([userId,latitude,longitude])
            .then(()=>{res.status(200).send("location updated")})
            .catch(()=>{res.status(500).send("NOPE!")})
        }
    }