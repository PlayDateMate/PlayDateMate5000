const logic = require('../../logic')

describe('check name is present', ()=>{
    
        it('name is string', ()=>{
            expect(logic.nameIsNotNull('Paige Fawcett'))
                .toEqual(true)
        })
        it('name is not number',()=>{
            expect(logic.nameIsNotNull(4))
                .toEqual(false)
        })
        it('name is not null',()=>{
            expect(logic.nameIsNotNull(null))
                .toEqual(false)
        })
    })
describe('check id is number', ()=>{
    it('id is number', ()=>{
        expect(logic.idIsNumber(1))
            .toEqual(true)
    })
    it('id is not string', ()=>{
        expect(logic.idIsNumber('Hello'))
            .toEqual(false)
    })
    it('check id is not null', ()=>{
            expect(logic.idIsNumber(null))
                .toEqual(false)
        })
})
describe('check friend request is pending', () =>{
    it('friend request is pending', ()=>{
        expect(logic.friendRequestIsPending('pending'))
            .toEqual(true)
    })
    it('friend request is not accepted', ()=>{
        expect(logic.friendRequestIsPending('accepted'))
            .toEqual(false)
    })
    it('friend request is not null', ()=>{
        expect(logic.friendRequestIsPending(null))
            .toEqual(false)
    })
describe('check received requests exist', ()=>{
    it('friend requests has at least 1',()=>{
        expect(logic.receivedRequestsExists(['Paige', "is", "awesome"]))
            .toEqual(true)
    })
    it('check recieved requests is not',()=>{
        expect(logic.receivedRequestsExists([]))
            .toEqual(false)
    })
})
describe('check longitude is number',()=>{
    it('longtitude is not a string',()=>{
        expect(logic.longitudeisnumber('hello'))
            .toEqual(false)
    })
    it('check longitude is not string',()=>{
        expect(logic.longitudeisnumber(2))
            .toEqual(true)
    })
})
})




