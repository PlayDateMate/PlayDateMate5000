const logic = require('../../logic')

describe('check name is present', ()=>{
    
        it('gender is male', ()=>{
            expect(logic.isMale('Paige Fawcett'))
                .toEqual(true)
        })
    })