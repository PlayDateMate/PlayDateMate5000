const logic = require('../../logic')

describe('check friend', ()=>{

    it('friend is string', ()=>{
        expect(logic.isFriend('string'))
            .toEqual(true)
    })

    it('friend is string', ()=>{
        expect(logic.isFriend(3))
            .toEqual(false)
    })

    it('friend is string', ()=>{
        expect(logic.isFriend(''))
            .toEqual(true)
    })

})


//
describe('check friend', ()=>{

    it('friend is string', ()=>{
        expect(logic.friendId(4))
            .toEqual(true)
    })
    it('friend is string', ()=>{
        expect(logic.friendId('4'))
            .toEqual(false)
    })
    it('friend is string', ()=>{
        expect(logic.friendId(true))
            .toEqual(false)
    })

})

//
describe('check friend', ()=>{

    it('friend is string', ()=>{
        expect(logic.latitude(300))
            .toEqual(true)
    })
    it('friend is string', ()=>{
        expect(logic.latitude([]))
            .toEqual(false)
    })
    it('friend is string', ()=>{
        expect(logic.latitude(12))
            .toEqual(true)
    })
    
})

//
describe('check friend', ()=>{

    it('friend is string', ()=>{
        expect(logic.eventDate(14))
            .toEqual(true)
    })
    it('friend is string', ()=>{
        expect(logic.eventDate(null))
            .toEqual(false)
    })
    it('friend is string', ()=>{
        expect(logic.eventDate(undefined))
            .toEqual(false)
    })
})

//
describe('check friend', ()=>{

    it('event id is a number', ()=>{
        expect(logic.eventId(null))
            .toEqual(false)
    })
    it('event id is a number', ()=>{
        expect(logic.eventId(''))
            .toEqual(false)
    })
    it('event id is a number', ()=>{
        expect(logic.eventId(12))
            .toEqual(true)
    }) 
})