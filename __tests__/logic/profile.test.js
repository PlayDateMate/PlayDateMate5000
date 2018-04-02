const logic = require('../../logic')

describe('check Male', ()=>{

    it('gender is male', ()=>{
        expect(logic.isMale('Male'))
            .toEqual(true)
    })
    it('gender is lowercase', ()=>{
        expect(logic.isMale('male'))
            .toEqual(false)
    })
    it('gender is blank', ()=>{
        expect(logic.isMale(''))
            .toEqual(false)
    })
    it('gender is number', ()=>{
        expect(logic.isMale(10))
            .toEqual(false)
    })
})



describe('check Female', ()=>{

    it('gender is female', ()=>{
        expect(logic.isFemale('Female'))
            .toEqual(true)
    })
    it('gender is lowercase', ()=>{
        expect(logic.isFemale('female'))
            .toEqual(false)
    })
    it('gender is blank', ()=>{
        expect(logic.isFemale(''))
            .toEqual(false)
    })
    it('gender is number', ()=>{
        expect(logic.isFemale(10))
            .toEqual(false)
    })
    

})



describe('age is a number', ()=>{
    it('object key/value = number',()=>{
    
        let obj = {age: 5};
        expect(logic.childHasAge(obj.age))
            .toEqual(true)
    })
    it('object has key',()=>{
    
        let obj = {birthday: 5};
        expect(logic.childHasAge(obj.age))
            .toEqual(false)
    })
    it('object key/value = string',()=>{
    
        let obj = {age: '5'};
        expect(logic.childHasAge(obj.age))
            .toEqual(false)
    })
    
})



describe('name is a string', ()=>{
    it('object key/value = string',()=>{
    
        let obj = {name: 'Tyler'};
        expect(logic.childNameText(obj.name))
            .toEqual(true)
    })
    it('object is number',()=>{
    
        let obj = {name: 5};
        expect(logic.childNameText(obj.name))
            .toEqual(false)
    })
    it('object has wrong key',()=>{
    
        let obj = {birthday: 5};
        expect(logic.childNameText(obj.age))
            .toEqual(false)
    })
    it('object is undefined',()=>{
    
        let obj = {age: null};
        expect(logic.childNameText(obj.age))
            .toEqual(false)
    })
})




describe('id is a number', ()=>{
    it('object key/value = number',()=>{
    
        let obj = {id: 5};
        expect(logic.idIsNumber(obj.id))
            .toEqual(true)
    })
    it('object is !number',()=>{
    
        let obj = {id: '5'};
        expect(logic.idIsNumber(obj.id))
            .toEqual(false)
    })
    it('object has wrong key',()=>{
    
        let obj = {birthday: 5};
        expect(logic.idIsNumber(obj.id))
            .toEqual(false)
    })
    it('object is undefined',()=>{
    
        let obj = {id: null};
        expect(logic.idIsNumber(obj.id))
            .toEqual(false)
    })
})

