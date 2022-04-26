describe('Test my isWeekday Function',function(){
    it('it should return true when day is not Sunday or Saturday',function(){
        assert.equal(true,isWeekday('Monday'))
    })
    it('it should return false when day is Sunday or Saturday',function(){
        assert.equal(false,isWeekday('Sunday'))
    })
    it('it should return false when day is not Sunday or Saturday and day is in capital letters',function(){
        assert.equal(false,isWeekday('MONDAY'))
    })
})