module.exports ={
    isMale: function(gender){
        return gender === 'Male'
    },
    isFemale: function(gender){
        return gender === 'Female'
    },
    childHasAge: function(age){
        return typeof age === 'number'
    },
    childNameText: function(name){
        return typeof name === 'string'
    },
    idIsNumber: function(id){
        return typeof id === 'number'
    },

    /*===== KEANUS END POINT TESTS =====*/

    isFriend: function(friend){
        return typeof friend === 'string'
    },
    friendId: function(friendId){
        return typeof friendId === 'number'
    },
    latitude: function(latitude){
        return typeof latitude === 'number'
    },
    eventDate: function(eventDate){
        return typeof eventDate === 'number'
    },
    eventId: function(eventId){
        return typeof eventId === 'number'
    }







    

}



