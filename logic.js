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
    nameIsNotNull: function(name){
        return typeof name === 'string'
    },
    idIsNumber: function(number){
        return typeof number ==='number'
    },
    friendIsAccepted: function(friendStatus){
        return friendStatus ==='accepted'
    },
    friendRequestIsPending: function(requestStatus){
        return requestStatus === 'pending'
    },
    receivedRequestsExists: function(array){
        if(array.length<1){
            return false
        }else{
            return true
        }
    },
    longitudeisnumber: function(lng){
        return typeof lng === 'number'
    }
    
}



