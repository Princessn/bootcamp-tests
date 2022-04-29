describe ('test my count from all town', function(){
    
    it ('should return 3 reg from Stellies', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345,CL 341','CL'))
    })
    it ('should return 0 reg from Kuilsriver', function(){
        assert.equal(0, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL 758'))
    })
    it ('should return 0 reg from Cape Town', function(){
        assert.equal(0, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL 758'))
    })
    
})