describe('test my isFromBellville Function' , function(){
    it("It should return true when number plate starts with 'CY'" , function(){
        assert.equal(true,isFromBellville('CY 243'));

        
    });
    it("It should return false when number plate does not start with 'CY'" , function(){
        assert.equal(false,isFromBellville('CJ 212', 'ND 546','CJ 23'));
    })
})