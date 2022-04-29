describe('Test my isWeekday Function',function(){
    it('it should return true when day is not Sunday or Saturday',function(){
        assert.equal(true,isWeekday('Monday'))
    })
    it('it should return false when day is Sunday',function(){
        assert.equal(false,isWeekday('Sunday'))
    })
    it('it should return true when day is Wednesday because it is weekday',function(){
        assert.equal(true,isWeekday('Wednesday'))
    })
    it('it should return false when day is Saturday',function(){
        assert.equal(false,isWeekday('Saturday'))
    })
})