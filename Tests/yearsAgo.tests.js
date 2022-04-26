describe('Test my yearsAgo Function',function(){
    it('it should return the difference between current year and 10 years ago',function(){
        assert.equal(2012,yearsAgo(10));
    })
    it('it should return the difference between current year and 20 years ago',function(){
        assert.equal(2002,yearsAgo(20));
    })
    it('it should return the difference between current year and 5 years ago',function(){
        assert.equal(1982,yearsAgo(40));
    })
    it('it should return the difference between current year and 0 years ago',function(){
        assert.equal(2022,yearsAgo(0));
    })
    
})