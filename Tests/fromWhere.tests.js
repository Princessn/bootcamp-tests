describe('Test my fromWhere Function',function(){
    it('it should return a "Some other place!" string for an unknown town',function(){
        assert.equal('Some other place!',fromWhere('CC'))
    })
    it('it should return the name of the town when registration number starting with "CA" is passed',function(){
        assert.equal('Cape Town',fromWhere('CA'))
    })
    it('it should return the name of the town when registration number starting with "CY" is passed',function(){
        assert.equal('Bellville',fromWhere('CY'))
    })
})