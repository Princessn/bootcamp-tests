describe ('test my count from all town', function(){
    
    it ('should return CJ reg when fromStellies is passed', function(){
        assert.equal(0, countAllFromTown('fromStellies'))
    })
    it ('should return an empty string when fromKuilsriver is passed', function(){
        assert.equal([], countAllFromTown('fromKuilsriver'))
    })
    
})