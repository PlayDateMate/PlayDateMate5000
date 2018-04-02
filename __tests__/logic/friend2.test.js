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
