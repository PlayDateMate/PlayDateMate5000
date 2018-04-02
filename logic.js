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
    }
}